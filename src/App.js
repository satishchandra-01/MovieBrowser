import './App.css';
import {Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import React from 'react';
import Navbar from './components/Navbar';
import SearchView from './components/SearchView';
import { useState } from 'react';
import { useEffect } from 'react';
import MovieView from './components/MovieView';
function App() {
  const [searchResults, setSearchResults] = useState([])
  const [searchText, setSearchText] = useState('')
  
  useEffect(()=>{
    if(searchText){
      console.log("fetching")
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=676161c6c2bbe0e6a5727c8440b793bb&language=en-US&query=${searchText}&page=1&include_adult=false`)
      .then(response=>response.json())
      .then(data=>{
        setSearchResults(data.results)
      })
    }
   
  },[searchText])
  
  return (
    <>
      <Navbar searchText={searchText} setSearchText={setSearchText}/>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route path="/search" element={<SearchView keyword={searchText} searchResults={searchResults} />}/>
          <Route exact path="/movie/:id" element={<MovieView/>} />
        </Routes>
    </>
  );
}

export default App;
