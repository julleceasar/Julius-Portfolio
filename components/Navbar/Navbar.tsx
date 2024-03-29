import Link from "next/link";
import Image from "next/image";
import s from "./Navbar.module.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useRouter } from "next/router";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import HamburgerDrawer from "components/HamburgerDrawer/HamburgerDrawer";
import codeLogo from "../../public/code.png";

interface Props {}

const Navbar: React.FC<Props> = () => {
  const isMobile = useMediaQuery("(max-width:574px)");
  const isTablet = useMediaQuery("(max-width:720px)");
  const router = useRouter();

  return (
    <nav className={!isMobile ? s.navStyle : s.navStyleMobile}>
      <Link href={"/"}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "28px" }}>
            {!isMobile ? "Julius|Djudjaku" : "J|D"}
          </h1>
          <h1 style={{ color: "orange", fontWeight: "bold", fontSize: "30px" }}>
            .
          </h1>
        </div>
      </Link>
      {!isTablet ? (
        <ul className={s.ulStyle}>
          <Link scroll={false} href={'/#projects'}>
            <li className={s.liStyle}>PROJECTS</li>
          </Link>

          <Link href={"/contact"}>
            <li className={s.liStyle}>CONTACT</li>
          </Link>
          <a href="/julius_cv_short.pdf" target={"blank"}>
            <li className={s.liButton}>RESUME</li>
          </a>
        </ul>
      ) : (
        <HamburgerDrawer />
      )}
    </nav>
  );
};

export default Navbar;
