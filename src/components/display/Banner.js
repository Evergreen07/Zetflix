import React,{useState, useEffect} from 'react'
import '../../utilities/stylesheets/Banner.css'
import Player from '../layouts/Player'

import axios from '../../config/axios'
import requests from '../../config/requests'
import Spinner from '../layouts/Spinner'

const Banner = () => {
    const [movies, setMovies] = useState(null);
    const [isTrailer, setTrailer] =  useState("");

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

    const shorten = (body, n, dot) => {
        if(body?.length > n){
            return `${body.substr(0, n)}${dot ? '...' : ''}`;
        }
        return body;
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(requests.fetchNetflixOriginals);
    
            setMovies(res.data.results[
                Math.floor(Math.random() * res.data.results.length - 1)
            ]);
            return res;
        };

       fetchData(); 
    }, []);


    return (
        <div>
            {movies !== null ? 
            (   <header className="banner" style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${movies?.backdrop_path})`
                }}> 
                    
                    {isTrailer && (
                    <div style={{paddingTop:'5rem'}}>
                        <Player trailerID={isTrailer}/>
                    </div>
                    )}
                    
                    
                    <div className="banner-content">
                            <h1 className="banner-title">{movies?.title || movies?.name || movies?.original_name}</h1>

                            <h4 className="banner-info">
                                {shorten(movies?.first_air_date, 4)} &nbsp;| &nbsp;
                                {movies?.vote_average} &nbsp;| &nbsp;
                                {movies?.origin_country}
                            </h4>

                            <div className="banner-button">
                                <button onClick={handleClick}> 
                                    <i className="fas fa-play"></i> 
                                    &nbsp;Play 
                                </button>

                                <button> 
                                    <i className="fas fa-heart"></i> 
                                    &nbsp;My List 
                                </button>
                            </div>
                            
                            <h3 className="banner-desc">{shorten(movies?.overview, 165, true)}</h3>
                    </div>
                    
                    <div className="banner-shade"> </div>
                </header>) : 
            (<Spinner/>)}
            
        </div>
    )
}

export default Banner
