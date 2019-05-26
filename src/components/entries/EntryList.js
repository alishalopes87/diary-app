import React from 'react'
import EntrySummary from './EntrySummary'

const EntryList = ({ entries }) => {
	return (
		<div className='dairy-list section'>
			{ entries && entries.map(entry =>{
				return(
					<EntrySummary entry={ entry } key={ entry.id }/>
				)
			})}
		</div>
	)
}

export default EntryList