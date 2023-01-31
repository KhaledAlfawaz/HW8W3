import React from 'react';

interface TVShows {
  name: string;
  imgUrl: string;
  showDate: string;
  rating: number;
  isAvailable: boolean;
}
const shows: TVShows[] = [
  {
    name: 'Brooklyn Nine-Nine',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BNzVkYWY4NzYtMWFlZi00YzkwLThhZDItZjcxYTU4ZTMzMDZmXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_.jpg',
    showDate: '2013-09-17',
    rating: 8.4,
    isAvailable: true,
  },
  {
    name: 'Better Call Saul',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BODY2ODU0MTY5Nl5BMl5BanBnXkFtZTgwNjQ0OTc2MTI@._V1_FMjpg_UX1000_.jpg',
    showDate: '2015-02-08',
    rating: 8.9,
    isAvailable: true,
  },
  {
    name: 'Breaking Bad',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BMTczMTY0MTMzOV5BMl5BanBnXkFtZTcwNDQxMTk4Nw@@._V1_.jpg',
    showDate: '2008-01-20',
    rating: 9.5,
    isAvailable: true,
  },
  {
    name: 'Death Note',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg',
    showDate: '2006-10-3',
    rating: 9,
    isAvailable: true,
  },
  {
    name: 'Friends',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg',
    showDate: '1994-09-22',
    rating: 8.9,
    isAvailable: false,
  },
];

function TVShows() {
  return (
    <>
      {shows.map((shows, index) => {
        let soonMsg: string = '';
        if (!shows.isAvailable) {
          soonMsg = 'will be available soon';
        }
        return (
          <div key={index} className="card">
            <img className="card-img" src={shows.imgUrl} alt="" />
            <h2>{shows.name}</h2>
            <p>{shows.showDate}</p>
            <p>{shows.rating}⭐</p>
            <p>{shows.isAvailable}</p>
            {soonMsg.length > 0 ? <p>{soonMsg}</p> : <span></span>}
          </div>
        );
      })}
    </>
  );
}

export default TVShows;
