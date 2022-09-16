import { useState,useEffect} from "react";
import Bloglist from "./Bloglist";

export const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:8000/blogs").then(res=>res.json()).then((data)=>setBlogs(data))
  },[])


  return (
    <div className="home">
     <Bloglist blogs={blogs} title={"All Blogs!"} />
    
    </div>
  );
};
