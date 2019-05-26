import React from 'react'

const EntryDetails = (props) => {
	return(
		<div className='container section entry-details'>
			<div className='card -depth-0'>
				<div className='card-content'>	
					<span className='card-titiel'>Entry summary</span>
					<p>Loren ipsum</p>
				</div>
				<div className='card-action grey-light-4 grey-text'>	
					<div>Posted by Alisha</div>
					<div>May 1st 10am</div>
				</div>
			</div>
		</div>
	)
}

export default EntryDetails