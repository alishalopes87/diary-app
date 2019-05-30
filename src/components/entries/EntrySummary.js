import React from 'react'
import moment from 'moment'


const EntrySummary = ({ entry }) => {
	console.log(entry)
	return(
		<div className='card z-depth-0 entry-summary'>
			<div className='card-content grey-text text-darken-3'>
				<span className='card-title'>{ entry.title }</span>
				<p>Posted by: {entry.authorFirstName} {entry.authorLastName}</p>
				<p className='grey-text'>{ moment(entry.createdAt.toDate()).calendar() }</p>
			</div>
		</div>
	)
}

export default EntrySummary