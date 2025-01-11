import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Header from "./header.jsx";
import SideBar from "./sideBar.jsx";
import Window from "./window.jsx";

const App = () => {
  useEffect(() => {
    document.title = "Data - Projeto Guarda Rios";
  }, []);

  const [currentPage, setCurrentPage] = useState(0);

  const updateCurrentPage = (newValue) => {
    setCurrentPage(newValue);
  }

  return (
    <>
      <SideBar currentPage={currentPage} updatePageFunc={updateCurrentPage} />
      <Header headerTitle="Projeto Guarda Rios" />
      <Window currentPage={currentPage} />
    </>
  );
};

export default App;
