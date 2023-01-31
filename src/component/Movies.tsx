import React from 'react';

interface MoviesProps {
  name: string;
  imgUrl: string;
  showDate: string;
  rating: number;
  isAvailable: boolean;
}
const movies: MoviesProps[] = [
  {
    name: 'A Beautiful Mind',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BMzcwYWFkYzktZjAzNC00OGY1LWI4YTgtNzc5MzVjMDVmNjY0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg',
    showDate: '2001-12-13',
    rating: 8.2,
    isAvailable: false,
  },
  {
    name: 'Interstellar',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
    showDate: '2014-10-26',
    rating: 8.6,
    isAvailable: true,
  },
  {
    name: 'Inception',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg',
    showDate: '2010-7-8',
    rating: 8.8,
    isAvailable: true,
  },
  {
    name: 'The Dark Knight',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg',
    showDate: '2008-7-14',
    rating: 9,
    isAvailable: false,
  },
  {
    name: 'Ford v Ferrari',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BM2UwMDVmMDItM2I2Yi00NGZmLTk4ZTUtY2JjNTQ3OGQ5ZjM2XkEyXkFqcGdeQXVyMTA1OTYzOTUx._V1_.jpg',
    showDate: '2019-7-30',
    rating: 8.1,
    isAvailable: true,
  },
];

function Movies() {
  return (
    <>
      {movies.map((movie, index) => {
        let soonMsg: string = '';
        if (!movie.isAvailable) {
          soonMsg = 'will be available soon';
        }
        return (
          <div key={index} className="card">
            <img className="card-img" src={movie.imgUrl} alt="" />
            <h2>{movie.name}</h2>
            <p>{movie.showDate}</p>
            <p>{movie.rating}⭐</p>
            <p>{movie.isAvailable}</p>
            {soonMsg.length > 0 ? <p>{soonMsg}</p> : <span></span>}
          </div>
        );
      })}
    </>
  );
}

export default Movies;
