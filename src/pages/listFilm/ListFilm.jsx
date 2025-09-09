import { useState, useEffect } from "react";
import { Row, Col, Card, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import SearchButton from "../../components/buttonComponents/searchButton/SearchButton";
import PaginationButton from "../../components/buttonComponents/paginationButton/PaginationButton";
import "./listFilm.css";

const ListFilm = () => {
  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [searchTerm, setSearchTerm] = useState("marvel");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const fetchFilms = async (query, page) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&type=movie&page=${page}`
      );
      const data = await res.json();
      if (data.Response === "True") {
        setFilms(data.Search);
        setTotalResults(parseInt(data.totalResults));
      } else {
        setFilms([]);
        setTotalResults(0);
      }
    } catch (err) {
      console.error("Error fetching data:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchFilms(searchTerm, currentPage);
  }, [searchTerm, currentPage]);

  const onSearch = (value) => {
    setSearchTerm(value || "marvel");
    setCurrentPage(1);
  };

  return (
    <div className="list-film-container">
      <SearchButton 
        placeholder="Cari Film..."
        onSearch={onSearch}
      />

      {loading ? (
        <div className="loading-container">
          <Spin size="large" />
        </div>
      ) : (
        <Row gutter={[16, 16]}>
          {films.map((film) => (
            <Col key={film.imdbID} xs={24} sm={12} md={8}>
              <Card
                hoverable
                className="film-card"
                cover={
                  <img
                    alt={film.Title}
                    src={
                      film.Poster !== "N/A"
                        ? film.Poster
                        : "https://via.placeholder.com/300x400"
                    }
                    style={{ height: 300, objectFit: "cover" }}
                  />
                }
                onClick={() => navigate(`/detail-film/${film.imdbID}`)}
              >
                <Card.Meta
                  title={film.Title}
                  description={`Year: ${film.Year}`}
                />
              </Card>
            </Col>
          ))}
        </Row>
      )}

      <PaginationButton 
        current={currentPage}
        total={totalResults}
        pageSize={10}
        onChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default ListFilm;
