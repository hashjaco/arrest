import dotenv from 'dotenv';

dotenv.config();

export const sampleVariable = process.env.SAMPLE_VARIABLE;
export const connectionString = process.env.POSTGRES_CONNECTION_STRING;
