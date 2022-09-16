const Bloglist = ({blogs}) => {
   
  return (
    <div className="blog-list">
        <h2>All Blogs!</h2>
        {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  )
};

export default Bloglist;