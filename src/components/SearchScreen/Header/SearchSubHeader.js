import React from 'react'
import { Link } from 'react-router-dom'
export const SearchSubHeader = () => {
  return (
    <div className='container-fluid px-5 py-3 '>
      
    <div className='col-md-6' style={{marginLeft:"8%"}}>
        <ul className='nav'>
            <li className='nav-item'>
                <Link to={"/"} className="d-flex align-items-center nav-link justify-content-between text-dark">
                    <i className='fa fa-search'> All</i>
                </Link>

            </li>
            <li className='nav-item'>
                <Link to={"/"} className="d-flex align-items-center nav-link justify-content-between text-dark">
                    <i className='fa fa-location '> Map</i>
                </Link>

            </li>
            <li className='nav-item'>
                <Link to={"/"} className="d-flex align-items-center nav-link justify-content-between text-dark">
                    <i className='fa fa-play '> Video</i>
                </Link>

            </li>
            <li className='nav-item'>
                <Link to={"/"} className="d-flex align-items-center nav-link justify-content-between text-dark">
                    <i className='fa fa-search '> News</i>
                </Link>

            </li>
            <li className='nav-item'>
                <Link to={"/"} className="d-flex align-items-center nav-link justify-content-between text-dark">
                    <i className='fa fa-image '> Images</i>
                </Link>

            </li>
            <li className='nav-item'>
                <Link to={"/"} className="d-flex align-items-center nav-link justify-content-between text-dark">
                    <i className='fa fa-bars '> More</i>
                </Link>
            </li>

        </ul>

    </div>

  
</div>
  )
}
