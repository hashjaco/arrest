import { pool } from '../models/pool';
import { createUserTable, insertUsers, dropUsersTable } from './queries';

export const executeQueryArray = async (arr) => new Promise((resolve) => {
  const stop = arr.length;
  arr.forEach(async (q, index) => {
    await pool.query(q);
    if (index + 1 === stop) resolve();
  });
});

export const dropTables = () => executeQueryArray([ dropUsersTable ]);
export const createTables = () => executeQueryArray([ createUserTable ]);
export const insertIntoTables = () => executeQueryArray([ insertUsers ]);
