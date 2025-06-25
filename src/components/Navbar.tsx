"use client";
import React from "react";
import NextLink from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home", icon: <HomeIcon /> },
  { href: "/dashboard", label: "Dashboard", icon: <DashboardIcon /> },
  { href: "/profile", label: "Profile", icon: <AccountCircleIcon /> },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Bevise
          </Typography>
          <div
            style={{
              display: "none",
              gap: 24,
              alignItems: "center",
              marginRight: 8,
              marginLeft: 8,
            }}
            className="md:flex"
          >
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} passHref>
                <Button
                  color={pathname === link.href ? "secondary" : "inherit"}
                  startIcon={link.icon}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <List sx={{ width: 220 }}>
          {navLinks.map((link) => (
            <ListItemButton
              key={link.href}
              component={NextLink}
              href={link.href}
              selected={pathname === link.href}
              onClick={() => setDrawerOpen(false)}
            >
              <ListItemIcon>{link.icon}</ListItemIcon>
              <ListItemText primary={link.label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
}
