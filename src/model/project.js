const projects = [];

const getNewProject = (name) => {
  const getName = () => name;
  const TODOs = {};
  const addTODO = (todo) => {
    TODOs[todo.getId()] = todo;
  };
  const removeTODO = (id) => {
    delete TODOs[id];
  };
  const getTODOs = () => TODOs;
  const getNumOfTODOs = () => Object.keys(TODOs).length;
  return { getName, addTODO, getTODOs, removeTODO, getNumOfTODOs };
};

const getProject = (id) => projects[id];
const getAllProjects = () => projects;

const addProject = (project) => {
  projects.push(project);
};

const getNumOfProjects = () => projects.length;

export {
  getNewProject,
  getProject,
  addProject,
  getNumOfProjects,
  getAllProjects,
};
