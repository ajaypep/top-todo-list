import * as ProjectHandler from "./project";

const projectForm = document.querySelector("#create-project-modal>form");
const projectNameElement = projectForm.querySelector("#project-name");

const setupProjectFormEventListeners = () => {
  projectForm.addEventListener("submit", () => {
    ProjectHandler.createProject(projectNameElement.value);
    projectForm.reset();
  });
};

export default setupProjectFormEventListeners;
