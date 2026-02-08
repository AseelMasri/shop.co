import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Button,
  InputBase,
  Badge,
  Link,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

/* Search styling */
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 999,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.08),
  },
  marginLeft: theme.spacing(3),
  width: "100%",
  maxWidth: 400,
}));

const SearchInput = styled(InputBase)(({ theme }) => ({
  padding: theme.spacing(1, 2),
  width: "100%",
}));

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = React.useState(null);
  const [shopMenu, setShopMenu] = React.useState(null);

  return (
    <AppBar position="static" elevation={0} color="inherit">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left section */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            sx={{ display: { md: "none" } }}
            onClick={(e) => setMobileMenu(e.currentTarget)}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h5" sx={{ fontWeight: 800 }}>
            SHOP.CO
          </Typography>

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              ml: 4,
              gap: 2,
              alignItems: "center",
            }}
          >
            {/* Shop Dropdown */}
            {/* <Button
              onClick={(e) => setShopMenu(e.currentTarget)}
              endIcon={<KeyboardArrowDownIcon />}
              sx={{ textTransform: "none", color: "black" }}
            >
              Shop
            </Button> */}

            <Link to="#" underline="none" color="black" sx={{ fontWeight: 500 }}>
              On Sale
            </Link>

            <Link to="#" underline="none" color="black" sx={{ fontWeight: 500 }}>
              New Arrivals
            </Link>

            <Link to="#" underline="none" color="black" sx={{ fontWeight: 500 }}>
              Brands
            </Link>
          </Box>
        </Box>

        {/* Search */}
        <Search sx={{ display: { xs: "none", sm: "block" } }}>
          <SearchInput
            placeholder="Search for products..."
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "rgba(0,0,0,0.5)" }} />
              </InputAdornment>
            }
          />
        </Search>

        {/* Right icons */}
        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton>
            <Badge badgeContent={2} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </IconButton>
          <IconButton>
            <PersonOutlineOutlinedIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Shop dropdown */}
      <Menu
        anchorEl={shopMenu}
        open={Boolean(shopMenu)}
        onClose={() => setShopMenu(null)}
      >
        <MenuItem to="#">Men</MenuItem>
        <MenuItem to="#">Women</MenuItem>
        <MenuItem to="#">Kids</MenuItem>
      </Menu>

      {/* Mobile menu */}
      <Menu
        anchorEl={mobileMenu}
        open={Boolean(mobileMenu)}
        onClose={() => setMobileMenu(null)}
        sx={{ display: { md: "none" } }}
      >
        <MenuItem to="#">Shop</MenuItem>
        <MenuItem to="#">On Sale</MenuItem>
        <MenuItem to="#">New Arrivals</MenuItem>
        <MenuItem to="#">Brands</MenuItem>
      </Menu>
    </AppBar>
  );
}
