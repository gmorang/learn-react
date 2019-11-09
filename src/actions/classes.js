import store from '../store';
import axios from 'axios';
import errHandler from './_errhandler';

export const fetchClasses = () => {
  return axios
    .get('http://localhost:7900/v1/lessons')
    .then(res => {
      const lessons = res.data;

      store.set({lessons});

      return lessons;
    })
    .catch(errHandler);
};
