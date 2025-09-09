import { Card, Image, Row, Col } from "antd";
import { motion } from "framer-motion";
import "./profil.css";

const Profil = () => {
  return (
    <div className="profile-page">
      <motion.div
        className="profile-card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Card bordered={false} className="card-content">
          <Row gutter={[24, 24]} align="middle">
            <Col xs={24} md={8} className="profile-left">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 1 }}
                className="profile-img"
              >
                <Image
                  preview={false}
                  width={200}
                  height={200}
                  src="/assets/foto-profil.JPG"
                  className="avatar"
                />
              </motion.div>
              <h2 className="profile-name">M Nabil Furqon</h2>
              <h4 className="profile-role">Front-End Web Developer</h4>
            </Col>

            <Col xs={24} md={16} className="profile-right">
              <p className="profile-desc">
                Halo, saya <b>Nabil</b> 👋. Saya seorang fresh graduate dari
                Universitas Pendidikan Indonesia dengan gelar Sarjana Komputer
                di bidang Rekayasa Perangkat Lunak. Saya masuk ke dunia
                pengembangan web pada tahun 2023 dan sejak itu saya telah
                mengembangkan berbagai proyek web menggunakan teknologi seperti
                <b> React.js, JavaScript, HTML, CSS</b>, serta beberapa library
                pendukung lainnya.
                <br />
                <br />
                Dari proyek-proyek tersebut, saya telah memperoleh pengalaman
                berharga dalam membangun aplikasi web yang <i>responsif </i> 
                dan <i>user-friendly</i>. Saya belajar banyak tentang <i>best practices</i> dalam 
                pengembangan web, mulai dari <b>state management</b>, <b>routing</b>, 
                hingga <b>optimasi performa</b>.
                <br />
                <br />
                Memang masih banyak yang perlu saya pelajari, tetapi saya sangat
                semangat untuk terus mengembangkan keterampilan saya dan
                berkontribusi dalam proyek-proyek yang berdampak positif.
                Itu saja perkenalan singkat dari saya.
                <br />
                <br />
                Terima kasih sudah berkunjung ke profil saya. 🚀🔥
              </p>
            </Col>
          </Row>
        </Card>
      </motion.div>
    </div>
  );
};

export default Profil;
