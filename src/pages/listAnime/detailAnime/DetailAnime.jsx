import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spin, Card } from "antd";
import DetailButton from "../../../components/buttonComponents/detailButton/DetailButton";
import axios from "axios";
import "./detailAnime.css";

const DetailAnime = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnimeDetail = async () => {
      try {
        const res = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
        setAnime(res.data.data);
      } catch (err) {
        console.error("Error fetching anime detail:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAnimeDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="loading-container">
        <Spin size="large" />
      </div>
    );
  }

  if (!anime) {
    return <p style={{ textAlign: "center" }}>Anime detail not found.</p>;
  }

  return (
    <div className="anime-detail">
      <Card
        className="detail-card"
        cover={
          <img
            alt={anime.title}
            src={anime.images.jpg.large_image_url}
            style={{ maxHeight: 400, objectFit: "cover" }}
          />
        }
      >
        <h2>{anime.title}</h2>
        <p>
          <b>Release Year:</b> {anime.year || "N/A"}
        </p>
        <p>
          <b>Episodes:</b> {anime.episodes || "N/A"}
        </p>
        <p>
          <b>Score:</b> {anime.score || "N/A"}
        </p>
        <p>
          <b>Status:</b> {anime.status}
        </p>
        <p>
          <b>Synopsis:</b> {anime.synopsis || "No description available."}
        </p>

        <DetailButton moreUrl={anime.url} />
      </Card>
    </div>
  );
};

export default DetailAnime;
