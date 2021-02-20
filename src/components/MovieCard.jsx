import React,{useEffect, useState} from 'react'
import axios from 'axios'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const MovieCard = () => {

    const [movieList, setMovieList] = useState([]);
    let movieTime = [];

    const param = {
        category:"movies",
        language:"kannada",
        genre:"all",
        sort:"voting"
    }

  useEffect(() => {
    axios.post('/movieList', param)
    .then(res => setMovieList(res.data.result));
   
  },[])

  const getReleaseDate = (date) => {
        var a = new Date(date * 1000);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
        return time

  }

  
  console.log("time",movieTime);

  getReleaseDate()

  console.log("MOvie", movieList);
    return (
        <div className="movieLists">
            {movieList.map(movie => (
                <div className="movie__card">
                    <div className="movieCardUpper">
                    <div className="votingSection">
                        <span>{movie.totalVoted}</span>
                        <span>Votes</span>
                    </div>
                    <div className="moviePoster">
                        <img src={movie.poster} alt=""/>
                    </div>
                    <div className="movieInfo">
                        <h2>{movie.title}</h2>
                        <p>Genre: {movie.genre}</p>
                        <p>Director: {movie.director}</p>
                        <p>Starring: {movie.starring}</p>
                        <p>Mins | {movie.language} | {(getReleaseDate(movie.releasedDate)).slice(0,6)}</p>
                        <p id="blue">{movie.pageViews}Views | Voted by {movie.totalVoted} people</p>
                    </div>
                    </div>
                    <div className="movieCardLower">
                    <button>Watch Trailer</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MovieCard
