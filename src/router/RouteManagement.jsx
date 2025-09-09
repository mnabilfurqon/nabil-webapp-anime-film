import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Spin } from "antd";
import LayoutComponent from "../components/layoutComponents/LayoutComponent";
import Profil from "../pages/profil/Profil";
import ListAnime from "../pages/listAnime/ListAnime";
import ListFilm from "../pages/listFilm/ListFilm";
import DetailAnime from "../pages/listAnime/detailAnime/DetailAnime";
import DetailFilm from "../pages/listFilm/detailFilm/DetailFilm";

const RouteManagement = () => {
  return (
    <Suspense fallback={<Spin tip="Loading..." />} >
      <Routes>
        <React.Fragment>
          <Route
            path="/"
            element={
              <LayoutComponent>
                <Profil />
              </LayoutComponent>
            }
          />
          <Route
            path="/list-anime"
            element={
              <LayoutComponent>
                <ListAnime />
              </LayoutComponent>
            }
          />
          <Route
            path="/detail-anime/:id"
            element={
              <LayoutComponent>
                <DetailAnime />
              </LayoutComponent>
            }
          />
          <Route
            path="/list-film"
            element={
              <LayoutComponent>
                <ListFilm />
              </LayoutComponent>
            }
          />
          <Route
            path="/detail-film/:id"
            element={
              <LayoutComponent>
                <DetailFilm />
              </LayoutComponent>
            }
          />
        </React.Fragment>
      </Routes>
    </Suspense>
  );
};

export default RouteManagement;
