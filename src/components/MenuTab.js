import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { BiLibrary as LibraryIcon } from 'react-icons/bi'
import { FaHome as HomeIcon } from 'react-icons/fa'
import { FaPlus as PlusIcon } from 'react-icons/fa'
import { PiSignOutBold as SignOutIcon } from 'react-icons/pi'  
import Hamburger from 'hamburger-react'

import './../css/MenuTab.css'

const MenuTab = ({showMenu}) => {
    // const [color, setColor] = useState([true, true, true, true])
    const [color1, setColor1] = useState(true)
    const [color2, setColor2] = useState(true)
    const [color3, setColor3] = useState(true)
    const [color4, setColor4] = useState(true)

    
    const onActive = (isActive) => {
        return (!showMenu)? 'hidemenu':(isActive)?'iconbg activeicon' : 'iconbg normalicon'
    } 

    return (
        <div className='menutab'>
            {/* <div className='iconbg' onMouseEnter={() => {setColor([false, true, true, true])}} onMouseLeave={() => {setColor([true, true, true, true])}}>
                <LibraryIcon className='icon' color={color[0]?'white':'#232f47'}/>  
            </div>
            
            <div className='iconbg' onMouseEnter={() => {setColor([true, false, true, true])}} onMouseLeave={() => {setColor([true, true, true, true])}}>
                <HomeIcon className='icon' color={color[1]?'white':'#232f47'}/>         
            </div>

            <div className='iconbg' onMouseEnter={() => {setColor([true, true, false, true])}} onMouseLeave={() => {setColor([true, true, true, true])}}>
                <PlusIcon className='icon' color={color[2]?'white':'#232f47'}/>
            </div>

            <div className='iconbg' onMouseEnter={() => {setColor([true, true, true, false])}} onMouseLeave={() => {setColor([true, true, true, true])}}>
                <SignOutIcon className='icon' color={color[3]?'white':'#232f47'}/>
            </div> */}
            {/* <div className='iconbg' onClick={() => showMenu()}>
                
            </div> */}

            <NavLink
                to='/YourLibrary' 
                // className={({isActive}) => {}}
                className={({isActive}) => { 
                    if(isActive) {setColor1(false)}
                    else {setColor1(true)}
                    return (!showMenu)? 'hidemenu':(isActive)?'iconbg activeicon' : 'iconbg normalicon'}}
                
            > 
                <LibraryIcon className='icon' color={(color1)?'white':'#232f47'}/> 
            </NavLink>
                  
            <NavLink 
                to='/' 
                className={({isActive}) => {
                    if(isActive) {setColor2(false)}
                    else {setColor2(true)}
                    return (!showMenu)? 'hidemenu':(isActive)?'iconbg activeicon' : 'iconbg normalicon'}}
            > 
                <HomeIcon className='icon' color={(color2)?'white':'#232f47'}/> 
            </NavLink>

            <NavLink 
                to='/NewPost' 
                className={({isActive}) => {
                    if(isActive) {setColor3(false)}
                    else {setColor3(true)}
                    return (!showMenu)? 'hidemenu':(isActive)?'iconbg activeicon' : 'iconbg normalicon'}}
            >
                <PlusIcon className='icon' color={(color3)?'white':'#232f47'}/> 
            </NavLink>
            
            <NavLink 
                to='/login' 
                className={({isActive}) => {
                    if(isActive) {setColor4(false)}
                    else {setColor4(true)}
                    return (!showMenu)? 'hidemenu':(isActive)?'iconbg activeicon' : 'iconbg normalicon'}}
            > 
                <SignOutIcon className='icon' color={(color4)?'white':'#232f47'}/> 
            </NavLink>
            
        </div>
    )
}

export default MenuTab