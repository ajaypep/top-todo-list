
const createProjectDialog = document.querySelector('#create-project-modal');
const createTODODialog = document.querySelector('#create-todo-modal');
const createProjectBtn = document.querySelector('#create-project');
const createTODOBtn = document.querySelector('#create-todo');
const closeCreateProjectDialogBtn = document.querySelector('#create-project-modal>form>.close-modal');
const closeCreateTODODialogBtn = document.querySelector('#create-todo-modal>form>.close-modal');

const closeCreateProjectDialog = () => {
    createProjectDialog.close();
};

const closeCreateTODODialog = () => {
    createTODODialog.close();
};

const setupEventListeners = () => {
    createProjectBtn.addEventListener('click', () => {
        createProjectDialog.showModal();
    });
    closeCreateProjectDialogBtn.addEventListener('click', closeCreateProjectDialog);

    createTODOBtn.addEventListener('click', () => {
        createTODODialog.showModal();
    });
    closeCreateTODODialogBtn.addEventListener('click', closeCreateTODODialog);
};

export { setupEventListeners, closeCreateProjectDialog, closeCreateTODODialog };