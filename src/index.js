import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppProvider } from './Context/AppContext';
import Categories from './Components/Categories';
import ItemList from './Components/ItemList';
import Logo from './Components/Logo'
import './index.css';
import SearchBar from './Components/SearchBar';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AppProvider>
      <Logo/>
      <SearchBar/>
      <div className='wrapper'>
        <Categories />
        <ItemList/>
      </div>
    </AppProvider>
  </React.StrictMode>
);

