import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../utils/useFetch";
import DateFormat from "../utils/date";
import { getNewsDetailsEndpoint } from "../api/apiURLs";
import { apiResponseToArtDetails } from "../api/dataTransformer";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./NewsDisplay.module.css";
import FavoriteButton from "./FavoriteButton";


function NewsDetails() {
  const { newsId } = useParams();
  const apiUrl = getNewsDetailsEndpoint(newsId);
  const rawData = useFetch(apiUrl);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (rawData) {
      const transformedData = apiResponseToArtDetails(rawData);
      setData(transformedData);
    }
  }, [rawData]);

  if (!data) {
    return <div>Loading data...</div>;
  }

  const { title, date, description, image, content, author, thumbnail } = data;


  return (
    <div>
      <Header />
      <main>
        <div className={styles.detailsContainer}>
          <h1>{title}</h1>
          <p className="fw-bold">{description}</p>
          <div
            dangerouslySetInnerHTML={{ __html: image }}
            className={styles.imgContainer}
          />
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="fw-bold">
              <p>{author}</p>
              <p className="mb-0">
                <DateFormat date={date} />
              </p>
            </div>
            <FavoriteButton product={{
              id: newsId,
              thumbnail,
              title,
              description,
              hasCloseButton: true,
            }} />
          </div>

          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default NewsDetails;
