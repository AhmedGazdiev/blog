import React, { useEffect } from "react";
import "./home.scss";
import { useDispatch, useSelector } from "react-redux";
import ArticleCard from "../../components/Cards/ArticleCard/ArticleCard";
import { Heading } from "../../components";
import { getArticles } from "../../redux/actions/articleAction";

const Home = () => {
  const dispatch = useDispatch()

  const {articles} = useSelector((state) => state.article)

  console.log(articles);

  useEffect(() => {
    dispatch(getArticles())
  }, [dispatch])

  return (
    <div className="home">
      <Heading>Необычный блог</Heading>

      <div className="home_block">
        {[...Array(3)].map((article, index) => (
          <ArticleCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default Home;