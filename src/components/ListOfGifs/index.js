import React from 'react'
import Gif from '../Gif'
import { Styles } from './Styled'

export default function ListOfGifs ({gifs}) {
  return <Styles>
    {
      gifs.map(({id, title, url}) =>
        <Gif
          id={id}
          key={id}
          title={title}
          url={url}
        />
      )
    }
  </Styles>
}