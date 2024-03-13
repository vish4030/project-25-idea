import React, { useState } from 'react'

const RandomColor = () => {
    const[backgroundColor,setBackgroundColor] = useState("")

    const colorGenerator = ()=>{
        let red = parseInt(Math.random()*255);
        let blue = parseInt(Math.random()*255);
        let green = parseInt(Math.random()*255);
        return `rgb(${red},${green},${blue})`;
    }

    const handleClick = () =>{
        let color = colorGenerator();
        console.log(color);
        setBackgroundColor(color);
    }


  return (
    <div className={`flex items-center w-full h-svh `} >
        <div className=" text-center w-full">
        <h2 className=''>Background color:- {backgroundColor}</h2>
        <button className=' p-2 border-solid border-2 border-sky-300 rounded-lg' 
        onClick={handleClick}>Change Background</button>
        </div>
    </div>
  )
}

export default RandomColor;