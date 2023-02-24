import Feed from "../../components/Feed";
import Rightbar from "../../components/Rightbar";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
};

export default Home;
