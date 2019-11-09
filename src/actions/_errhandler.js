export default function errHandler(res) {
  console.error('errHandler', res);

  throw res;
};
