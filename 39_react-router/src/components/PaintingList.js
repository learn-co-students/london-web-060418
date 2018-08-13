import React from 'react'

import Painting from './Painting'

const PaintingList = (props) =>
  props.paintings.map(painting =>
    <Painting
      painting={painting}
      selectPainting={props.selectPainting}
    />
  )

export default PaintingList
