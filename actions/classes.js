import {firestore} from '../settings/firebase';

export const fetchClasses = () => {
  console.log('cheguei na function');
  return firestore
    .collection('classes')
    .get()
    .then(res =>
      res.docs.map(doc => {
        console.log(doc);
        const data = doc.data();
        return data;
      }),
    )
    .catch(err => {
      console.log(err);
    });
};
