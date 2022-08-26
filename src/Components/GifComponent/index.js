import gif1 from '../../assets/gif1.gif'
import gif2 from '../../assets/gif2.gif'
import React from 'react';
import './index.css'

const GifComponent = () => {
  return (
    <div className='gif-box'>
        <img src ={gif1} alt="" className='gif-one'/>
        <img src ={gif2}  className='gif-two'/>

    </div>
  )
}

export default GifComponent