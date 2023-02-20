import s from "./Footer.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

interface Props {}

const Footer: React.FC<Props> = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className={s.footerContainer}>
      <div className={s.contentContainer}>
        <KeyboardDoubleArrowUpIcon
          onClick={scrollToTop}
          fontSize="large"
          style={{
            color: "#1B1B1B",
            backgroundColor: "whitesmoke",
            borderRadius: "50%",
            cursor: 'pointer'
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "28px", color: "whitesmoke" }}>
            Julius|Djudjaku
          </h1>
          <h1 style={{ color: "orange", fontWeight: "bold", fontSize: "30px" }}>
            .
          </h1>
        </div>
        <div className={s.socialMediaContainer}>
          <GitHubIcon style={{ color: "whitesmoke" }} fontSize="large" />
          <LinkedInIcon style={{ color: "whitesmoke" }} fontSize="large" />
          <FacebookSharpIcon style={{ color: "whitesmoke" }} fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
