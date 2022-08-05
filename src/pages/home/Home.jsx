import "./home.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Home() {
  return (
    <div>
      <Topbar />
      <div className="homeWrapper">
        <Sidebar />
        <div className="home">
          Home
          <div className="homeWidgets"></div>
        </div>
      </div>
    </div>
  );
}
