function addProject() {
    const projectName = document.getElementById("project-name").value;
    if (projectName) {
        const projectList = document.getElementById("project-list");
        const projectItem = document.createElement("li");
        projectItem.textContent = projectName;
        projectList.appendChild(projectItem);
        document.getElementById("project-name").value = "";
    }
}

function addTask() {
    const taskName = document.getElementById("task-name").value;
    if (taskName) {
        const taskList = document.getElementById("task-list");
        const taskItem = document.createElement("li");
        taskItem.textContent = taskName;
        taskList.appendChild(taskItem);
        document.getElementById("task-name").value = "";
    }
}

