import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { getNewsCategoriesURL } from "../api/apiURLs";
import { apiResponseToArt } from "../api/dataTransformer";
import { useFetch } from "../utils/useFetch";
import Pagination from "./Pagination";
import "bootstrap/dist/css/bootstrap.min.css";

function NewsList({ category, pageSize, usePagination }) {
  const [data, setData] = useState(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const pageNumber = parseInt(searchParams.get("page")) || 1;

  const apiUrl = getNewsCategoriesURL(category, pageNumber, pageSize);
  const rawData = useFetch(apiUrl);
  const navigate = useNavigate();

  useEffect(() => {
    if (rawData) {
      const transformedData = apiResponseToArt(rawData);
      setData(transformedData);
    }
  }, [rawData]);

  const handlePageChange = (page) => {
    navigate(`?page=${page}`);
  };

  if (!data) {
    return <div>Loading data...</div>;
  }

  return (
    <div className="container my-5">
      <div className="row">
        {data.map((article) => (
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={article.id}>
            <div className="card h-100">
              <Link
                to={`/news/${encodeURIComponent(article.id)}`}
                className="containerLink"
              >
                <img
                  src={article.thumbnail}
                  className="card-img-top"
                  alt={article.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">{article.description}</p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center">
        {usePagination && (
          <Pagination
            currentPage={pageNumber}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
}

export default NewsList;
