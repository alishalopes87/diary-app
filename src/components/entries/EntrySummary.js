import React from 'react'


const EntrySummary = ({ entry }) => {
	return(
		<div className='card z-depth-0 entry-summary'>
			<div className='card-content grey-text text darken-3'>
				<span className='card-title'>{ entry.title }</span>
				<p>Posted by Alisha</p>
				<p className='grey-text'>May 21st, 2am</p>
			</div>
		</div>
	)
}

export default EntrySummary