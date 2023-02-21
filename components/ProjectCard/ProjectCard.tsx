import Image from "next/image";
import qwertyImg from "../../public/qwertyFixed.png";
import s from "./ProjectCard.module.css";
import { Project } from "data/projects";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  console.log(project);
  return (
    <div className={s.productCard}>
      <div className={s.imgDiv}>
        <Image
          src={`/${project.img}`}
          alt={"Qwerty"}
          className={s.imgStyle}
          width={1000}
          height={1000}
        />
      </div>
      <div className={s.productCardText}>
        <h1 style={{ fontSize: "30px", color: 'orange', textAlign: 'center' }}>{project.name}</h1>
        <h4>{project.description}</h4>
        <div className={s.btnContainer}>
          <Link target={'_blank'} href={`${project.github}` }>
            <button className={s.buttonStyle}>
              <GitHubIcon style={{ color: "white" }} fontSize="large" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
