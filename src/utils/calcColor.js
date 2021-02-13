import axios from 'axios'
import ColorThief from 'colorthief';
import nearestColor from 'nearest-color';

export default async function calcColor(url) {
  const suiStandardColors = {
    red: '#B03060',
    orange: '#FE9A76',
    yellow: '#FFD700',
    olive: '#32CD32',
    green: '#016936',
    teal: '#008080',
    blue: '#0E6EB8',
    violet: '#EE82EE',
    purple: '#B413EC',
    pink: '#FF1493',
    brown: '#A52A2A',
    grey: '#A0A0A0',
    black: '#000000',
  };
  const image = (await axios.get(url)).data;
  
  const target = data.vibrant;
  const result = nearestColor(target).from(suiStandardColors);
  return result;
}
