import { Poppins } from "next/font/google";
import "@/assets/styles/globals.css";

export const metadata = {
  title: "Property pulse",
  keywords: "property, rental, real-estate",
  description: "You could find all the property descriptions here as well",
};
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});
const MainLayout = ({ children }) => {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
