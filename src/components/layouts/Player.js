import React from 'react'
import '../../utilities/stylesheets/Player.css'
import YouTube from 'react-youtube'

const Player = ({trailerID}) => {
    const opts = {
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        }
    }

    return (
        <div className="player">
            <YouTube className="video" videoId={trailerID} opts={opts}  />
        </div>
    )
}

export default Player
