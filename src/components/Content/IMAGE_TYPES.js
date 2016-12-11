export const IMAGE_TYPES = {
  ROUND: 'ROUND',
  SQUARE: 'SQUARE'
};

defineValues(IMAGE_TYPES);

function defineValues(enums) {
  Object.defineProperty(enums, 'values', {
    get() {
      return Object.keys(this).map((key) => this[key]);
    },
    enumerable: false
  });
  return enums;
}
