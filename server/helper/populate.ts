import mongoose from 'mongoose';

import {FakeDb} from './fakeDb';
import {DB} from '../config/dev';

mongoose.connect(
  DB,
  {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true},
  async () => {
    console.log('Populating DB .....');
    await FakeDb.prototype.populate();
    await mongoose.connection.close();
    console.log('DB has been populated...');
  },
);
