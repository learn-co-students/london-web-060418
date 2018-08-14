import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'

import Sushi from '../components/Sushi'

const SushiContainer = ({ sushis, eatSushi, eaten, incrementButtonCounter, startingSushiIndex }) => {

  const sushiElements = sushis.slice(startingSushiIndex, startingSushiIndex + 4).map(
    sushi => <Sushi
              key={sushi.id}
              eatSushi={eatSushi}
              sushi={sushi}
              eaten={eaten}
            />
  )
  

  return (
    <Fragment>
      <div className="belt">
        {
          sushiElements
        }
        <MoreButton handleClick={incrementButtonCounter} />
      </div>
    </Fragment>
  )
}

export default SushiContainer