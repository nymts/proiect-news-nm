import React, { useContext} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FavoritesContext } from "../../store/Favorites/context";
import { Link } from "react-router-dom";
import { removeFromFavorites } from "../../store/Favorites/actions";
import Button from "react-bootstrap/Button";
import styles from "../../components/NewsDisplay.module.css";

function FavoritePage() {
  const { favoritesState, favoritesDispatch } = useContext(FavoritesContext);
  const { products } = favoritesState;

  function handleRemoveFromFavorites(id, event) {
    event.preventDefault();
  
    const currentFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const updatedFavorites = currentFavorites.filter((favProduct) => favProduct.id !== id);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  
    
    const actionResult = removeFromFavorites(id);
    favoritesDispatch(actionResult);
  }
  

  return (
    <div className="layout">
      <Header />
      <main>
        <h1 className="mb-5 pt-3">Știrile tale favorite</h1>
        <div className="container my-5">
          {products.length === 0 ? ( 
            <p>Momentan nu ai nicio știre favorită.</p>
          ) : (
            <div className="row">
              {products.map((product) => (
                <div
                  className="col-lg-4 col-md-6 col-sm-12 mb-4"
                  key={product.id}
                >
                  <div className="card h-100">
                    <Link
                      to={`/news/${encodeURIComponent(product.id)}`}
                      className="containerLink"
                      
                    >
                      <img
                        src={product.thumbnail}
                        className="card-img-top"
                        alt={product.title}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>

                        <Button
                          variant="light"
                          className={styles.newsCardButton}
                          onClick={(event) => {
                            handleRemoveFromFavorites(product.id, event);
                          }}
                        >
                          <span className="material-icons text-dark">
                            close
                          </span>
                        </Button>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritePage;
