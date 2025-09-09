import { Pagination } from "antd";
import './PaginationButton.css';

const PaginationButton = ({ current, pageSize, total, onChange }) => {
  return (
    <div className="pagination-container">
      <Pagination
        current={current}
        pageSize={pageSize}
        total={total}
        onChange={onChange}
        className="custom-pagination"
      />
    </div>
  );
};

export default PaginationButton;