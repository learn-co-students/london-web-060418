import React from 'react'

import Painting from './Painting'
import paintings from '../paintings'

const PaintingList = (props) =>
  paintings.map(painting =>
    <Painting
      painting={painting}
      selectPainting={props.selectPainting}
    />
  )

export default PaintingList
