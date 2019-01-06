import { Connection } from 'mongoose';

import { UserSchema } from './user.schema';
import { USER_MODEL_PROVIDER, DB_PROVIDER } from '../../constants';

export const usersProviders = [
  {
    provide: USER_MODEL_PROVIDER,
    useFactory: (connection: Connection) =>
      connection.model('User', UserSchema),
    inject: [DB_PROVIDER],
  },
];
