const connection = require("./connection");
class db {
  constructor(connection) {
    this.connection = connection;
  }

  // Add employee
  addEmployee(employee) {
    return this.connection.promise().query("INSERT INTO employee SET ?", employee);
  }

  // Update employee's role
  updateEmployeeRole(employeeId, roleId) {
    return this.connection.promise().query(
      "UPDATE employee SET role_id = ? WHERE id = ?",
      [roleId, employeeId]
    );
  }

// Show all employees
allEmployees() {
  return this.connection.promise().query(
    "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON employee.manager_id = manager.id;"
  );
}

  // Show all managers
  allManagers(employeeId) {
    return this.connection.promise().query(
      "SELECT id, first_name, last_name FROM employee WHERE id != ?",
      employeeId
    );
  }

  // Show all roles
  allRoles() {
    return this.connection.promise().query(
      "SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;"
    );
  }

  // Create new role
  addRole(role) {
    return this.connection.promise().query("INSERT INTO role SET ?", role);
  }

  // Show all departments
  allDepartments() {
    return this.connection.promise().query(
      "SELECT department.id, department.name FROM department;"
    );
  }

  // Add department
  addDepartment(department) {
    return this.connection.promise().query("INSERT INTO department SET ?", department);
  }
}

module.exports = new db(connection);
