import React from 'react'
import { Styles } from './Styled'

const Footer = () => {
  return (
    <Styles className='footer'>
      <p className='footer__text'>&copy; App <span className='color'>Giffy</span></p>
    </Styles>
  )
}

export default Footer