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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={"min-h-screen bg-background font-body antialiased"}>
        <AuthProvider>
          <div className="relative flex min-h-screen flex-col">
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {/* <Navbar /> */}
              <MainContainer>{children}</MainContainer>
              <Footer />
            </ThemeProvider>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
