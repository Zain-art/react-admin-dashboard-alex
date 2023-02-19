// import React, { useState } from 'react'
// import { Menu, MenuItem, useProSidebar ,Sidebar} from "react-pro-sidebar";
// // import "react-pro-sidebar/dist/style.css";
// import { Box, IconButton, Typography, useTheme } from '@mui/material'
// import { Link, NavLink } from 'react-router-dom';
// import { tokens } from '../../theme';
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
// import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
// import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
// import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
// import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
// import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
// import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import MapOutlinedIcon from "@mui/icons-material/MapOutlined";


// //// create ITEM function
// const Item = ({ title, to, icon, selected, setSelected }) => {
//     const theme = useTheme();
//     const colors = tokens(theme.palette.mode);
//     return (
//         <MenuItem active={selected === title} style={{ color: colors.grey[100] }} onClick={() => setSelected(title)} icon={icon}>
//             <Typography>{title}</Typography>
//             <Link to={to} />
//         </MenuItem>
//     )
// }


// const Sidebars = () => {
//     const { collapseSidebar } = useProSidebar();
//     const theme = useTheme();
//     const colors = tokens(theme.palette.mode);
//     const [isCollapsed, setIsCollapsed] = useState(false);
//     const [selected, setSelected] = useState('Dashboard');
   
//     return (
//         <Box
//             sx={{
//                 // '& .pro-sidebar-inner': {
//                 //     background: `${colors.primary[100]} !important`
//                 // },
//                 // "& .pro-icon-wrapper": {
//                 //     backgroundColor: 'transparent !important'
//                 // },
//                 // "& .pro-inner-item": {
//                 //     padding: "5px 35px 5px 20 !important"
//                 // },
//                 // "& .pro-inner-item:hover": {
//                 //     color: "#862dfb !important"
//                 // }

//             }}
//         >
//             <useProSidebar collapsed={isCollapsed.toString()} >
//                 <Menu iconShape="square">
//                     {/* {logo and menu icon} */}

//                     <MenuItem
//                         onClick={() => setIsCollapsed(!isCollapsed)}
//                         icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
//                         style={{
//                             margin: "10px 0 20px 0",
//                             color: colors.grey[100]
//                         }}>
//                         {
//                             !isCollapsed && (
//                                 <Box display="flex" justifyContent='space-between' alignItem="center" ml="15px">
//                                     <Typography variant="h3" color={colors.grey[400]}>
//                                         ADMINS
//                                     </Typography>
//                                     <IconButton onClick={() => setIsCollapsed(!isCollapsed)} style={{color:colors.grey[300]}}>
//                                         <MenuOutlinedIcon />
//                                     </IconButton>

//                                 </Box>
//                             )
//                         }
//                     </MenuItem>
//                     {!isCollapsed && (
//                         <Box mb="25px">
//                             <Box display="flex" justifyContent="center" alignItems="center">
//                                 <img
//                                     alt="profile-user"
//                                     width="100px"
//                                     height="80px"
//                                     src={`/images/zainpic1.jpeg`}
//                                     style={{ cursor: "pointer", borderRadius: "50%" }}
//                                 />
//                             </Box>
//                             <Box textAlign="center">
//                                 <Typography
//                                     variant="h2"
//                                     color={colors.grey[100]}
//                                     fontWeight="bold"
//                                     sx={{ m: "10px 0 0 0" }}
//                                 >
//                                     Zain Khan
//                                 </Typography>
//                                 <Typography variant="h5" color={colors.greenAccent[500]}>
//                                     Admin Dashboard
//                                 </Typography>
//                             </Box>
//                         </Box>
//                     )}

//                    {
//                      <Box paddingLeft={isCollapsed ? undefined : "10px"}>
// <Link to='/'>
// <Item
//                          title="Dashboard"
//                          to="/"
//                          icon={<HomeOutlinedIcon />}
//                          selected={selected}
//                          setSelected={setSelected}
//                      />
// </Link>
                    
//                      <Typography
//                          variant="h6"
//                          color={colors.grey[300]}
//                          sx={{ m: "15px 0 5px 20px" }}
//                      >
//                          Data
//                      </Typography>
//                     <Link to='/team'>
//                     <Item
//                          title="Manage Team"
//                          to="/team"
//                          icon={<PeopleOutlinedIcon />}
//                          selected={selected}
//                          setSelected={setSelected}
//                      />
//                     </Link>
//                     <Link to="/contacts">
//                     <Item
//                          title="Contacts Information"
                         
