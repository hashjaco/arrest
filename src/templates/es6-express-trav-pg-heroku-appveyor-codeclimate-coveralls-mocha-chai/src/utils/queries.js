export const createUserTable = `
    DROP TABLE IF EXISTS user;
    CREATE TABLE IF NOT EXISTS user(
        id SERIAL PRIMARY KEY, 
        first_name VARCHAR NOT NULL, 
        last_name VARCHAR NOT NULL, 
        age INT NOT NULL, 
        birthdate DATE NOT NULL 
    )`;

export const insertUsers = `
    INSERT INTO user(first_name, last_name, age, birthdate)
    VALUES ('Hashim', 'Jacobs', 34, '1986-07-10'),
           ('Danielle', 'Shea', 32, '1988-07-14'),
           ('Briana', 'Chorizo', 22, '1998-06-27')
`;

export const dropUsersTable = 'DROP TABLE user';
