// import axios from 'axios'
import { fetch } from 'dva';

export default async () => {
  return new Promise(resolve => {
    fetch('/receptionist', { method: 'GET' }).then(res => {
      res.json().then(ret => {
        resolve([ret]);
      });
    });
  });
};
