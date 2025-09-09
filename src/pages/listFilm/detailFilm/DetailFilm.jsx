import { useState, useEffect } from "react";
import { Card, Spin } from "antd";
import { useParams } from "react-router-dom";
import DetailButton from "../../../components/buttonComponents/detailButton/DetailButton";
import "./detailFilm.css";

const DetailFilm = () => {
  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
  const { id } = useParams();
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFilmDetail = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`
        );
        const data = await res.json();
        setFilm(data);
      } catch (err) {
        console.error("Error fetching film detail:", err);
      }
      setLoading(false);
    };
    fetchFilmDetail();
  }, [id]);

  if (loading || !film) {
    return (
      <div className="loading-container">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="film-detail">
      <Card
        className="detail-card"
        cover={
          <img
            alt={film.Title}
            src={
              film.Poster !== "N/A"
                ? film.Poster
                : "https://via.placeholder.com/400x600"
            }
            style={{ maxHeight: 500, objectFit: "cover" }}
          />
        }
      >
        <h2>{film.Title}</h2>
        <p>
          <strong>Year:</strong> {film.Year}
        </p>
        <p>
          <strong>Genre:</strong> {film.Genre}
        </p>
        <p>
          <strong>Director:</strong> {film.Director}
        </p>
        <p>
          <strong>Actors:</strong> {film.Actors}
        </p>
        <p>
          <strong>Plot:</strong> {film.Plot}
        </p>

        <DetailButton moreUrl={`https://www.imdb.com/title/${film.imdbID}/`} />
      </Card>
    </div>
  );
};

export default DetailFilm;
