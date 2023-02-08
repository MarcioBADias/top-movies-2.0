import React from 'react';
import Global from './styles/global';
import Header from './components/header/index';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <Global/>
      <Outlet/>
    </>
  );
}

export default App;
