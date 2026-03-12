import React, { useState, useEffect } from "react";
import axios from "axios";

const TMDBNowPlaying = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  // TMDB 설정 값
  const API_KEY =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYWI4Yzk4OTNlNzI1YjJlMTY3MTg3Y2VmNjZiYWUzZCIsIm5iZiI6MTYyNzYwODIyMC4xMzUsInN1YiI6IjYxMDM1NDljNGU1MmVkMDA3NTg3ZDhjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7oh38inWROms2MMFyhEFbbTs8qt3a1tOu_9m-56aQn8"; // 본인의 키를 입력하세요
  const BASE_URL = "https://api.themoviedb.org/3";
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500"; // 이미지 크기 지정

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${BASE_URL}/movie/now_playing`, {
          // 1. 긴 토큰은 params가 아니라 headers에 넣어야 합니다.
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            accept: "application/json",
          },
          // 2. params에서는 api_key를 지웁니다.
          params: {
            language: "ko-KR",
            page: 1,
          },
        });
        setMovies(response.data.results);
      } catch (error) {
        console.error("데이터 로드 실패:", error.response?.status);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <div>영화 목록 로딩 중...</div>;

  return (
    <div className="card">
      <h2>현재 상영 중인 영화</h2>
      <section className="flex flex-wrap">
        {/* flex-wrap: 화면 가로 비율에 따라 이미지 크기 바뀜 */}
        {movies.map((movie) => (
          <div key={movie.id}>
            <img
              src={`${IMAGE_BASE_URL}${movie.poster_path}`}
              alt={movie.title}
            />
            <h4>{movie.title}</h4>
            <p>평점: ⭐ {movie.vote_average}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default TMDBNowPlaying;
