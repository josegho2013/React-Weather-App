import React from 'react';
import clima from '../clima.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div>

      <h1 className="clima"> App Clima</h1>
      <img src={clima} alt="img no encontrada" height="100px" weight="1
      00px" />
      <SearchBar onSearch={onSearch}/>
    </div>
  );
};

export default Nav;
