import React from 'react'
import { connect } from 'react-redux'
import { createEntry } from '../../store/actions/entryAction'

class CreateEntry extends React.Component{
	state = {
		title: '',
		content: ''
	}

	handleChange= (e) =>{
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		//console.log(this.state)
		this.props.createEntry(this.state)
	}
	render(){
		return(
			<div className='container'>
				<form onSubmit={ this.handleSubmit }className='white'>
					<h5 className='grey-text text-darken-3'>Post Entry</h5>
					<div className='input-field'>
						<label htmlFor='title'>Title</label>
						<input type='text' id='title' onChange={ this.handleChange }></input>
					</div>
						<div className='input-field'>
						<label htmlFor='content'>Content</label>
						<textarea id='content' className='materialize-textarea' onChange={ this.handleChange }></textarea>
					</div>
					<div className='input-field'>
						<button className='btn pink lighten-1 z-depth-o'>Post</button>
					</div>
				</form>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) =>{
	return{
		createEntry: (entry) => dispatch(createEntry(entry))
	}
}
export default connect(null,mapDispatchToProps)(CreateEntry)