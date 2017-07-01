import unitInfo from "./unitInfo";
import { AVAILABLE, SOLD, RESERVED } from "./STATUS";

const greenOpacity = "rgba(157, 197, 60, 0.8)";
const redOpacity = "rgba(242, 99, 99, 0.8)";
const orangeOpacity = "rgba(255,165,0, 0.8)";

const fillColor = unitNumber => {
  const status = unitInfo[`${unitNumber}`].status;
  switch (status) {
    case AVAILABLE:
      return greenOpacity;
    case SOLD:
      return redOpacity;
    case RESERVED:
      return orangeOpacity;
  }
};

export const detailHousesAreas = [
  {
    id: 1,
    shape: "circle",
    coords: [870, 260, 15],
    fillColor: fillColor(1)
  },
  {
    id: 2,
    shape: "circle",
    coords: [845, 270, 15],
    fillColor: fillColor(2)
  },
  {
    id: 3,
    shape: "circle",
    coords: [820, 280, 15],
    fillColor: fillColor(3)
  },
  {
    id: 4,
    shape: "circle",
    coords: [795, 290, 15],
    fillColor: fillColor(4)
  },
  {
    id: 5,
    shape: "circle",
    coords: [770, 300, 15],
    fillColor: fillColor(5)
  },
  {
    id: 6,
    shape: "circle",
    coords: [640, 275, 15],
    fillColor: fillColor(6)
  },
  { id: 7, shape: "circle", coords: [585, 250, 15], fillColor: fillColor(7) },
  { id: 8, shape: "circle", coords: [530, 225, 15], fillColor: fillColor(8) },
  {
    id: 9,
    shape: "circle",
    coords: [475, 200, 15],
    fillColor: fillColor(9)
  },
  {
    id: 10,
    shape: "circle",
    coords: [420, 175, 15],
    fillColor: fillColor(10)
  },
  {
    id: 11,
    shape: "circle",
    coords: [365, 150, 15],
    fillColor: fillColor(11)
  },
  {
    id: 12,
    shape: "circle",
    coords: [100, 130, 15],
    fillColor: fillColor(12)
  },
  {
    id: 13,
    shape: "circle",
    coords: [170, 130, 15],
    fillColor: fillColor(13)
  },
  {
    id: 14,
    shape: "circle",
    coords: [240, 130, 15],
    fillColor: fillColor(14)
  },
  {
    id: 15,
    shape: "circle",
    coords: [340, 120, 15],
    fillColor: fillColor(15)
  },
  {
    id: 16,
    shape: "circle",
    coords: [370, 120, 15],
    fillColor: fillColor(16)
  },
  {
    id: 17,
    shape: "circle",
    coords: [400, 120, 15],
    fillColor: fillColor(17)
  },
  {
    id: 18,
    shape: "circle",
    coords: [430, 120, 15],
    fillColor: fillColor(18)
  },
  {
    id: 19,
    shape: "circle",
    coords: [460, 120, 15],
    fillColor: fillColor(19)
  },
  {
    id: 20,
    shape: "circle",
    coords: [490, 120, 15],
    fillColor: fillColor(20)
  },
  // {
  //   id: 21,
  //   shape: "circle",
  //   coords: [540, 165, 15],
  //   fillColor: fillColor(21)},
  // {
  //   id: 22,
  //   shape: "circle",
  //   coords: [570, 165, 15],
  //   fillColor: fillColor(22)  },
  // {
  //   id: 23,
  //   shape: "circle",
  //   coords: [600, 165, 15],
  //   fillColor: fillColor(23)  },
  // {
  //   id: 24,
  //   shape: "circle",
  //   coords: [630, 165, 15],
  //   fillColor: fillColor(24)  },
  // {
  //   id: 25,
  //   shape: "circle",
  //   coords: [550, 135, 15],
  //   fillColor: fillColor(25)},
  // {
  //   id: 26,
  //   shape: "circle",
  //   coords: [580, 135, 15],
  //   fillColor: fillColor(26)},
  // {
  //   id: 27,
  //   shape: "circle",
  //   coords: [610, 135, 15],
  //   fillColor: fillColor(27)  },
  // {
  //   id: 28,
  //   shape: "circle",
  //   coords: [640, 135, 15],
  //   fillColor: fillColor(28)  },
  // {
  //   id: 29,
  //   shape: "circle",
  //   coords: [560, 105, 15],
  //   fillColor: fillColor(29)  },
  // {
  //   id: 30,
  //   shape: "circle",
  //   coords: [590, 105, 15],
  //   fillColor: fillColor(30)  },
  // {
  //   id: 31,
  //   shape: "circle",
  //   coords: [620, 105, 15],
  //   fillColor: fillColor(31)},
  // {
  //   id: 32,
  //   shape: "circle",
  //   coords: [650, 105, 15],
  //   fillColor: fillColor(32)  },
  // {
  //   id: 33,
  //   shape: "circle",
  //   coords: [570, 75, 15],
  //   fillColor: fillColor(33)  },
  // {
  //   id: 34,
  //   shape: "circle",
  //   coords: [630, 75, 15],
  //   fillColor: fillColor(34)  },
  {
    id: 35,
    shape: "circle",
    coords: [870, 175, 15],
    fillColor: fillColor(35)
  },
  {
    id: 36,
    shape: "circle",
    coords: [835, 185, 15],
    fillColor: fillColor(36)
  },
  {
    id: 37,
    shape: "circle",
    coords: [800, 195, 15],
    fillColor: fillColor(37)
  }
];

