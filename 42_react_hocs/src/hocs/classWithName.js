import React from 'react'

const withName = (WrappedComponent, name) =>
  class ComponentWithName extends React.Component {
    render() {
      return <WrappedComponent name={name} {...this.props} />
    }
  }

export default withName
