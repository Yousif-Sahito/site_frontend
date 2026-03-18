import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const formattedDate = new Date(project.createdAt).toLocaleString();

  return (
    <div className="project-card">

      <img
        src={project.thumbnail}
        alt={project.name}
        className="project-thumb"
      />

      <h3>{project.name}</h3>
      <h4>{project.title}</h4>

      <p className="project-date">{formattedDate}</p>

      {/* BUTTONS */}
      <div className="project-buttons">

        <Link
          to={`/project/${project._id}`}
          className="btn btn-details"
        >
          View Details
        </Link>

        <a
          href={project.liveDemoUrl}
          target="_blank"
          rel="noreferrer"
          className="btn btn-demo"
        >
          Live Demo
        </a>

      </div>
    </div>
  );
};

export default ProjectCard;