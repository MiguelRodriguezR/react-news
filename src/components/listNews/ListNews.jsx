import React from "react";
import News from "../news/News";

const ListNews = ({ news }) => {
  return (
    <div className="row">
      {news.map((newO) => (
        <News key={newO.url} newO={newO}></News>
      ))}
    </div>
  );
};

export default ListNews;
