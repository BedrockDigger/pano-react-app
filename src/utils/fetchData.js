import axios from 'axios';
import dayjs from 'dayjs';

export default async function fetchData(target) {
  const today = dayjs().format('YYYYMMDD');
  const data = (await axios.get(target + '/' + today)).data;
  return data;
}
