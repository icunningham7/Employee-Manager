INSERT INTO departments (name)
    VALUES  ('Engineering'),
            ('R&D'),
            ('Finance'),
            ('Legal'),
            ('Marketing');

INSERT INTO roles (title, salary, department_id)
    VALUES  ('Senior Development Lead', 110000, 1),
            ('Development Lead', 90000, 1),
            ('Development Engineer', 85000, 1),
            ('Senior Research Manager', 170000, 2),
            ('Senior Research Lead', 145000, 2),
            ('Research Lead', 115000, 2),
            ('Junior Researcher', 70000, 2),
            ('Researcher', 65000, 2),
            ('CFO', 165000, 3),
            ('Head Accountant', 95000, 3),
            ('Accountant', 75000, 3),
            ('Lawyer', 100000, 4),
            ('CMO', 150000, 5),
            ('Digital Marketing Manager', 70000, 5),
            ('Digital Advertising', 65000, 5),
            ('Content Specialist', 45000, 5);


INSERT INTO employees (first_name, last_name, role_id, manager_id)
    VALUES  ('John',    'Doe',      5,  NULL),
            ('Mike',    'Chan',     7,  NULL),
            ('Ash',     'Rice',     3,  1),
            ('Kumar',   'Smith',    10, 2),
            ('Sam',     'Henry',    2,  4),
            ('Sara',    'Jenson',   7,  4),
            ('Tom',     'Allen',    1,  3),
            ('Kevin',   'Samuel',   4,  7)

