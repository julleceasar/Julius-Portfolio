import s from "@/styles/General.module.css";
import Navbar from "components/Navbar/Navbar";
import Footer from "components/Footer/Footer";
import { Roboto_Mono } from "@next/font/google";

interface Props {
  children?: React.ReactNode;
}

const roboto = Roboto_Mono({
  subsets: ["latin"],
});

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={roboto.className}>
      <Navbar />
      <main className={s.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
