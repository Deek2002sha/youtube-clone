//Stack is a container component for arranging elements vertically or horizontally.
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import { SearchBar } from "./";
import { Typography } from "@mui/material";

const Navbar = () => (
  <Stack direction="column" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <Typography variant="h5" sx={{ fontWeight: "bold", color: "#fff" }}>Videostreaming</Typography>
    <SearchBar/>
  </Stack>
);

export default Navbar;