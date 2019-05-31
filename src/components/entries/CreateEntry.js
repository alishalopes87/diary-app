import React from 'react'
import { connect } from 'react-redux'
import { createEntry } from '../../store/actions/entryAction'
import { Redirect } from 'react-router-dom'

class CreateEntry extends React.Component{
	state = {
		title: '',
		content: '',
		privacy: false
	}

	handleChange= (e) =>{
		this.setState({
			[e.target.id]: e.target.value,
		})
	}
	handleCheck = (e) => {
		this.setState({
			privacy: !this.state.private
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.createEntry(this.state)
		this.props.history.push('/')
	}

	render(){
		const { auth } = this.props
		if(!auth.uid) return <Redirect to='/signIn'/>
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
					<div>
						<label>
						<input id='checked' type="checkbox" checked={this.state.private} onChange={this.handleCheck} />
						<span>Private</span>
						</label><br/>
					</div>
				</form>
			</div>
		)
	}
}


const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth
	}
}
const mapDispatchToProps = (dispatch) =>{
	return{
		createEntry: (entry) => dispatch(createEntry(entry))
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(CreateEntry)