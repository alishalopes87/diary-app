import React from 'react'
import EntrySummary from './EntrySummary'
import { Link } from 'react-router-dom'

const EntryList = ({ entries }) => {
	return (
		<div className='dairy-list section'>
			{ entries && entries.map(entry =>{
				return(
					<Link to={ '/entry/' + entry.id } key={ entry.id }>
						<EntrySummary entry={ entry } />
					</Link>
				)
			})}
		</div>
	)
}

export default EntryList