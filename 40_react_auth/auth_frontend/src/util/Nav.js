import React, { Fragment }  from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
  return (
    <div className="ui top fixed menu">
      <div className="item">
        <h1>MiniDex</h1>
      </div>
      <Link className="item" to="/pokemon">Pokemon</Link>
      { props.user ?
        <Fragment>
          <div className="item">Welcome, {props.user.username}!!</div>
          <Link className="item" onClick={props.logOut} to="#">Log Out</Link>
        </Fragment>
        :
        <Fragment>
          <Link className="item" to="/signup">Sign Up</Link>
          <Link className="item" to="/login">Log In</Link>
        </Fragment>
      }
    </div>
  )
}

export default Nav
