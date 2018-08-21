import React from 'react'

function withLoading(WrappedComponent, dataLoader) {
  return class extends React.Component {
    state = {
      isLoading: true,  // Until this is flipped, we show a GIF.
      data: null        // Eventual data we get back from dataLoader
    }

    // Fetch some data when mounting
    componentDidMount() {
      dataLoader()
        .then(data => this.setState({ data }, this.isLoaded))
    }

    // Method to flip the switch.
    isLoaded = () => {
      this.setState({ isLoading: false })
    }

    render() {
      // Show a GIF while not loaded.
      return this.state.isLoading
        ? <img
          alt="Spinny GIF"
          src="https://cdn-images-1.medium.com/max/1600/1*9EBHIOzhE1XfMYoKz1JcsQ.gif"
        />
        : <WrappedComponent {...this.props} initialData={this.state.data} />
    }
  }
}

export default withLoading
