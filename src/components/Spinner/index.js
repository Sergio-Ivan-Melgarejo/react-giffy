import React from 'react'
import { Styles } from './Styled'

export default function Spinner () {
  return (
    <Styles className="lds-ring">
      <div className="container">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Styles>
  )
}