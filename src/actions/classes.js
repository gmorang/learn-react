import store from '../store';
import axios from 'axios';
import errHandler from './_errhandler';

export const fetchLessons = async () => {
  return await axios
    .get('https://api-learn-react.herokuapp.com/v1/lessons')
    .then(res => {
      const lessons = res.data;

      store.set({lessons});

      return lessons;
    })
    .catch(errHandler);
};
