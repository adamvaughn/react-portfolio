import "./projectList.css"
import Project from "../project/Project"
import {projects} from "../../data"

const ProjectList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Project List Title</h1>
                <p className="pl-desc">
                    Projects I've worked on
                </p>
            </div>
            <div className="pl-list">
                {projects.map((item) =>
                    <Project key={item.id} img={item.img} link={item.link}/>
                )}
            </div>
        </div>
    );
}

export default ProjectList