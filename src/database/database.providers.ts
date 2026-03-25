
import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb+srv://luissepulvedavillarroel_db_user:KsIveTGIsWsppC02@clusterdiplomadoipss.beyx1x4.mongodb.net/?appName=ClusterDiplomadoIPSS'),
  },
];
