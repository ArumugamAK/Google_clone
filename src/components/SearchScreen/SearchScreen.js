import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from './Header/header';
import { SearchData } from './SearchData/SearchData';
const SearchScreen = ({searchTerm,googleData,setSearch,openvoicesearch}) => {
  // const {}
  const navigate = useNavigate();
  console.log(googleData);
  useEffect(()=>{
    if(searchTerm===""){
      navigate('/')
    }
    // setSearch(searchTerm);
  },[searchTerm]);
  // console.log(navigate);

  return (
    <div>
    <Header searchTerm={searchTerm} setSearch={setSearch} openvoicesearch={openvoicesearch}/>
  <div className="container">
    <div className="row">
      <SearchData googleData={googleData}/>
    </div>
  </div>
    </div>
  )
};

export default SearchScreen;
