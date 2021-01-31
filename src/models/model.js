import fetchData from '../utils/fetchData';
import genColor from '../utils/genColor';

export default {
  namespace: 'pano',
  state: {
    todayInHistory: {},
    wordCloud: {},
    artwork: {},
    quote: {},
    color: genColor(),
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
  reducers: {
    saveData(state, { payload }) {
      return payload;
    },
    shuffleColor(state) {
      return { ...state, color: genColor() };
    },
  },
};
