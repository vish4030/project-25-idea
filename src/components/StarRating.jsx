import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";

const StarRating = () => {
    const [selected, setSelected] = useState(null);

    const handleMouse = (id,temp)=>{
        console.log(id, temp)
        setSelected(id);
    }
  return (
    <ul className='flex items-center justify-center text-4xl text-gray-400'>
       <li onMouseEnter={()=>handleMouse(1, "enter")}  className={selected>=1 && 'text-yellow-500'}><FaStar /></li>
       <li onMouseEnter={()=>handleMouse(2, "enter")}  className={selected>=2 && 'text-yellow-500'}><FaStar /></li>
       <li onMouseEnter={()=>handleMouse(3, "enter")}  className={selected>=3 && 'text-yellow-500'}><FaStar /></li>
       <li onMouseEnter={()=>handleMouse(4, "enter")} className={selected>=4 && 'text-yellow-500'}><FaStar /></li>
       <li onMouseEnter={()=>handleMouse(5, "enter")}  className={selected==5 && 'text-yellow-500'}><FaStar /></li>
    </ul>
  )
}

export default StarRating;