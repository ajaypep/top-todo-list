const getNewTODO = (id, name, priority, description, dueDate, checklist) => {
    const getId = () => id;
    const getName = () => name;
    const getPriority = () => priority;
    const getDescription = () => description;
    const getDueDate = () => dueDate;

    let completionStatus = false;
    const isComplete = (complete) => completionStatus = complete;

    const getChecklist = () => checklist;
    const addChecklistItem = (done, title) => checklist.add({ done, title });
    const updateChecklistItem = (index, updatedChecklistItem) => {
        checklist[index] = updatedChecklistItem;
    };

    return { getId, getName, getPriority, getDescription, getDueDate, isComplete, getChecklist, addChecklistItem, updateChecklistItem };
};

export { getNewTODO };