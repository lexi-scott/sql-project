function openPrompt() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'first',
                message: 'What would you like to do?',
                choices: ['View All Employees', 'Add an Employee', 'Update Employee Role', 'View All Roles', 'Add a Role', 'View All Departments', 'Add a Department', 'Quit']
            }
        ])
        .then((data) => {
            if (data.first === "View All Employees") {
                viewEmployee();
            }

            else if (data.first === "Add an Employee") {
                addEmployee();
            }

            else if (data.first === "Update Employee Role") {
                updateRole();
            }

            else if (data.first === "View All Roles") {
                viewRoles();
            }

            else if (data.first === "Add a Role") {
                addRole();
            }
            else if (data.first === "View All Departments") {
                viewDepartments();
            }

            else if (data.first === "Add a Department") {
                addDepartment();
            }

            else if (data.first === "Quit") {
                process.exit();
            };
        });
};

function viewDepartments() {

}

function addEmployee() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Employee's first and last name:"
            },
            {
                type: "input",
                name: "department",
                message: "Employee's department:"
            },
            {
                type: "input",
                name: "email",
                message: "Employee's email:"
            },
            {
                type: "input",
                name: "role",
                message: "Employee's role",
            },
            {
                type: "input",
                name: "manager",
                message: "Employee's manager:"
            },
        ])
        .then((data) => {
            employee = new Employee(data.name, data.department, data.email, data.role, data.manager);
            openPrompt();
        })
}

function updateRole() {

}

function viewRoles() {

}

function addRole() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "role",
                message: "Name of new role:"
            },
            {
                type: "input",
                name: "salary",
                message: "Salary of the role:"
            },
            {
                type: "input",
                name: "department",
                message: "Department the role belongs to:"
            }
        ])
        .then((data) => {
            role = new Role(data.role)
            openPrompt();
        })
}

function viewDepartments() {

}

function addDepartment() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "department",
                message: "Name of new department:"
            }
        ])
        .then((data) => {
            department = new Department(data.department)
            openPrompt();
        })
}