export const detailAppartmentsAreas = [
  {
    id: 21,
    shape: "circle",
    coords: [330, 475, 15],
    fillColor: fillColor(21)
  },
  {
    id: 22,
    shape: "circle",
    coords: [470, 475, 15],
    fillColor: fillColor(22)
  },
  {
    id: 23,
    shape: "circle",
    coords: [580, 460, 15],
    fillColor: fillColor(23)
  },
  {
    id: 24,
    shape: "circle",
    coords: [670, 450, 15],
    fillColor: fillColor(24)
  },
  {
    id: 25,
    shape: "circle",
    coords: [330, 405, 15],
    fillColor: fillColor(25)
  },
  {
    id: 26,
    shape: "circle",
    coords: [470, 405, 15],
    fillColor: fillColor(26)
  },
  {
    id: 27,
    shape: "circle",
    coords: [580, 390, 15],
    fillColor: fillColor(27)
  },
  {
    id: 28,
    shape: "circle",
    coords: [670, 380, 15],
    fillColor: fillColor(28)
  },
  {
    id: 29,
    shape: "circle",
    coords: [330, 340, 15],
    fillColor: fillColor(29)
  },
  {
    id: 30,
    shape: "circle",
    coords: [470, 340, 15],
    fillColor: fillColor(30)
  },
  {
    id: 31,
    shape: "circle",
    coords: [580, 325, 15],
    fillColor: fillColor(31)
  },
  {
    id: 32,
    shape: "circle",
    coords: [670, 315, 15],
    fillColor: fillColor(32)
  },
  {
    id: 33,
    shape: "circle",
    coords: [400, 250, 15],
    fillColor: fillColor(33)
  },
  {
    id: 34,
    shape: "circle",
    coords: [600, 240, 15],
    fillColor: fillColor(34)
  }
];

