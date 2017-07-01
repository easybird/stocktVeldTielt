import { AVAILABLE, SOLD, RESERVED } from "./STATUS";

const unitInfo = {
  1: {
    price: 100,
    lot: 1,
    type: "Woning - halfopen",
    status: AVAILABLE,
    squareMeters: 128,
    image: "path/to/image",
    gardenSquareMeters: 30
  },
  2: {
    rooms: 3,
    price: 100,
    lot: 2,
    type: "Woning - gesloten",
    status: AVAILABLE,
    squareMeters: 111,
    image: "path/to/image",
    gardenSquareMeters: 30
  },
  3: {
    rooms: 3,
    price: 100,
    lot: 3,
    type: "Woning - gesloten",
    status: AVAILABLE,
    squareMeters: 125,
    image: "path/to/image",
    gardenSquareMeters: 30
  },
  4: {
    rooms: 3,
    price: 100,
    lot: 4,
    type: "Woning - gesloten",
    status: AVAILABLE,
    squareMeters: 123,
    image: "path/to/image",
    gardenSquareMeters: 30
  },
  5: {
    rooms: 3,
    price: 100,
    lot: 5,
    type: "Woning - halfopen",
    status: AVAILABLE,
    squareMeters: 127,
    image: "path/to/image",
    gardenSquareMeters: 30
  },
  6: {
    rooms: 3,
    price: 100,
    lot: 6,
    type: "Woning - halfopen",
    status: RESERVED,
    squareMeters: 144,
    image: "path/to/image",
    gardenSquareMeters: 30
  },
  7: {
    rooms: 3,
    price: 100,
    lot: 7,
    type: "Woning - gesloten",
    status: SOLD,
    squareMeters: 140,
    image: "path/to/image",
    gardenSquareMeters: 30
  },
  8: {
    rooms: 3,
    price: 100,
    lot: 8,
    type: "Woning - gesloten",
    status: SOLD,
    squareMeters: 134,
    image: "path/to/image",
    gardenSquareMeters: 30
  },
  9: {
    rooms: 3,
    price: 100,
    lot: 9,
    type: "Woning - gesloten",
    status: AVAILABLE,
    squareMeters: 119,
    image: "path/to/image",
    gardenSquareMeters: 30
  },
  10: {
    rooms: 3,
    price: 100,
    lot: 10,
    type: "Woning - gesloten",
    status: SOLD,
    squareMeters: 135,
    image: "path/to/image",
    gardenSquareMeters: 30
  },
  11: {
    rooms: 3,
    price: 100,
    lot: 11,
    type: "Woning - halfopen",
    status: AVAILABLE,
    squareMeters: 115,
    image: "path/to/image",
    gardenSquareMeters: 30
  },
  12: {
    rooms: 3,
    price: 100,
    lot: 12,
    type: "Woning - halfopen",
    status: SOLD,
    squareMeters: 142,
    image: "path/to/image",
    gardenSquareMeters: 30
  },
  13: {
    rooms: 3,
    price: 100,
    lot: 13,
    type: "Woning - halfopen",
    status: SOLD,
    squareMeters: 123,
    image: "path/to/image",
    gardenSquareMeters: 30
  },
  14: {
    rooms: 3,
    price: 100,
    lot: 14,
    type: "Woning - halfopen",
    status: SOLD,
    squareMeters: 126,
    image: "path/to/image",
    gardenSquareMeters: 30
  },
  15: {
    rooms: 3,
    price: 100,
    lot: 15,
    type: "Woning - gesloten",
    status: SOLD,
    squareMeters: 119,
    image: "path/to/image",
    gardenSquareMeters: 30
  },
  16: {
    rooms: 3,
    price: 100,
    lot: 16,
    type: "Woning - gesloten",
    status: AVAILABLE,
    squareMeters: 115,
    image: "path/to/image",
    gardenSquareMeters: 30
  },
  17: {
    rooms: 3,
    price: 100,
    lot: 17,
    type: "Woning - gesloten",
    status: AVAILABLE,
    squareMeters: 115,
    image: "path/to/image",
    gardenSquareMeters: 30
  },
  18: {
    rooms: 3,
    price: 100,
    lot: 18,
    type: "Woning - gesloten",
    status: AVAILABLE,
    squareMeters: 115,
    image: "path/to/image",
    gardenSquareMeters: 30
  },
  19: {
    rooms: 3,
    price: 100,
    lot: 19,
    type: "Woning - gesloten",
    status: SOLD,
    squareMeters: 128,
    image: "path/to/image",
    gardenSquareMeters: 30
  },
  20: {
    rooms: 3,
    price: 100,
    lot: 20,
    type: "Woning - gesloten",
    status: AVAILABLE,
    squareMeters: 136,
    image: "path/to/image",
    gardenSquareMeters: 30
  },
  21: {
    rooms: 3,
    price: 100,
    lot: 21,
    type: "Appartement +0",
    status: SOLD,
    squareMeters: 88,
    image: "path/to/image",
    gardenSquareMeters: 30
  },
  22: {
    rooms: 3,
    price: 100,
    lot: 22,
    type: "Appartement +0",
    status: AVAILABLE,
    squareMeters: 66,
    image: "path/to/image",
    gardenSquareMeters: 30
  },
  23: {
    rooms: 3,
    price: 100,
    lot: 23,
    type: "Appartement +0",
    status: AVAILABLE,
    squareMeters: 60,
    image: "path/to/image",
    gardenSquareMeters: 30
  },
  24: {
    rooms: 3,
    price: 100,
    lot: 24,
    type: "Appartement +0",
    status: AVAILABLE,
    squareMeters: 75,
    image: "path/to/image",
    gardenSquareMeters: 30
  },
  25: {
    rooms: 3,
    price: 100,
    lot: 25,
    type: "Appartement +1",
    status: SOLD,
    squareMeters: 84,
    image: "path/to/image",
    gardenSquareMeters: 30
  },
  26: {
    rooms: 3,
    price: 100,
    lot: 26,
    type: "Appartement +1",
    status: SOLD,
    squareMeters: 79,
    image: "path/to/image",
    gardenSquareMeters: 30
  },
  27: {
    rooms: 3,
    price: 100,
    lot: 27,
    type: "Appartement +1",
    status: AVAILABLE,
    squareMeters: 60,
    image: "path/to/image",
    gardenSquareMeters: 30
  },
  28: {
    rooms: 3,
    price: 100,
    lot: 28,
    type: "Appartement +1",
    status: AVAILABLE,
    squareMeters: 101,
    image: "path/to/image",
    gardenSquareMeters: 30
  },
  29: {
    rooms: 3,
    price: 100,
    lot: 29,
    type: "Appartement +2",
    status: AVAILABLE,
    squareMeters: 90,
    image: "path/to/image",
    gardenSquareMeters: 30
  },
  30: {
    rooms: 3,
    price: 100,
    lot: 30,
    type: "Appartement +2",
    status: AVAILABLE,
    squareMeters: 66,
    image: "path/to/image",
    gardenSquareMeters: 30
  },
  31: {
    rooms: 3,
    price: 100,
    lot: 31,
    type: "Appartement +2",
    status: SOLD,
    squareMeters: 67,
    image: "path/to/image",
    gardenSquareMeters: 30
  },
  32: {
    rooms: 3,
    price: 100,
    lot: 32,
    type: "Appartement +2",
    status: AVAILABLE,
    squareMeters: 102,
    image: "path/to/image",
    gardenSquareMeters: 30
  },
  33: {
    rooms: 3,
    price: 100,
    lot: 33,
    type: "Appartement +3",
    status: AVAILABLE,
    squareMeters: 99,
    image: "path/to/image",
    gardenSquareMeters: 30
  },
  34: {
    rooms: 3,
    price: 100,
    lot: 34,
    type: "Appartement +3",
    status: AVAILABLE,
    squareMeters: 91,
    image: "path/to/image",
    gardenSquareMeters: 30
  },
  35: {
    rooms: 3,
    price: 100,
    lot: 35,
    type: "Duplex +1 & +2",
    status: AVAILABLE,
    squareMeters: 77,
    image: "path/to/image",
    gardenSquareMeters: 30
  },
  36: {
    rooms: 3,
    price: 100,
    lot: 36,
    type: "Duplex +1 & +2",
    status: SOLD,
    squareMeters: 97,
    image: "path/to/image",
    gardenSquareMeters: 30
  },
  37: {
    rooms: 3,
    price: 100,
    lot: 37,
    type: "Duplex +1 & +2",
    status: SOLD,
    squareMeters: 125,
    image: "path/to/image",
    gardenSquareMeters: 30
  }
};
export default unitInfo;
