import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import useQuery from "../hooks/useQuery";
import About from "./About";
import ArticleList from "./ArticleList";

function HomePage() {
  // fetch data for posts
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [posts, setPosts] = useState([]);
  const {data : posts,isLoaded} = useQuery("http://localhost:4000/posts")

 useDocumentTitle("Underreacted | Home")

  return (
    <>
      <About />
      {isLoaded ? <ArticleList posts={posts} /> : <h3>Loading...</h3>}
    </>
  );
}

export default HomePage;
