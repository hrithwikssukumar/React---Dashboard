import React from 'react'
import { BsCart3,BsGrid1X2Fill,BsFillArchiveFill,BsFillGrid3X3GapFill,BsPeopleFill,BsListCheck,
BsMenuButtonWideFill,BsFillGearFill}
 from 'react-icons/bs'

function Sidebar() {
  return (
   <aside id='sidebar'>
     <div className='sidebar-title'>
        <div className='sidebar-brand'>
            <BsCart3 className='icon-header'/>SHOP
        </div>
        <span className='icon close-icon'>X</span>
     </div>
     <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
            <a href=''>
                <BsGrid1X2Fill className='icon'/>Main
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href=''>
                <BsFillArchiveFill className='icon'/>Dashboard
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href=''>
                <BsFillGrid3X3GapFill className='icon'/>Performance
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href=''>
                <BsPeopleFill className='icon'/>Batch Control
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href=''>
                <BsListCheck className='icon'/>Production Planning
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href=''>
                <BsMenuButtonWideFill className='icon'/>Production Planning
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href=''>
                <BsFillGearFill className='icon'/>Quality Dashboard
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href=''>
                <BsFillGearFill className='icon'/>User
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href=''>
                <BsFillGearFill className='icon'/>Company
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href=''>
                <BsFillGearFill className='icon'/>Machine
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href=''>
                <BsFillGearFill className='icon'/>Child Parts
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href=''>
                <BsFillGearFill className='icon'/>Inventory
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href=''>
                <BsFillGearFill className='icon'/>Spare List
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href=''>
                <BsFillGearFill className='icon'/>Advanced Analysis
            </a>
        </li>
      
     </ul>
   </aside>
  )
}

export default Sidebar
