import "./productList.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";

export default function ProductList() {
  return (
    <div>
      <Topbar />
      <div className="productlistWrapper">
        <Sidebar />
        <div className="productList"> ProductList </div>
      </div>
    </div>
  );
}
