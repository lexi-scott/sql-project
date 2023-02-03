USE employeeManager_db;
INSERT INTO departments (name)
VALUES
 ("Sales"),
 ("Engineering"),
 ("Finance"),
 ("Legal");

INSERT INTO roles (title, salary, department_id)
VALUES 
("Sales General Manager", 100000, 1), 
("Sales Associate", 80000, 1), 
("Lead Engineer", 150000, 2), 
("Software Engineer", 120000, 2), 
("Accountant", 125000, 3), 
("Partner", 250000, 4), 
("Attorney", 190000, 4);

INSERT INTO employees (first_name, last_name, role_id)
VALUES 
("Scott", "Lexi", 3), 
("Canales", "Micah", 2), 
("Harrington", "Terri", 1),
("Harris", "Tom", 4), 
("Bartelt", "Tami", 5), 
("Brennan", "Dallas", 6), 
("Huss", "Jennifer", 7)