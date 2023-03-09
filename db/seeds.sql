USE employee_db;

-- In order to populate the database, the following seed data is added
-- Values are taken from example video in the Module 12 Challenge instructions

-- Department

INSERT INTO department (name)
VALUES
  ("Sales"),
  ("Engineering"),
  ("Finance"),
  ("Legal");

-- Role

INSERT INTO role (title, salary, department_id)
VALUES
  ("Sales Lead",100000,1),
  ("Salesperson",80000,1),
  ("Lead Engineer",150000,2),
  ("Software Engineer",120000,2),
  ("Account Manager",160000,3),
  ("Accountant",125000,3),
  ("Legal Team Lead",250000,4);
  ("Lawyer",190000,4);

-- Employee

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ("Xavier","Teo",1,NULL),
  ("Jordan","Belfort",2,1),
  ("Nikola","Tesla",3,NULL),
  ("Thomas","Edison",4,3),
  ("Henry","Ford",4,3),
  ("Warren","Buffet",5,NULL),
  ("Walter","Diemer",6,5),
  ("J.P.","Morgan",6,5),
  ("Abraham","Lincoln",7,NULL),
  ("Thurgood","Marshall",8,7);
