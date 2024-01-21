import Copyright from "@/components/Copyright";
import { UserProvider } from "@/context/UserContext";
//import { createTheme } from "@mui/material";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
//const theme = createTheme();

export const metadata = {
  title: "My Fake Store Proj",
  description: "Generated by create next app",
  author: "Collin Chamberlin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <ThemeProvider theme={theme}> */}
      <UserProvider>
        <body className={inter.className}>{children}</body>
        <Copyright sx={{ nt: 8, mb: 4 }} />
      </UserProvider>
      {/* </ThemeProvider> */}
    </html>
  );
}
