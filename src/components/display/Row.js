import React from 'react'
import requests from '../../config/requests'
import RowItem from './RowItem'

const Row = () => {
    return (
        <div>
            <RowItem 
                title='Zetflix Originals'
                path={requests.fetchNetflixOriginals}
                isPortrait={true}
            />
            <RowItem 
                title='Trending Now'
                path={requests.fetchTrending}
                isPortrait={true}
            />
            <RowItem 
                title='Top Rated'
                path={requests.fetchTopRated}
                isPortrait={false}
            />
            <RowItem 
                title='Action'
                path={requests.fetchAction}
                isPortrait={false}
            />
            <RowItem  
                title='Comedy'
                path={requests.fetchComedy}
                isPortrait={false}
            />
            <RowItem  
                title='Horror'
                path={requests.fetchHorror}
                isPortrait={false}
            />
            <RowItem  
                title='Romance'
                path={requests.fetchRomance}
                isPortrait={false}
            />
            <RowItem  
                title='Documentaries'
                path={requests.fetchDoc}
                isPortrait={false}
            />
        </div>
    )
}

export default Row
