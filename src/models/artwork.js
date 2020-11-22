import fetchData from '../utils/fetchData';

export default {
  namespace: 'artwork',
  state: { history: {}, artwork: {}, wordcloud: [], quote: '' },
  effects: {
    *getData({ payload }, { call, put }) {
      const data = yield call(fetchData);
      yield put({
        type: 'saveData',
        payload: {
          history: data[1],
          artwork: data[0],
          wordcloud: data[2],
          artworkArtist: data[3],
          quoteSpeaker: data[4],
          quoteContent: data[5],
        },
      });
    },
  },
  reducers: {
    saveData(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
