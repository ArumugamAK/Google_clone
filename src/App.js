// import React, { useEffect, useState } from 'react';
// import Home from './components/HomeScreen';
// import { Route, Routes, useNavigate ,Navigate} from 'react-router-dom';
// import SearchScreen from './components/SearchScreen/SearchScreen';
// import { searchData } from './api/googleSearch';
// import { Voicesearch } from './components/VoiceSearch/voicesearch';
// import { recognition } from './api/voiceRecognition';

// export default function App() {
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState('');
//   const[googleData,setGoogleData]=useState({})
//   const[voicsearch,setVoicesearch]=useState(false)
//   const[samehere,setsamehere]=useState('')
//     const setSearch = async (term) => {
//       setSearchTerm(term);
//       const data = await searchData(term);
//       setGoogleData(data);
//       navigate('/search');
//     };
//   const ProtectedRoute = ({ children }) => {
//    if(samehere===""){
//     console.log("searchterm "+searchTerm);
//     console.log(googleData);
//     return <Navigate to="/" />;
//   }
    
//     return children;
//   };
//   const openvoicesearch=()=>{
//     setVoicesearch(true);
//     recognition.start();
//     recognition.onresult=(event)=>{
//       const {transcript}= event.results[0][0];
//       if(transcript!==null || transcript!=="" || transcript!==" "){
//         setVoicesearch(false);
//         setSearch(transcript);
//         // console.log(transcript);
//       }
//       else{
//         setVoicesearch(false);
//         alert("Please try again for voice search");
//       }
//     }
//   }
//   const closevoicesearch=()=>{
//     setVoicesearch(false);
//     recognition.stop();

//   }

//   return (
//     <>
//     {voicsearch?(<Voicesearch closevoicesearch={closevoicesearch}/>):null}
//       <Routes>
//         <Route path="/" element={<Home setSearch={setSearch} openvoicesearch={openvoicesearch}/>} />
//         <Route path="/search" element={<ProtectedRoute><SearchScreen setSearch={setSearch} searchTerm={searchTerm} googleData={googleData} openvoicesearch={openvoicesearch} /></ProtectedRoute> }/>
//       </Routes>
//     </>
//   );
// }
import React, { useEffect, useState } from 'react';
import Home from './components/HomeScreen';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import SearchScreen from './components/SearchScreen/SearchScreen';
import { searchData } from './api/googleSearch';
import { Voicesearch } from './components/VoiceSearch/voicesearch';
import { recognition } from './api/voiceRecognition';

export default function App() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem('searchTerm') || ''
  );
  const [googleData, setGoogleData] = useState(
    JSON.parse(localStorage.getItem('googleData')) || {}
  );
  const [voicsearch, setVoicesearch] = useState(false);

  const setSearch = async (term) => {
    setSearchTerm(term);
    localStorage.setItem('searchTerm', term);

    const data = await searchData(term);
    setGoogleData(data);
    localStorage.setItem('googleData', JSON.stringify(data));

    navigate('/search');
  };

  const ProtectedRoute = ({ children }) => {
    if (searchTerm === '') {
      console.log('searchterm ' + searchTerm);
      console.log(googleData);
      return <Navigate to="/" />;
    }

    return children;
  };

  const openvoicesearch = () => {
    setVoicesearch(true);
    recognition.start();
    recognition.onresult = (event) => {
      const { transcript } = event.results[0][0];
      if (transcript !== null || transcript !== '' || transcript !== ' ') {
        setVoicesearch(false);
        setSearch(transcript);
      } else {
        setVoicesearch(false);
        alert('Please try again for voice search');
      }
    };
  };

  const closevoicesearch = () => {
    setVoicesearch(false);
    recognition.stop();
  };

  return (
    <>
      {voicsearch ? (
        <Voicesearch closevoicesearch={closevoicesearch} />
      ) : null}
      <Routes>
        <Route
          path="/"
          element={<Home setSearch={setSearch} openvoicesearch={openvoicesearch} />}
        />
        <Route
          path="/search"
          element={
            <ProtectedRoute>
              <SearchScreen
                setSearch={setSearch}
                searchTerm={searchTerm}
                googleData={googleData}
                openvoicesearch={openvoicesearch}
              />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}
