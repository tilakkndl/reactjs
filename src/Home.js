import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
  const { data, isPending, error } = useFetch("http://localhost:3000/blogs");
  return (
    <div className="Home">
      {error && <div> {error}</div>}
      {isPending && <div>Loading...</div>}
      {data && <BlogList blogs={data} title="All Blogs" />}
    </div>
  );
};

export default Home;
 