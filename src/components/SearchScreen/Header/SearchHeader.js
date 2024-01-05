import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const SearchHeader = ({ searchTerm, setSearch,openvoicesearch}) => {
  const [searchText, setSearchText] = useState('');
  // const [search, setSearchText] = useState('');

  useEffect(() => {
    setSearchText(searchTerm);
    // search(searchTerm);
  }, [searchTerm]);
  // Inside SearchHeader component
const handleSubmit = (e) => {
  e.preventDefault();
   
  if (/^[a-zA-Z0-9].*/.test(searchText) || /^[a-zA-Z0-9]+" ".*/.test(searchText)) {
    setSearch(searchText);
  }
  console.log(setSearch+"  setsearch");
  console.log(searchText+" searchtext");
};
const handleButton= () => {
  // e.preventDefault();
   
  if (/^[a-zA-Z0-9].*/.test(searchText) || /^[a-zA-Z0-9]+" ".*/.test(searchText)) {
    setSearch(searchText);
  }
  // console.log(setSearch+"  setsearch");
  // console.log(searchText+" searchtext");
};


  return (
    <div className='col-md-12 py-3 d-flex align-items-center'>
      <Link to={"/"} className="ms-5">
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google Logo" height="30" />
      </Link>

      <div className='col-md-4 d-flex align-items-center justify-content-between border ms-3'style={{ borderRadius: '20px', }} >
        <form style={{ width: "87%" }} onSubmit={handleSubmit} >
          <input
            type="search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="form-control border-0 mr-2"
            style={{ outline: "none", boxShadow: "none" ,color: "#000"}}
          />
        </form>
        {searchText ? <i className='fa fa-times mx-2' onClick={()=> setSearchText('')}></i> : null}
        <i className='fa fa-microphone' onClick={()=> openvoicesearch()}></i>
        <i className='fa fa-search mx-2' onClick={handleButton}></i>
      </div>
      <ul className='nav ms-auto mr-5'>
        <li className='nav-item'>
          <a href="/" className='nav-link'>
            <i className='fa fa-th' style={{ color: "#000" }}></i>
          </a>
        </li>
        <li className='nav-item'>
          <a href="/" className='nav-link'>
            <i className='fa fa-user' style={{ color: "#000" }}></i>
          </a>
        </li>
      </ul>
    </div>
  );
};
