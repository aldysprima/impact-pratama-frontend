import "./sidebar.css";
import { Storefront, ExitToApp, Dashboard, Add } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="upperSidebar">
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li
                className="sidebarListItem"
                style={
                  location.pathname === "/"
                    ? { backgroundColor: "#cecef3", borderRadius: "10px" }
                    : null
                }
              >
                <Dashboard className="sidebarIcon" />
                Dashboard
              </li>
            </Link>
            <Link to="/products" className="link">
              <li
                className="sidebarListItem"
                style={
                  location.pathname === "/products"
                    ? { backgroundColor: "#cecef3", borderRadius: "10px" }
                    : null
                }
              >
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </Link>
            <Link to="/addproduct" className="link">
              <li
                className="sidebarListItem"
                style={
                  location.pathname === "/addproduct"
                    ? { backgroundColor: "#cecef3", borderRadius: "10px" }
                    : null
                }
              >
                <Add className="sidebarIcon" />
                Add Product
              </li>
            </Link>
          </ul>
        </div>
        <div className="lowerSidebar">
          <li className="sidebarListItem">
            <ExitToApp className="sidebarIcon" />
            Logout
          </li>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
