let apikey='edd60f4d06cd9715705383dd32c224dd';

// if(process.env.NODE_ENV !== 'production'){
//     apikey = process.env.REACT_APP_API_KEY;
// } 
// else{
//     apikey = process.env.API_KEY;
// }

const requests = {
    fetchTrending: `/trending/all/week?api_key=${apikey}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv/?api_key=${apikey}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${apikey}&language=en-US`,
    fetchAction: `/discover/movie/?api_key=${apikey}&with_genres=28`,
    fetchComedy: `/discover/movie/?api_key=${apikey}&with_genres=35`,
    fetchHorror: `/discover/movie/?api_key=${apikey}&with_genres=27`,
    fetchRomance: `/discover/movie/?api_key=${apikey}&with_genres=10749`,
    fetchDoc: `/discover/movie/?api_key=${apikey}&with_genres=99`
}

export default requests