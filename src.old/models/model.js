import fetchData from '../utils/fetchData';
import genColor from '../utils/genColor';
import _ from 'lodash'

export default {
  namespace: 'pano',
  state: {
    todayInHistory: {},
    wordCloud: {},
    artwork: {},
    quote: {},
    color: 'grey',
  },
  reducers: {
    saveData(state, { payload }) {
      return payload;
    },
    shuffleColor(state) {
      const colors = ['red', 'orange', 'yellow', 'green', 'teal', 'blue', 'violet'];
      const currentColor = _.sample(colors);
      return ({ color: currentColor });
    },
  },
  effects: {
    *getData({ payload }, { call, put }) {
      const data = yield call(fetchData);
      console.log(data);
      yield put({
        type: 'saveData',
        payload: data[0],
      });
    },
  },
};
