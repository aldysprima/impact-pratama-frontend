import "./home.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <div>
      <Topbar />
      <div className="homeWrapper">
        <Sidebar />
        <Box
          display="flex"
          flex={4}
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <Typography variant="h4" fontWeight="bold">
            Welcome to Admin Dashboard!
          </Typography>
        </Box>
      </div>
    </div>
  );
}
