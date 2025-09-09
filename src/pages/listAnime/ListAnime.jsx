import { useEffect, useState } from "react";
import { Row, Col, Card, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import SearchButton from "../../components/buttonComponents/searchButton/SearchButton";
import PaginationButton from "../../components/buttonComponents/paginationButton/PaginationButton";
import axios from "axios";
import "./listAnime.css";

const ListAnime = () => {
  const navigate = useNavigate();
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const defaultGenre = 1;

  const fetchAnime = async (searchQuery = "", currentPage = 1) => {
    setLoading(true);
    try {
      const res = await axios.get("https://api.jikan.moe/v4/anime", {
        params: {
          q: searchQuery,
          page: currentPage,
          genres: defaultGenre,
          limit: 9,
        },
      });
      setAnimeList(res.data.data);
      setTotal(res.data.pagination.items.total);
    } catch (err) {
      console.error("Error fetching anime:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnime(query, page);
  }, [query, page]);

  const onSearch = (value) => {
    setQuery(value);
    setPage(1);
  };

  const onChangePage = (p) => {
    setPage(p);
  };

  return (
    <div className="list-anime-container">
      <SearchButton 
        placeholder="Cari Anime..."
        onSearch={onSearch}
      />

      {loading ? (
        <div className="loading-container">
          <Spin size="large" />
        </div>
      ) : (
        <Row gutter={[16, 16]}>
          {animeList.map((anime) => (
            <Col key={anime.mal_id} xs={24} sm={12} md={8}>
              <Card
                hoverable
                className="anime-card"
                cover={
                  <img
                    alt={anime.title}
                    src={anime.images.jpg.large_image_url}
                    style={{ height: 300, objectFit: "cover" }}
                  />
                }
                onClick={() => navigate(`/detail-anime/${anime.mal_id}`)}
              >
                <Card.Meta
                  title={anime.title}
                  description={`Episodes: ${anime.episodes || "N/A"} | Score: ${
                    anime.score || "N/A"
                  }`}
                />
              </Card>
            </Col>
          ))}
        </Row>
      )}

      <PaginationButton 
        current={page}
        total={total}
        pageSize={9}
        onChange={onChangePage}
      />
    </div>
  );
};

export default ListAnime;
