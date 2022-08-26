import './index.css'

import React from 'react'

const ButtonComponent = ({text, cb,type}) => {
  return (
   <>
   {/* <a href ="" className='button' onClick={cb}>{text}</a> */}
   <button onClick={cb}>{text}</button>
   </>
  )
}

export default ButtonComponent