//                          icon={<ContactsOutlinedIcon />}
//                          selected={selected}
//                          setSelected={setSelected}
//                      />
//                     </Link>
//                      <Link to='invoices'>

                     
//                      <Item
//                          title="Invoices Balances"
//                          to="/invoices"
//                          icon={<ReceiptOutlinedIcon />}
//                          selected={selected}
//                          setSelected={setSelected}
//                      />
// </Link>
//                      <Typography
//                          variant="h6"
//                          color={colors.grey[300]}
//                          sx={{ m: "15px 0 5px 20px" }}
//                      >
//                          Pages
//                      </Typography>
//                      <Link to='form'>

                  
//                      <Item
//                          title="Profile Form"
//                          to="/form"
//                          icon={<PersonOutlinedIcon />}
//                          selected={selected}
//                          setSelected={setSelected}
//                      />
//                         </Link>
//                         <Link to='calender'>

//                      <Item
//                          title="Calendar"
//                          to="/calendar"
//                          icon={<CalendarTodayOutlinedIcon />}
//                          selected={selected}
//                          setSelected={setSelected}
//                          />
//                          </Link>
//                          <Link to='faq'>

                        
//                      <Item
//                          title="FAQ Page"
//                          to="/faq"
//                          icon={<HelpOutlineOutlinedIcon />}
//                          selected={selected}
//                          setSelected={setSelected}
//                      />
//                       </Link>

//                      <Typography
//                          variant="h6"
//                          color={colors.grey[300]}
//                          sx={{ m: "15px 0 5px 20px" }}
//                      >
//                          Charts
//                      </Typography>
//                      <Link  to="bar">

                    
//                      <Item
//                          title="Bar Chart"
//                          to="/bar"
//                          icon={<BarChartOutlinedIcon />}
//                          selected={selected}
//                          setSelected={setSelected}
//                      /> </Link>
//                      <Link to='pie'>

                    
//                      <Item
//                          title="Pie Chart"
//                          to="/pie"
//                          icon={<PieChartOutlineOutlinedIcon />}
//                          selected={selected}
//                          setSelected={setSelected}
//                      /> </Link>
//                      <Link to="line">

//                      <Item
//                          title="Line Chart"
//                          to="/line"
//                          icon={<TimelineOutlinedIcon />}
//                          selected={selected}
//                          setSelected={setSelected}
//                          />
//                          </Link>
//                          <Link to="geography">

                        
//                      <Item
//                          title="Geography Chart"
//                          to="/geography"
//                          icon={<MapOutlinedIcon />}
//                          selected={selected}
//                          setSelected={setSelected}
//                      /> </Link>
//                  </Box>
//                    }

//                 </Menu>


//             </useProSidebar>
//         </Box>
//     )
// }

// export default Sidebars; 

import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <HomeOutlinedIcon  />,
  },
  {
    path: "/team",
    name: "Teams",
    icon: <FaUser />,
  },
  {
    path: "/contacts",
    name: "Contacts",
    icon: <ContactsOutlinedIcon  />,
  },
  {
    path: "/invoices",
    name: "Invoices",
    icon: <ReceiptOutlinedIcon  />,
  }, 
  {
    path: "/form",
    name: "Form",
    icon: <PersonOutlinedIcon  />,
  }, 
  {
    path: "/calender",
    name: "Calender",
    icon: <CalendarTodayOutlinedIcon  />,
  }, 
  {
    path: "/line",
    name: "Line Chart",
    icon: <BiAnalyse />,
  }, 
  {
    path: "/pie",
    name: "Pie Chart",
    icon: <PieChartOutlineOutlinedIcon  />,
  }, 
  {
    path: "/bar",
    name: "Bar Chart",
    icon: <BarChartOutlinedIcon  />,
  }, 
  {
    path: "/geography",
    name: "Geo Chart",
    icon: <MapOutlinedIcon  />,
  }, 
  {
    path: "/filemanager",
    name: "Form",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Profile ",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
      {
        path: "/settings/billing",
        name: "Billing",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/order",
    name: "Order",
    icon: <BsCartCheck />,
  },
  {
    path: "/setting",
    name: "Settings",
    icon: <BiCog />,
    exact: true,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Profile ",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
      {
        path: "/settings/billing",
        name: "Billing",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/saved",
    name: "Saved",
    icon: <AiFillHeart />,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                variants={showAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="logo"
              >
                DoSomeCoding
              </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
              
            </div>
          
          </div>
          {
            isOpen&&(
                <motion.div initial='hidden' animate='show' exit='hidden'>

                
                <motion.img src="/public/images/zainpic4.jpeg" width='100px' height='100px' style={{borderRadius:"50%" , marginTop:"10px",marginLeft:"30px",marginBottom:"10px"}}/>

                </motion.div>
            )
           }
          <div className="search">
            
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                    key={route.name}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;