import Copyright from "@/components/Copyright";
import { UserProvider } from "@/context/UserContext";
//import { createTheme } from "@mui/material";
import Navbar from "@/components/Navbar";
import { CartProvider } from "@/context/CartContext";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
//const theme = createTheme();

export const metadata = {
  title: "My Fake Store Proj",
  description: "A project for the Institute of Data Software Engineering Class",
  author: "Collin Chamberlin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <ThemeProvider theme={theme}> */}
      <UserProvider>
        <CartProvider>
        <body className={inter.className}>
          <Navbar />
          {children}
          <Copyright sx={{ nt: 8, mb: 4 }} />
        </body>
        </CartProvider>
      </UserProvider>
      {/* </ThemeProvider> */}
    </html>
  );
}
