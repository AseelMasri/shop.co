import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Button,
  Stack,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  return (
    <>
      <AppBar position="static" elevation={0} color="inherit">
        <Toolbar
          sx={{
            minHeight: 72,
            borderBottom: "1px solid",
            borderColor: "divider",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* MOBILE MENU BUTTON */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            onClick={() => setOpenDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* LOGO → HOME */}
          <Typography
            component={RouterLink}
            to="/"
            variant="h5"
            sx={{
              fontWeight: 900,
              mr: 4,
              textDecoration: "none",
              color: "inherit",
              flexGrow: { xs: 1, md: 0 },
            }}
          >
            SHOP.CO
          </Typography>

          {/* DESKTOP LINKS */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            <Stack direction="row" spacing={2}>
              <Button sx={{ fontWeight: 600 }}>On Sale</Button>
              <Button sx={{ fontWeight: 600 }}>New Arrivals</Button>
              <Button sx={{ fontWeight: 600 }}>Brands</Button>
            </Stack>
          </Box>

          {/* RIGHT SIDE */}
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Button
              component={RouterLink}
              to="/login"
              variant="outlined"
              size="small"
              sx={{
                display: { xs: "none", md: "flex" },
                textTransform: "none",
                borderRadius: 999,
                fontWeight: 700,
              }}
            >
              Login
            </Button>

            <Button
              component={RouterLink}
              to="/register"
              variant="contained"
              size="small"
              sx={{
                display: { xs: "none", md: "flex" },
                textTransform: "none",
                borderRadius: 999,
                fontWeight: 800,
              }}
            >
              Register
            </Button>

            <IconButton>
              <Badge badgeContent={2} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>

            <IconButton>
              <PersonOutlineOutlinedIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box sx={{ width: 250 }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="On Sale" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="New Arrivals" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Brands" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component={RouterLink} to="/login">
                <ListItemText primary="Login" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component={RouterLink} to="/register">
                <ListItemText primary="Register" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
