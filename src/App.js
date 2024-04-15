import React, { useState } from 'react';
import { FiChevronsLeft, FiTable, FiBarChart, FiUser, FiBriefcase, FiInfo, FiChevronDown, FiBell, FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Menus = [
  { title: "Dashboard", path: "/" },
  {
    title: "Report", icon: <FiBarChart />, 
    submenu: true,
    submenuItems: [
      { title: "Xpert", path: "/report/xpert" },
      { title: "XStore", path: "/reports/xstore" },
      { title: "Member", path: "/reports/member" }
    ]
  },
  {
    title: "Users", icon: <FiUser />, path: "/users/xpert",
    submenu: true,
    submenuItems: [
      { title: "Xpert", path: "/users/xpert" },
      { title: "XStore", path: "/users/xstore" },
      { title: "Member", path: "/users/member" }
    ]
  },
  { title: "Employee", icon: <FiBriefcase />, path: "/employee" },
  {
    title: "Support", icon: <FiInfo />, path: "/support/xpert",
    submenu: true,
    submenuItems: [
      { title: "Xpert", path: "/support/xpert" },
      { title: "XStore", path: "/support/xstore" },
      { title: "Member", path: "/support/member" }
    ]
  },
  { title: "Notifications", spacing: true, icon: <FiBell />, path: "/notification" },
  { title: "Settings", icon: <FiSettings />, path: "/settings" }
];

const App = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(Array(Menus.length).fill(false)); // Initialize submenu state array

  const toggleSubmenu = (index) => {
    const newSubmenuState = [...submenuOpen];
    newSubmenuState[index] = !newSubmenuState[index];
    setSubmenuOpen(newSubmenuState);
  };

  return (
    <div className={`h-[100vh] bg-sidebar-color h-screen  pt-8 ${open ? 'w-72' : 'w-20'} duration-300 relative`}>
      <FiChevronsLeft
        className={`bg-sidebar-color text-button text-3xl rounded-full absolute -right-3 top-9 cursor-pointer ${!open && 'rotate-180'}`}
        onClick={() => setOpen(!open)}
      />
      <div className='flex-col flex-wrap items-center'>
        {open ? (
          <img src="../XURE logo.png" className="w-28 h-auto ml-7 mt-1" alt="XURE Logo Open" />
        ) : (
          <img src="../xurelogo2.png" className="w-8 h-auto ml-6 mt-1" alt="XURE Logo Closed" />
        )}

        <div className='pt-2 mt-6 relative'>
          {Menus.map((menu, index) => (
            <div key={index}>
              <Link to={{ pathname: menu.path }}
                className={`rounded-br-full
                            rounded-tr-full
                            hover:text-white
                            hover:bg-darkpurp
                            focus:bg-focus-color
                            focus:text-white
                            text-icon-color 
                            flex items-center 
                            gap-x-2 
                            cursor-pointer 
                            p-2 
                            pl-7
                            ${menu.spacing ? "mt-10 " : "mt-1"}`}
                onClick={() => {
                  if (menu.submenu) toggleSubmenu(index);
                }}
              >
                <span className="float-left text-2xl block">
                  {menu.icon ? menu.icon : <FiTable />}
                </span>
                <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>
                  {menu.title}
                </span>
                {menu.submenu && open && (
                  <FiChevronDown
                    className={`mr-7 ${submenuOpen[index] && "rotate-180"}`}
                  />
                )}
              </Link>
              {submenuOpen[index] && menu.submenu && open && (
                <ul>
                  {menu.submenuItems.map((submenuItem, subIndex) => (
                    <Link key={subIndex} to={{ pathname: submenuItem.path }}
                        className='flex 
                                  items-center 
                                  cursor-pointer 
                                  text-icon-color 
                                  ml-12 
                                  hover:bg-darkpurp
                                  hover:text-white
                                  rounded-bl-full
                                  rounded-tl-full
                                  focus:bg-focus-color
                                  focus:text-white
                                  p-2
                                  pl-4
                                  '>
                      {submenuItem.title}
                    </Link>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
