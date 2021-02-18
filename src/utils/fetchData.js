import axios from 'axios';
import dayjs from 'dayjs';

export default async function fetchData(target, isRemoteFetch) {
  const today = dayjs().format('YYYYMMDD');
  let data = {};
  if (isRemoteFetch) {
    data = (await axios.get(target + '/' + today)).data;
  } else {
    data = (await axios.get(target)).data;
  }
  return data;
}
