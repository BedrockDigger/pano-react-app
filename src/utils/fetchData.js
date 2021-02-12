import axios from 'axios'

export default async function fetchData(target) {
  const data = (await axios.get(target)).data;
  console.log(data);
  return data;
}