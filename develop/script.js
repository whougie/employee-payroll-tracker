// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {  
  const employees = [];
  let isContinue = true;  
  
  while ( isContinue ) {
    let employee = {
      firstName: "",
      lastName: "",
      salary: 0
    }
    
    // Collect First Name
    employee.firstName = prompt("Please enter the employee's first name:");
    
    // Collect Last Name
    employee.lastName = prompt("Please enter the employee's last name:");
    
    // Collect Salary
    employee.salary = prompt("Please enter the employee's salary:");
    
    if (!isNaN(employee.salary) && employee.salary !== '') {
      employee.salary = parseFloat(employee.salary);
    } else {
      employee.salary = 0;
      alert("Using 0 for salary since invalid value was used");
    }
    
    // Add the employee to the array
    employees.push(employee);
    
    // Repeat until user no longer wants to continue inserting employee
    isContinue = confirm("Would you like to add another employee's information?");
  }
  return employees;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  let averageSalary = 0;
  
   for (i = 0; i < employeesArray.length; i++) {
     averageSalary = averageSalary + employeesArray[i].salary;
   }

  averageSalary = (averageSalary / employeesArray.length).toFixed(2);
  console.log("The average employee salary between the " + employeesArray.length + " employee(s) is $" + averageSalary);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length); 
  const employeeSelected = employeesArray[randomIndex];

  console.log("The lucky random winner employee is " + employeeSelected.firstName + " " + employeeSelected.lastName);
}

/*
====================
STARTER CODE
Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');
  
  // Clear the employee table
  employeeTable.innerHTML = '';
  
  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];
    
    const newTableRow = document.createElement("tr");
    
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);
    
    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);
    
    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });
    
    newTableRow.append(salaryCell);
    
    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();
  
  console.table(employees);
  
  displayAverageSalary(employees);
  
  console.log('==============================');
  
  getRandomEmployee(employees);
  
  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });
  
  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
