import React, { Fragment, useState, useEffect } from "react";
import Header from "../header/Header";
import Form from "../form/Form";
import ListNews from "../listNews/ListNews";

const Main = () => {
  const [category, saveCategory] = useState("");
  const [news, saveNews] = useState([]);

  useEffect(() => {
    const getAPI = async () => {
      const apiKey = "94bcb0c498de4afc8e5e166c8dbaed38";
      const url = `http://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

      const response = await fetch(url);
      const news = await response.json();
      saveNews(news.articles);
    };
    getAPI();
  }, [category]);

  return (
    <Fragment>
      <Header title="News Searcher"></Header>
      <div className="container white">
        <Form saveCategory={saveCategory}></Form>
        <ListNews news={news}></ListNews>
      </div>
    </Fragment>
  );
};

export default Main;
