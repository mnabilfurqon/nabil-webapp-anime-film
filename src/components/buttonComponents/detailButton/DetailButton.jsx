import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import "./detailButton.css";

const DetailButton = ({ moreUrl }) => {
  const navigate = useNavigate();

  return (
    <div className="detail-buttons">
      <Button className="back-buttons" onClick={() => navigate(-1)}>
        Back
      </Button>

      {moreUrl && (
        <Button
          type="default"
          href={moreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="more-detail-buttons"
        >
          More Detail
        </Button>
      )}
    </div>
  );
};

export default DetailButton;
