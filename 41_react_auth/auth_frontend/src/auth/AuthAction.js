import React from 'react'

class AuthAction extends React.Component {
  state = {
    username: '',
    password: ''
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <React.Fragment>
        <h1>{this.props.header}</h1>
        <form onSubmit={(e) => {
          e.preventDefault()
          this.props.submit(this.state.username, this.state.password)
        }}>
          <input type="text" placeholder="Username!" name="username" value={this.state.username} onChange={this.onValueChange} />
          <input type="password" placeholder="Password??" name="password" value={this.state.password} onChange={this.onValueChange} />
          <input type="submit" />
        </form>
      </React.Fragment>
    )

  }
}


export default AuthAction
