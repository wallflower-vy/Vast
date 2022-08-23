import './index.css'

import React from 'react'

const ButtonComponent = ({text, cb}) => {
  return (
   <>
   <button onClick={cb}>{text}</button>
   </>
  )
}

export default ButtonComponent