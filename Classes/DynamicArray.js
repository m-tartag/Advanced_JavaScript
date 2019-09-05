class DynamicArray {
  constructor() {
    const initialState = 5;
    this._data = new Array(initialState);
    this._length = 0;
  }

  getElement(index) {
    return this._data[index];
  }

  setElement(index, value) {
    this._data[index] = value;
  }

  push(element) {
    this._data[this._length] = element;
    this._length += 1;
  }
}

const NEW = new DynamicArray();

console.log(NEW);
