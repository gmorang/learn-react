export default {
  get,
  set,
  onChange,
};

const storeData = {};
const onChangeListeners = [];

function get(key) {
  if (key) {
    return storeData[key];
  } else {
    return storeData;
  }
}

function set(newData) {
  Object.assign(storeData, newData);

  onChangeListeners.forEach(fn => fn.call(undefined, get()));
}

function onChange(fn) {
  onChangeListeners.push(fn);
}