export const detailPlattegrondAreas = [
  {
    id: 1,
    shape: "circle",
    coords: [560, 450, 15],
    fillColor: fillColor(1)
  },
  {
    id: 2,
    shape: "circle",
    coords: [560, 495, 15],
    fillColor: fillColor(2)
  },
  {
    id: 3,
    shape: "circle",
    coords: [560, 540, 15],
    fillColor: fillColor(3)
  },
  {
    id: 4,
    shape: "circle",
    coords: [560, 585, 15],
    fillColor: fillColor(4)
  },
  {
    id: 5,
    shape: "circle",
    coords: [560, 630, 15],
    fillColor: fillColor(5)
  },
  {
    id: 6,
    shape: "circle",
    coords: [570, 675, 15],
    fillColor: fillColor(6)
  },
  { id: 7, shape: "circle", coords: [520, 675, 15], fillColor: fillColor(7) },
  { id: 8, shape: "circle", coords: [470, 675, 15], fillColor: fillColor(8) },
  {
    id: 9,
    shape: "circle",
    coords: [420, 675, 15],
    fillColor: fillColor(9)
  },
  {
    id: 10,
    shape: "circle",
    coords: [375, 675, 15],
    fillColor: fillColor(10)
  },
  {
    id: 11,
    shape: "circle",
    coords: [325, 675, 15],
    fillColor: fillColor(11)
  },
  {
    id: 12,
    shape: "circle",
    coords: [265, 905, 15],
    fillColor: fillColor(12)
  },
  {
    id: 13,
    shape: "circle",
    coords: [265, 845, 15],
    fillColor: fillColor(13)
  },
  {
    id: 14,
    shape: "circle",
    coords: [265, 785, 15],
    fillColor: fillColor(14)
  },
  {
    id: 15,
    shape: "circle",
    coords: [265, 670, 15],
    fillColor: fillColor(15)
  },
  {
    id: 16,
    shape: "circle",
    coords: [265, 630, 15],
    fillColor: fillColor(16)
  },
  {
    id: 17,
    shape: "circle",
    coords: [265, 590, 15],
    fillColor: fillColor(17)
  },
  {
    id: 18,
    shape: "circle",
    coords: [265, 550, 15],
    fillColor: fillColor(18)
  },
  {
    id: 19,
    shape: "circle",
    coords: [265, 510, 15],
    fillColor: fillColor(19)
  },
  {
    id: 20,
    shape: "circle",
    coords: [265, 460, 15],
    fillColor: fillColor(20)
  },
  {
    id: 21,
    shape: "circle",
    coords: [170, 390, 15],
    fillColor: fillColor(21)
  },
  {
    id: 22,
    shape: "circle",
    coords: [170, 320, 15],
    fillColor: fillColor(22)
  },
  {
    id: 23,
    shape: "circle",
    coords: [170, 270, 15],
    fillColor: fillColor(23)
  },
  {
    id: 24,
    shape: "circle",
    coords: [170, 220, 15],
    fillColor: fillColor(24)
  },
  {
    id: 25,
    shape: "circle",
    coords: [140, 390, 15],
    fillColor: fillColor(25)
  },
  {
    id: 26,
    shape: "circle",
    coords: [140, 320, 15],
    fillColor: fillColor(26)
  },
  {
    id: 27,
    shape: "circle",
    coords: [140, 270, 15],
    fillColor: fillColor(27)
  },
  {
    id: 28,
    shape: "circle",
    coords: [140, 220, 15],
    fillColor: fillColor(28)
  },
  {
    id: 29,
    shape: "circle",
    coords: [110, 390, 15],
    fillColor: fillColor(29)
  },
  {
    id: 30,
    shape: "circle",
    coords: [110, 320, 15],
    fillColor: fillColor(30)
  },
  {
    id: 31,
    shape: "circle",
    coords: [110, 270, 15],
    fillColor: fillColor(31)
  },
  {
    id: 32,
    shape: "circle",
    coords: [110, 220, 15],
    fillColor: fillColor(32)
  },
  {
    id: 33,
    shape: "circle",
    coords: [90, 355, 15],
    fillColor: fillColor(33)
  },
  {
    id: 34,
    shape: "circle",
    coords: [90, 245, 15],
    fillColor: fillColor(34)
  },
  {
    id: 35,
    shape: "circle",
    coords: [560, 220, 15],
    fillColor: fillColor(35)
  },
  {
    id: 36,
    shape: "circle",
    coords: [560, 300, 15],
    fillColor: fillColor(36)
  },
  {
    id: 37,
    shape: "circle",
    coords: [560, 380, 15],
    fillColor: fillColor(37)
  }
];
