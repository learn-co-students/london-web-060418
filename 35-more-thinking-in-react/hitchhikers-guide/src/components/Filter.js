import React from 'react'

class Filter extends React.Component {

	// handleChange = (event) => {
	// 	this.props.changeFilter(event.target.value)
	// }

	render(){
		return(
			<div>
				<input type="text" value={this.props.filterTerm} onChange={this.props.changeFilter}/>
			</div>
		)
	}
}

export default Filter