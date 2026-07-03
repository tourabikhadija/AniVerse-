import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";

import Landing from "../pages/Landing";
import AnimeList from "../pages/AnimeList";
import AnimeDetail from "../pages/AnimeDetail";
import CharacterList from "../pages/CharacterList";
import CharacterDetail from "../pages/CharacterDetail";
import Favorites from "../pages/Favorites";
import Dashboard from "../pages/Dashboard";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/anime" element={<AnimeList />} />
        <Route path="/anime/:anime_id" element={<AnimeDetail />} />
        <Route path="/characters" element={<CharacterList />} />
        <Route path="/characters/:character_id" element={<CharacterDetail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
