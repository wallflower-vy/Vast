import React from 'react';
import './index.css';
import phone3 from '../../assets/Phone3.png';
import {BsArrowLeft} from 'react-icons/bs'
import ButtonComponent from '../ButtonComponent';
const MeetComponent = ({title,type,placeholder}) => {
  return (
    <div className='meet-main-box'>
       <div className='meet-image-box'>
             <img src={phone3} className="phone3" alt="phone3"/>
       </div>
       
        <div className='meet-left-box'>
             <BsArrowLeft className='arrow-icon'/>
             <h1>{title}</h1>
            <div className='form-box'>
            <form>
                <input type={type} placeholder={placeholder} />
                <input type={type} placeholder={placeholder} />
             </form>
            </div>
            {/* <div className='button-box'>
            <ButtonComponent text="Next" />
            </div> */}
            
        </div>
    </div>
  )
}

export default MeetComponent;