import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";
import Banner from "./Banner";
import selection from "./h3_movie_selection.gif"

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
      <div style={{width: '1400px', margin: '0'}}>
        <Banner />
        <div style={{width: '100%', margin: '1rem auto'}}>
          <hr style={{width:'100%', heigh:'200px', color:'Yellow'}}/>
          <img style={{display:"block", margin:"auto"}} src={selection} alt="selection!"/>
          <div className={styles.container}>
              {loading ? (
                  <div className={styles.loader}>
                    <span>Loading...</span>
                  </div>
              ) : (
                  <div className={styles.movies}>
                    {movies.map((movie) => (
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            year={movie.year}
                            coverImg={movie.medium_cover_image}
                            title={movie.title}
                            summary={movie.summary}
                            genres={movie.genres}
                        />
                    ))}
                  </div>
              )}
          </div>
        </div>
      </div>
  );
}
export default Home;
