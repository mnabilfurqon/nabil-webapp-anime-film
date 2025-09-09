import { Link } from "react-router-dom";
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Space } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import "./layoutComponent.css";

if (location.pathname === "/") {
} else if (location.pathname === "/list-anime") {
} else if (location.pathname === "/list-anime/detail/") {
} else if (location.pathname === "/list-film") {
} else if (location.pathname === "/list-film/detail/") {
}

const LayoutComponent = ({ children }) => {
  return (
    <Layout>
      <Header className="header-menu">
        <Menu
          mode="horizontal"
          defaultSelectedKeys={[location.pathname]}
          className="menu-nav"
        >
          <Menu.Item key="/">
            <Link to="/">Profil</Link>
          </Menu.Item>
          <Menu.Item key="/list-anime">
            <Link to="/list-anime">List Anime</Link>
          </Menu.Item>
          <Menu.Item key="/list-film">
            <Link to="/list-film">List Film</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>{children}</Content>
      <Footer className="custom-footer">
        <div className="footer-content">
          <Space size="large">
            <a
              href="https://github.com/mnabilfurqon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubOutlined className="footer-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/m-nabil-furqon/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinOutlined className="footer-icon" />
            </a>
            <a href="mailto:mnabilfurqon71@mail.com">
              <MailOutlined className="footer-icon" />
            </a>
          </Space>
        </div>
        <div className="footer-bottom">
          <p className="footer-text">© 2025 M Nabil Furqon</p>
        </div>
      </Footer>
    </Layout>
  );
};

export default LayoutComponent;
