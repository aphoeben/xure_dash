import React from "react";
import App from "../App";
import { FiBell, FiSettings, FiMoreHorizontal } from "react-icons/fi";
import { RiUserFill, RiTimer2Fill, RiCoupon2Fill, RiDownload2Fill } from "react-icons/ri";
function Dashboard() {
  return (
      <>
      <div className="w-screen">
        <div className=" flex bg-page-color ">
        <App/>
        
        <div className="flex-wrap">

          <div className="p-7 ml-9 ">
            <div>
              <div className="flex">

              <h1 className="text-button text-3xl mr-60 absolute">Quick Overview</h1>

              
              
            </div>

            <div className="mt-10">
            <span className="text-darkpurp text-lg">Home</span> 
            <span className="text-icon-color text-lg"> / Dashboard</span>
            </div>
            
            </div>
            

          <div>
            <div> 
              <div className=" bg-gradient-to-r from-gradpurp via-gradvia to-gradblk p-5  mt-7 rounded-lg w-80">
              <h1 className="text-white text-xl font-semibold">Hello, Isaac!</h1>
              <h2 className="text-white text-xs">Lorem ipsum</h2>
            </div>
            
            <div>
              <div className="mt-5 flex justify-between">
                <div className="flex-1 bg-contpurp p-5 rounded-lg">

                  <div className="bg-white rounded-full p-1 w-6 ">
                  <RiUserFill className="text-contpurp"/>
                  </div>
                  <h1 className="text-white font-bold text-3xl">20</h1>
                  <h2 className="text-white text-xs">New Users</h2>
                </div>
                <div className="flex-1 bg-contgreen p-5 rounded-lg ml-5">
                  <div className="bg-white rounded-full p-1 w-6 ">
                  <RiTimer2Fill className="text-contgreen"/>
                  </div>
                  <h1 className="text-white font-bold text-3xl">5</h1>
                  <h2 className="text-white text-xs">Pending Approvals</h2>
                </div>
              </div>

              <div className="mt-5 flex justify-between">
                <div className="flex-1 bg-contblue p-5 rounded-lg">
                  <div className="bg-white rounded-full p-1 w-6">
                  < RiCoupon2Fill className="text-contblue"/>
                  </div>
                  <h1 className="text-white font-bold text-3xl">10</h1>
                  <h2 className="text-white text-xs">New Tickets</h2>
                </div>
                <div className="flex-1 bg-contgrn p-5 rounded-lg ml-5">
                  <div className="bg-white rounded-full p-1 w-6 ">
                  < RiDownload2Fill className="text-contgrn"/>
                  </div>
                  <h1 className="text-white font-bold text-3xl">1012</h1>
                  <h2 className="text-white text-xs">Total Downloads</h2>
                </div>
              </div>
            </div>


            <div className="bg-gradblk mt-5 p-5 rounded-lg w-80">
              <div className="flex justify-between">
                <h1 className="text-white font-semibold text-lg">User Xpert Activity</h1>
                <FiMoreHorizontal className="text-white" />
              </div>
            </div>
            </div>
            
      
          </div>

          
          
        </div> 
      </div>  


      <div className="flex-column pt-10 mr-10">

        <div className="flex ml-80 mb-10">
                <FiBell className="text-icon-color text-2xl mt-3 cursor-pointer"/>
                <FiSettings className="text-icon-color text-xl mt-3 ml-2 cursor-pointer"/>

                <input type="text" placeholder="Search" 
                  className="ml-5 mt-1 rounded-full p-1 pl-3 bg-searchcolor text-sm h-10 w-60">

                  </input>
              </div>

          <div className="bg-gradblk p-5 rounded-lg ">
            <div className="flex justify-between">
              <h1 className="text-white font-semibold text-lg">User Volume</h1>
              <FiMoreHorizontal className="text-white" />
            </div>

              
          </div>

          <div className="bg-gradblk mt-5 p-5 rounded-lg">
           <div className="flex justify-between">
            <h1 className="text-white font-semibold text-lg">Top Xperts</h1>
            <FiMoreHorizontal className="text-white" />
           </div>

          </div>

          <div className="bg-gradblk mt-5 p-5 rounded-lg ">
              <div className="flex justify-between">
                <h1 className="text-white font-semibold text-lg">Latest Notification</h1>
                <FiMoreHorizontal className="text-white" />
              </div>

              <div className="mt-5">
                <h1 className="text-white font-semibold text-m">Lorem Ipsum</h1>
                <h1 className="text-white text-m mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                </h1>
                <h1 className="text-button font-semibold text-m mt-1">a few seconds ago</h1>
              </div>
          </div>

            
          </div>
      </div>
      
      
        </div>
        
      
      </>
  );
}

export default Dashboard;
