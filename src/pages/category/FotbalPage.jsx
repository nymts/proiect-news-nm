import React from "react";
import "../../components/base-layout.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NewsList from "../../components/NewsCategory";

function FotbalPage() {
  return (
    <div className="layout">
      <Header />
      <main>
        <h1 class="mb-5 pt-3">Fotbal</h1>
        <NewsList category="football" pageSize={20} usePagination={true} />
      </main>
      <Footer />
    </div>
  );
}

export default FotbalPage;
