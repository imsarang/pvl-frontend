import React, { useState } from "react";
import "./style.css";
import { FaUserPlus,FaUser,FaBars } from "react-icons/fa";
import { sidebarContent } from "../general";

const Sidebar = () => {
  return (
    <div className='sidebar-main'>
      <div className='sidebar'>
        <div className="sidebarAdmin">
          <FaUserPlus  className="userIcon"/>
          <span className="adminPanel">Admin Panel</span>
        </div>
        <div className="sidebarInput">
          <input
            type="text"
            className="sidebarTag"
            placeholder="Manage Categories "
          />
        </div>
        {sidebarContent.map((item) => {
          return (
            <>
              <div className="sidebarIdvl">
                <div className="sidebarIcon">
                  <item.icon />
                </div>
                <div className="sidebarContent">{item.content}</div>
              </div>
            </>
          );
        })}
        <div className="sidebarPerson">
          <div className="sidebarUser">
            <FaUser/>
          </div>
          <div className="sidebarUserContent">
            <div className="sidebarName1">Anil J</div>
            <div className="sidebarName2">Assert_Admin</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
