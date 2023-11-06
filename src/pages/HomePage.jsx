import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NewsList from "../components/NewsCategory";

function HomePage() {
  return (
    <div>
      <Header />
      <main>
        <section>
          <h1>Tech</h1>
          <NewsList category="technology" pageSize={6} usePagination={false} />
          <p className="homeP">
            Vezi toate știrile legate de tehnologie în secțiunea{" "}
            <a href="/category/technology">
              Tech
            </a>
            .
          </p>
        </section>
        <section>
          <h1>Fotbal</h1>
          <NewsList category="football" pageSize={6} usePagination={false} />
          <p className="homeP">
            Vezi toate știrile legate de tehnologie în secțiunea{" "}
            <a href="/category/fotbal">
              Fotbal
            </a>
            .
          </p>
        </section>
        <section>
          <h1>Fashion</h1>
          <NewsList category="fashion" pageSize={6} usePagination={false} />
          <p className="homeP">
            Vezi toate știrile legate de tehnologie în secțiunea{" "}
            <a href="/category/fashion">
              Fashion
            </a>
            .
          </p>
        </section>
        <section>
          <h1>Favorite</h1>
          <p className="lastHomeP">
            Vrei să îți salvezi știrile favorite pentru a le reciti mai încolo?
          </p>
          <p>
            În cadrul fiecărei știri găsești un buton prin care poți adăuga
            știrea la favorite.
          </p>
          <p>
            Vizitează secțiunea{" "}
            <a href="/category/favorite">
              Favorite
            </a>{" "}
            pentru a vedea știrile adăugate.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
