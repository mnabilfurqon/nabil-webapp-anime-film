import { Input } from "antd";
const { Search } = Input;
import './SearchButton.css';

const SearchButton = ({ placeholder, onSearch }) => {
  return (
    <div className="search-bar">
      <Search
        placeholder={placeholder}
        allowClear
        onSearch={onSearch}
        style={{ width: 250 }}
        className="search-button"
      />
    </div>
  );
};

export default SearchButton;