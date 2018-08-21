import React from 'react'

const withName = (WrappedComponent, name) => props =>
  <WrappedComponent name={name} {...props} />

export default withName
