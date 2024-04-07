import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logo } from "./assets";
import { Home, CreatePost } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <header
        className="w-full flex justify-between items-center bg-white 
      sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]"
      >
        <Link to="/gallery">
          <img src={logo} alt="logo" className="w-28 object-contain"></img>
        </Link>
        <h1 className="font-extrabold text-[#222328] text-[32px]">ImaGenate</h1>
        <div>
          <Link
            to="/gallery"
            className="font-inter font-medium bg-[#4e53e3] text-white px-5 py-3 mr-3 rounded-md 
          hover:bg-[#6469ff] transition duration-200 ease-in-out"
          >
            Gallery
          </Link>
          <Link
            to="/"
            className="font-inter font-medium bg-[#4e53e3] text-white px-5 py-3 ml-3 rounded-md 
          hover:bg-[#6469ff] transition duration-200 ease-in-out"
          >
            Create
          </Link>
        </div>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/gallery" element={<Home />} />
          <Route path="/" element={<CreatePost />} />
        </Routes>
      </main>
      <footer className="bg-[#e6ebf4] text-gray text-center py-5">
        <p className="text-md">Made with ♥ by Tudor</p>
      </footer>
    </BrowserRouter>
  );
};

export default App;
