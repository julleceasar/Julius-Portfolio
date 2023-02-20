import Image from "next/image";
import qwertyImg from "../../public/qwertyFixed.png";
import s from "./ProjectCard.module.css";
import { Project } from "data/projects";

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
        <h1 style={{ fontSize: "30px" }}>{project.name}</h1>
        <h4>{project.description}</h4>
      </div>
      <div className={s.absoluteDiv}></div>
    </div>
  );
};

export default ProjectCard;
