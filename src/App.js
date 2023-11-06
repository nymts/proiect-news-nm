import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TechPage from "./pages/category/TechPage";
import FotbalPage from "./pages/category/FotbalPage";
import FavoritePage from "./pages/category/FavoritePage";
import FashionPage from "./pages/category/FashionPage";
import NewsDetails from "./components/NewsDetails";
import Page404 from "./pages/Page404";
import { useReducer } from "react";
import { FavoritesContext } from "./store/Favorites/context";
import { favoritesReducer, initialState } from "./store/Favorites/reducer";
import { addToFavorites } from "./store/Favorites/actions";

function App() {
  const [favoritesState, favoritesDispatch] = useReducer(
    favoritesReducer,
    initialState
  );

  useEffect(() => {
    // Betöltjük a kedvenceket a localStorage-ból az alkalmazás indításakor
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (savedFavorites) {
      // A betöltött kedvenceket hozzáadjuk az állapothoz
      savedFavorites.forEach((product) => {
        const actionResult = addToFavorites(product);
        favoritesDispatch(actionResult);
      });
    }
  }, []);

  const favoritesContextValue = {
    favoritesState,
    favoritesDispatch,
  };

  return (
    <Router>
      <div className="App">
        <FavoritesContext.Provider value={favoritesContextValue}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/technology" element={<TechPage />} />
            <Route path="/category/fotbal" element={<FotbalPage />} />
            <Route path="/category/favorite" element={<FavoritePage />} />
            <Route path="/category/fashion" element={<FashionPage />} />
            <Route path="/news/:newsId" element={<NewsDetails />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </FavoritesContext.Provider>
      </div>
    </Router>
  );
}

export default App;
