import "./projectList.css"
import Project from "../project/Project"
import {projects} from "../../data"

const ProjectList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Projects I've worked on</h1>
                <p className="pl-desc">
                    Some light projects that I've done some work with, both solo and in a group setting.
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