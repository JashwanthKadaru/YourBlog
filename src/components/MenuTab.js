import { useState } from 'react'

import { BiLibrary as LibraryIcon } from 'react-icons/bi'
import { FaHome as HomeIcon } from 'react-icons/fa'
import { FaPlus as PlusIcon } from 'react-icons/fa'
import { PiSignOutBold as SignOutIcon } from 'react-icons/pi'  

import './../css/MenuTab.css'

const MenuTab = () => {
    const [color, setColor] = useState([true, true, true, true])
    return (
        <div className='menutab'>
            <div className='iconbg' onMouseEnter={() => {setColor([false, true, true, true])}} onMouseLeave={() => {setColor([true, true, true, true])}}>
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
            </div>
        </div>
    )
}

export default MenuTab