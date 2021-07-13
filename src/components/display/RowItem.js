import React, { useEffect, useState } from 'react'
import axios from '../../config/axios'
import '../../utilities/stylesheets/RowItem.css'
import movieTrailer from 'movie-trailer'
import Player from '../layouts/Player.js'

const RowItem = ({title, path, isPortrait}) => {
    const [show, setShow] = useState(['Picture']);
    const [isTrailer, setTrailer] = useState("");

    const base_url = "https://image.tmdb.org/t/p/original"

    // const handleClick = (item) => {
    //     if(isTrailer){
    //         setTrailer("");
    //     }else{
    //         movieTrailer(null, {tmdbId : item?.id})
    //             .then((response) => {
    //                 const urlParams = new URLSearchParams (new URL(response).search);
    //                 setTrailer(urlParams.get("v"));
    //             })
    //             .catch((error) => console.error());
    //     }
    // }

    const handleClick = () => {
        if(isTrailer){
            setTrailer("");
        }else{
            setTrailer('GV3HUDMQ-F8'); //'X4bF_quwNtw'
            setTimeout(() => {
                setTrailer("");
            }, 4500);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(path);
            setShow(res.data.results);
            return res;
        }

        fetchData();
    },[path]);

    console.log(show);

    return (
        <div className="row">
            <h2 className="row-title"> {title} </h2>

            <div className="card">
                { show.map((item) => (
                    ((isPortrait && item.poster_path) ||
                    (!isPortrait && item.backdrop_path)) && 
                    (   
                        <div className="card-div">
                            <img 
                                className={`card-img ${isPortrait ? 'portrait' : 'landscape'}`}
                                onClick={handleClick}
                                key={item.id}
                                src={`${base_url}${isPortrait ? item.poster_path : item.backdrop_path}`} 
                                alt={item.name} 
                            />
                            <div className={`${!isPortrait ? 'card-info' : 'not'}`}>
                                <h4>{item?.title || item?.name || item?.original_name}</h4>
                            </div>
                            <h4 className="card-info" style={{color:'springgreen'}}>{item.vote_average*10}%</h4>
                        </div>
                    )
                ))}
            </div>
            
            {isTrailer && <Player trailerID={isTrailer}/>}
        </div>
    )
}

export default RowItem
