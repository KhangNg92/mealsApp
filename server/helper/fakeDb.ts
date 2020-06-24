import {MealModel} from '../models/meals';
import {MEALS} from '../../utils/fakeData';

export class FakeDb {
  async clean() {
    MealModel.deleteMany({});
  }

  async addData() {
    await MealModel.create(MEALS);
  }

  async populate() {
    await this.clean();
    await this.addData();
  }
}
