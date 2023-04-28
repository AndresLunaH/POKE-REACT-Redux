import React from 'react'
import pokeball1 from "../assets/assets/pokeball.png"
import pokeball2 from "../assets/assets/pokeball2.png"

function Background() {
  return (
    <div className='background'>
        <img src={pokeball1} alt="pokenall" className='pokeball pokeball1'/>
        <img src={pokeball2} alt="pokenall" className='pokeball pokeball2'/>
        <img src={pokeball1} alt="pokenall" className='pokeball pokeball3'/>
        <img src={pokeball2} alt="pokenall" className='pokeball pokeball4'/>
        <img src={pokeball1} alt="pokenall" className='pokeball pokeball5'/>
        <img src={pokeball2} alt="pokenall" className='pokeball pokeball6'/>
    </div>
  );
}

export default Background;