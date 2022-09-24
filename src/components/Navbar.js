import React from 'react';
import { useNavigate,Link } from "react-router-dom";
import {DebounceInput} from 'react-debounce-input';

const Navbar =({searchText,setSearchText})=>{
  const navigate = useNavigate();
  const updateSearchText= (e) => {
    setSearchText(e.target.value)
    navigate('/search');
  };
  return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">MovieBrowser</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link active" aria-current="page" href="/home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
              <li className="nav-item"><Link className='nav-link' to='/search'>search</Link></li>
            </ul>
            <form className="d-flex">
              <DebounceInput
                className="search"
                placeholder="Search"
                debounceTimeout={500}
                onChange={updateSearchText} 
              />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
  )
}

export default Navbar;