import * as schema from './schema';
import { connect } from '@planetscale/database';
import { config } from '@/db/config';
import { drizzle } from 'drizzle-orm/planetscale-serverless';

const conn = connect(config);
export const db = drizzle(conn, { schema, logger: false });
  