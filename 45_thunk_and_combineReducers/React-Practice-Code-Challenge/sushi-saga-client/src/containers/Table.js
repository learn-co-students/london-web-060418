import React, { Fragment } from 'react'
import { connect } from 'react-redux'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.budget} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            renderPlates(props.eaten)
          }
        </div>
      </div>
    </Fragment>
  )
}

function mapStateToProps(state){
  return {
    eaten: state.sushi.eaten,
    beef: state.display.budget
  }
}

export default connect(mapStateToProps)(Table)