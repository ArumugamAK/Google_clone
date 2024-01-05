
import React, { useState } from 'react';

const HomeScreen=({setSearch,openvoicesearch})=> {
  const [input, setInput] = useState('');
  const handleSubmit=(e)=>{
    e.preventDefault();
      if(/^[a-zA-Z0-9].*/.test(input) || /^[a-zA-Z0-9]+" ".*/.test(input)){
        setSearch(input);
      }
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className="col-md-12 d-flex flex-column align-items-center justify-content-center">
          <img
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="Google_Icon"
            className="mx-auto my-3"
          />
          <div className="formDiv col-md-5 border my-5 p-1 d-flex flex-row align-items-center justify-content-between" style={{ borderRadius: '20px' }}>
            <div className="d-flex align-items-center" style={{ width: '90%' }}>
              <i className="fa fa-search mx-2"></i>
              <form style={{ width: '100%' }} onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  className="form-control border-0"
                  style={{
                    width: 'calc(110% - 24px)', // Adjusting width to account for padding
                    boxShadow: 'none',
                    outline: 'none',
                  }}
                />
              </form>
              {input ? <i type="button" className="fa fa-times mx-1" onClick={() => setInput('')} ></i> : null}
            </div>
            <button className="btn mx-1" type="button" onClick={()=>openvoicesearch()}>
              <i className="fa fa-microphone "></i>
            </button>
          </div>
          <div className="btns mx-auto text-center">
            <button type="button" className="btn btn-default mx-1">Google Search</button>
            <button type="button" className="btn btn-default mx-1">Felling Lucky</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomeScreen;
