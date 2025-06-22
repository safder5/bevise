"use client";

import "./globals.css";
import { AuthProvider } from "../context/AuthContext"; // adjust path as needed
import Navbar from "@/components/Navbar";
import MainContainer from "@/components/MainContainer";
import Footer from "@/components/Footer";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#1565c0" },
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            <MainContainer>{children}</MainContainer>
            <Footer />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
