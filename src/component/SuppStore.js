import React from "react";
import App from "../App";
import { FiBell, FiSettings } from "react-icons/fi";
function SupportStore() {
  return (
      <>
      <div className="flex flex-row flex-wrap bg-page-color">
        <App />

        <div className="p-7 ml-9">
          <div className="flex flex-row flex-wrap items-center">
            <h1 className="text-button text-3xl">Support - XStore</h1>
            <FiBell className="text-icon-color text-2xl mt-2 ml-80"/>
            <FiSettings className="text-icon-color text-xl mt-1 ml-2"/>
            <input type="text" placeholder="Search" 
              className="ml-5 mt-1 rounded-full p-1 pl-3 bg-searchcolor text-sm h-10 w-60"
             
            ></input>
          </div>

          <span className="text-darkpurp text-lg">Home /</span> 
          <span className="text-icon-color text-lg"> Support</span>
          <span className="text-purplight text-lg"> / XStore</span>
          

          
        </div>
        
      </div>
      
      </>
      
   
  );
}

export default SupportStore;
