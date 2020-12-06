import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  uri: process.env.DATABASE || 'localhost',
  logging: process.env.DATABASE_LOGGING || 'all',
  synchronize: process.env.DATABASE_SYNC || true,
}));
