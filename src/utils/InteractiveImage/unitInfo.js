import { AVAILABLE, SOLD, RESERVED } from "./STATUS";

export const unitTypeDescriptions = {
  oostVleugel: {
    description:
      "Deze nieuwbouwwoning bevindt zich in de oostvleugel van de site. De voorkant van de woning kijkt uit op het binnenplein. Aan de achterkant van de woning is er een privétuin, die uitkijkt op de moestuin. Bovendien ligt deze woning dichtbij de parking."
  },
  zuidVleugel: {
    description:
      "Deze nieuwbouwwoning bevindt zich in de zuidvleugel van de site. De voorkant van de woning kijkt uit op het binnenplein. Aan de achterkant van de woning is er een privétuin, die uitkijkt op de grote gemeenschappelijke tuin."
  },
  buitenBeentjes: {
    description:
      "Deze nieuwbouwwoning bevindt zich in de westelijke vleugel van de site. De voorkant van de woning kijkt uit op de grote gemeenschappelijke tuin. Aan de achterkant van de woning is er een privétuin. Op het einde van de privétuin is er de kloostermuur. Indien gewenst kan er een grote opening in deze muur gemaakt worden, zodat er uitkijk is op de achterliggende groene zone."
  },
  westVleugel: {
    description:
      "Deze nieuwbouwwoning bevindt zich in de westelijke vleugel van de site. De voorkant van de woning kijkt uit op het binnenplein. Aan de achterkant van de woning is er een privétuin. Op het einde van de privétuin is er de kloostermuur. Indien gewenst kan er een grote opening in deze muur gemaakt worden, zodat er uitkijk is op de achterliggende groene zone."
  },
  appartementGelijkvloers: {
    description:
      "Dit nieuwbouwappartement bevindt zich in de westelijke vleugel van de site, op het gelijkvloers. Er is een eigen privétuin. De voorzijde van het appartement kijkt uit op het binnenplein."
  },
  appartementEersteVerdiep: {
    description:
      "Dit nieuwbouwappartement bevindt zich in de westelijke vleugel van de site, op de eerste verdieping. Het terras kijkt uit op de achterliggende groene zone aan de westkant. Door de constructie aan de voorzijde, wordt de connectie met het binnenplein zo groot mogelijk gehouden."
  },
  appartementTweedeVerdiep: {
    description:
      "Dit nieuwbouwappartement bevindt zich in de westelijke vleugel van de site, op de tweede verdieping. Het terras kijkt uit op de achterliggende groene zone aan de westkant. Door de constructie aan de voorzijde, wordt de connectie met het binnenplein zo groot mogelijk gehouden."
  },
  appartementDerdeVerdiep: {
    description:
      "Dit nieuwbouwappartement bevindt zich in de westelijke vleugel van de site, op de derde verdieping. Het terras kijkt uit op de achterliggende groene zone aan de westkant. Door de constructie aan de voorzijde, wordt de connectie met het binnenplein zo groot mogelijk gehouden. Doordat het appartement zich op de derde verdieping bevindt, is er zicht op de ganse site."
  },
  duplex: {
    description:
      "Dit gerenoveerde duplexappartement bevindt zich in de oostelijke vleugel van de site, op de 3de verdieping. Het terras kijkt uit op het binnenplein, en - door de hoogte - de ganse site."
  }
};

const unitInfo = {
  1: {
    rooms: 3,
    price: "+/- € 331,849 (excl. BTW)",
    lot: 1,
    type: "Woning - halfopen",
    status: AVAILABLE,
    squareMeters: 128.4,
    images: [
      {
        name: "Blok A, niveau 0",
        path: "/assets/img/aanbod/plannen/architect/blokA_nivo0.jpg"
      },
      {
        name: "Blok A, niveau 1",
        path: "/assets/img/aanbod/plannen/architect/blokA_nivo1.jpg"
      }
    ],
    gardenSquareMeters: 40.1,
    unitType: "oostVleugel"
  },
  2: {
    rooms: 3,
    price: "+/- € 309,163 (excl. BTW)",
    lot: 2,
    type: "Woning - gesloten",
    status: AVAILABLE,
    squareMeters: 111.4,
    images: [
      {
        name: "Blok A, niveau 0",
        path: "/assets/img/aanbod/plannen/architect/blokA_nivo0.jpg"
      },
      {
        name: "Blok A, niveau 1",
        path: "/assets/img/aanbod/plannen/architect/blokA_nivo1.jpg"
      }
    ],
    gardenSquareMeters: 34.8,
    unitType: "oostVleugel"
  },
  3: {
    rooms: 3,
    price: "+/- € 329,918 (excl. BTW)",
    lot: 3,
    type: "Woning - gesloten",
    status: AVAILABLE,
    squareMeters: 124.8,
    images: [
      {
        name: "Blok A, niveau 0",
        path: "/assets/img/aanbod/plannen/architect/blokA_nivo0.jpg"
      },
      {
        name: "Blok A, niveau 1",
        path: "/assets/img/aanbod/plannen/architect/blokA_nivo1.jpg"
      }
    ],
    gardenSquareMeters: 38.8,
    unitType: "oostVleugel"
  },
  4: {
    rooms: 4,
    price: "+/- € 319,063  (excl. BTW)",
    lot: 4,
    type: "Woning - gesloten",
    status: AVAILABLE,
    squareMeters: 123,
    images: [
      {
        name: "Blok A, niveau 0",
        path: "/assets/img/aanbod/plannen/architect/blokA_nivo0.jpg"
      },
      {
        name: "Blok A, niveau 1",
        path: "/assets/img/aanbod/plannen/architect/blokA_nivo1.jpg"
      }
    ],
    gardenSquareMeters: 55.2,
    unitType: "oostVleugel"
  },
  5: {
    rooms: 4,
    price: "+/- € 321,098 (excl. BTW)",
    lot: 5,
    type: "Woning - halfopen",
    status: AVAILABLE,
    squareMeters: 126.6,
    images: [
      {
        name: "Blok A, niveau 0",
        path: "/assets/img/aanbod/plannen/architect/blokA_nivo0.jpg"
      },
      {
        name: "Blok A, niveau 1",
        path: "/assets/img/aanbod/plannen/architect/blokA_nivo1.jpg"
      }
    ],
    gardenSquareMeters: 57.1,
    unitType: "oostVleugel"
  },
  6: {
    rooms: 4,
    price: "+/- € 321,063 (excl. BTW)",
    lot: 6,
    type: "Woning - halfopen",
    status: RESERVED,
    squareMeters: 126.6,
    images: [
      {
        name: "Blok B, niveau 0",
        path: "/assets/img/aanbod/plannen/architect/blokB_nivo0.jpg"
      },
      {
        name: "Blok B, niveau 1",
        path: "/assets/img/aanbod/plannen/architect/blokB_nivo1.jpg"
      }
    ],
    gardenSquareMeters: 56.9,
    unitType: "zuidVleugel"
  },
  7: {
    rooms: 4,
    price: "+/- € 340,420 (excl. BTW)",
    lot: 7,
    type: "Woning - gesloten",
    status: SOLD,
    squareMeters: 140,
    images: [
      {
        name: "Blok B, niveau 0",
        path: "/assets/img/aanbod/plannen/architect/blokB_nivo0.jpg"
      },
      {
        name: "Blok B, niveau 1",
        path: "/assets/img/aanbod/plannen/architect/blokB_nivo1.jpg"
      }
    ],
    gardenSquareMeters: 47.1,
    unitType: "zuidVleugel"
  },
  8: {
    rooms: 3,
    price: "+/- € 323,517 (excl. BTW)",
    lot: 8,
    type: "Woning - gesloten",
    status: SOLD,
    squareMeters: 129.2,
    images: [
      {
        name: "Blok B, niveau 0",
        path: "/assets/img/aanbod/plannen/architect/blokB_nivo0.jpg"
      },
      {
        name: "Blok B, niveau 1",
        path: "/assets/img/aanbod/plannen/architect/blokB_nivo1.jpg"
      }
    ],
    gardenSquareMeters: 39.6,
    unitType: "zuidVleugel"
  },
  9: {
    rooms: 4,
    price: "+/- € 331,144 (excl. BTW)",
    lot: 9,
    type: "Woning - gesloten",
    status: SOLD,
    squareMeters: 134.4,
    images: [
      {
        name: "Blok B, niveau 0",
        path: "/assets/img/aanbod/plannen/architect/blokB_nivo0.jpg"
      },
      {
        name: "Blok B, niveau 1",
        path: "/assets/img/aanbod/plannen/architect/blokB_nivo1.jpg"
      }
    ],
    gardenSquareMeters: 46.8,
    unitType: "zuidVleugel"
  },
  10: {
    rooms: 3,
    price: "+/- € 335,975 (excl. BTW)",
    lot: 10,
    type: "Woning - gesloten",
    status: SOLD,
    squareMeters: 134.8,
    images: [
      {
        name: "Blok B, niveau 0",
        path: "/assets/img/aanbod/plannen/architect/blokB_nivo0.jpg"
      },
      {
        name: "Blok B, niveau 1",
        path: "/assets/img/aanbod/plannen/architect/blokB_nivo1.jpg"
      }
    ],
    gardenSquareMeters: 42,
    unitType: "zuidVleugel"
  },
  11: {
    rooms: 3,
    price: "+/- € 311,284 (excl. BTW)",
    lot: 11,
    type: "Woning - halfopen",
    status: AVAILABLE,
    squareMeters: 115.4,
    images: [
      {
        name: "Blok B, niveau 0",
        path: "/assets/img/aanbod/plannen/architect/blokB_nivo0.jpg"
      },
      {
        name: "Blok B, niveau 1",
        path: "/assets/img/aanbod/plannen/architect/blokB_nivo1.jpg"
      }
    ],
    gardenSquareMeters: 36.1,
    unitType: "zuidVleugel"
  },
  12: {
    rooms: 3,
    price: "+/- € 359,489 (excl. BTW)",
    lot: 12,
    type: "Woning - halfopen",
    status: SOLD,
    squareMeters: 141.6,
    images: [
      {
        name: "Blok C, niveau 0",
        path: "/assets/img/aanbod/plannen/architect/blokC_nivo0.jpg"
      },
      {
        name: "Blok C, niveau 1",
        path: "/assets/img/aanbod/plannen/architect/blokC_nivo1.jpg"
      }
    ],
    gardenSquareMeters: 49.8,
    unitType: "buitenBeentjes"
  },
  13: {
    rooms: 4,
    price: "+/- € 327,286 (excl. BTW)",
    lot: 13,
    type: "Woning - halfopen",
    status: SOLD,
    squareMeters: 122.8,
    images: [
      {
        name: "Blok C, niveau 0",
        path: "/assets/img/aanbod/plannen/architect/blokC_nivo0.jpg"
      },
      {
        name: "Blok C, niveau 1",
        path: "/assets/img/aanbod/plannen/architect/blokC_nivo1.jpg"
      }
    ],
    gardenSquareMeters: 46,
    unitType: "buitenBeentjes"
  },
  14: {
    rooms: 4,
    price: "+/- €327,772 (excl. BTW)",
    lot: 14,
    type: "Woning - halfopen",
    status: SOLD,
    squareMeters: 126,
    images: [
      {
        name: "Blok C, niveau 0",
        path: "/assets/img/aanbod/plannen/architect/blokC_nivo0.jpg"
      },
      {
        name: "Blok C, niveau 1",
        path: "/assets/img/aanbod/plannen/architect/blokC_nivo1.jpg"
      }
    ],
    gardenSquareMeters: 40,
    unitType: "buitenBeentjes"
  },
  15: {
    rooms: 3,
    price: "+/- € 309,701 (excl. BTW)",
    lot: 15,
    type: "Woning - gesloten",
    status: AVAILABLE,
    squareMeters: 119,
    images: [
      {
        name: "Blok D, niveau 0",
        path: "/assets/img/aanbod/plannen/architect/blokD_nivo0.jpg"
      },
      {
        name: "Blok D, niveau 1",
        path: "/assets/img/aanbod/plannen/architect/blokD_nivo1.jpg"
      }
    ],
    gardenSquareMeters: 73.1,
    unitType: "westVleugel"
  },
  16: {
    rooms: 3,
    price: "+/- € 306,471 (excl. BTW)",
    lot: 16,
    type: "Woning - gesloten",
    status: AVAILABLE,
    squareMeters: 114.8,
    images: [
      {
        name: "Blok D, niveau 0",
        path: "/assets/img/aanbod/plannen/architect/blokD_nivo0.jpg"
      },
      {
        name: "Blok D, niveau 1",
        path: "/assets/img/aanbod/plannen/architect/blokD_nivo1.jpg"
      }
    ],
    gardenSquareMeters: 65.9,
    unitType: "westVleugel"
  },
  17: {
    rooms: 3,
    price: "+/- € 305,663 (excl. BTW)",
    lot: 17,
    type: "Woning - gesloten",
    status: AVAILABLE,
    squareMeters: 114.8,
    images: [
      {
        name: "Blok D, niveau 0",
        path: "/assets/img/aanbod/plannen/architect/blokD_nivo0.jpg"
      },
      {
        name: "Blok D, niveau 1",
        path: "/assets/img/aanbod/plannen/architect/blokD_nivo1.jpg"
      }
    ],
    gardenSquareMeters: 61.2,
    unitType: "westVleugel"
  },
  18: {
    rooms: 3,
    price: "+/- € 304,469 (excl. BTW)",
    lot: 18,
    type: "Woning - gesloten",
    status: SOLD,
    squareMeters: 114.8,
    images: [
      {
        name: "Blok D, niveau 0",
        path: "/assets/img/aanbod/plannen/architect/blokD_nivo0.jpg"
      },
      {
        name: "Blok D, niveau 1",
        path: "/assets/img/aanbod/plannen/architect/blokD_nivo1.jpg"
      }
    ],
    gardenSquareMeters: 56.4,
    unitType: "westVleugel"
  },
  19: {
    rooms: 1,
    price: "+/- € 339,416 (excl. BTW)",
    lot: 19,
    type: "Woning - gesloten",
    status: SOLD,
    squareMeters: 127.6,
    images: [
      {
        name: "Blok D, niveau 0",
        path: "/assets/img/aanbod/plannen/architect/blokD_nivo0.jpg"
      },
      {
        name: "Blok D, niveau 1",
        path: "/assets/img/aanbod/plannen/architect/blokD_nivo1.jpg"
      }
    ],
    gardenSquareMeters: 60.3,
    unitType: "westVleugel"
  },
  20: {
    rooms: 3,
    price: "+/- € 329,634 (excl. BTW)",
    lot: 20,
    type: "Woning - gesloten",
    status: AVAILABLE,
    squareMeters: 135.8,
    images: [
      {
        name: "Blok D, niveau 0",
        path: "/assets/img/aanbod/plannen/architect/blokD_nivo0.jpg"
      },
      {
        name: "Blok D, niveau 1",
        path: "/assets/img/aanbod/plannen/architect/blokD_nivo1.jpg"
      }
    ],
    gardenSquareMeters: 53.6,
    unitType: "westVleugel"
  },
  21: {
    rooms: 2,
    price: "+/- € 255,765 (excl. BTW)",
    lot: 21,
    type: "Appartement +0",
    status: SOLD,
    squareMeters: 88.4,
    images: [
      {
        name: "Blok E, niveau 0",
        path: "/assets/img/aanbod/plannen/architect/blokE_nivo0.jpg"
      }
    ],
    gardenSquareMeters: 95.9,
    unitType: "appartementGelijkvloers"
  },
  22: {
    rooms: 1,
    price: "+/- € 213,369 (excl. BTW)",
    lot: 22,
    type: "Appartement +0",
    status: AVAILABLE,
    squareMeters: 65.3,
    images: [
      {
        name: "Blok E, niveau 0",
        path: "/assets/img/aanbod/plannen/architect/blokE_nivo0.jpg"
      }
    ],
    gardenSquareMeters: 52.9,
    unitType: "appartementGelijkvloers"
  },
  23: {
    rooms: 1,
    price: "+/- € 213,029 (excl. BTW)",
    lot: 23,
    type: "Appartement +0",
    status: AVAILABLE,
    squareMeters: 66.4,
    images: [
      {
        name: "Blok E, niveau 0",
        path: "/assets/img/aanbod/plannen/architect/blokE_nivo0.jpg"
      }
    ],
    gardenSquareMeters: 44.5,
    unitType: "appartementGelijkvloers"
  },
  24: {
    rooms: 2,
    price: "+/- € 229,048 (excl. BTW)",
    lot: 24,
    type: "Appartement +0",
    status: AVAILABLE,
    squareMeters: 76.2,
    images: [
      {
        name: "Blok E, niveau 0",
        path: "/assets/img/aanbod/plannen/architect/blokE_nivo0.jpg"
      }
    ],
    gardenSquareMeters: 47.5,
    unitType: "appartementGelijkvloers"
  },
  25: {
    rooms: 1,
    price: "+/- € 243,191 (excl. BTW)",
    lot: 25,
    type: "Appartement +1",
    status: SOLD,
    squareMeters: 83.5,
    images: [
      {
        name: "Blok E, niveau 1",
        path: "/assets/img/aanbod/plannen/architect/blokE_nivo1.jpg"
      }
    ],
    gardenSquareMeters: 8.8,
    unitType: "appartementEersteVerdiep"
  },
  26: {
    rooms: 2,
    price: "+/- € 236,744 (excl. BTW)",
    lot: 26,
    type: "Appartement +1",
    status: SOLD,
    squareMeters: 78.4,
    images: [
      {
        name: "Blok E, niveau 1",
        path: "/assets/img/aanbod/plannen/architect/blokE_nivo1.jpg"
      }
    ],
    gardenSquareMeters: 11,
    unitType: "appartementEersteVerdiep"
  },
  27: {
    rooms: 1,
    price: "+/- € 227,939 (excl. BTW)",
    lot: 27,
    type: "Appartement +1",
    status: AVAILABLE,
    squareMeters: 66.4,
    images: [
      {
        name: "Blok E, niveau 1",
        path: "/assets/img/aanbod/plannen/architect/blokE_nivo1.jpg"
      }
    ],
    gardenSquareMeters: 6.5,
    unitType: "appartementEersteVerdiep"
  },
  28: {
    rooms: 3,
    price: "+/- € 247,658 (excl. BTW)",
    lot: 28,
    type: "Appartement +1",
    status: AVAILABLE,
    squareMeters: 102.3,
    images: [
      {
        name: "Blok E, niveau 1",
        path: "/assets/img/aanbod/plannen/architect/blokE_nivo1.jpg"
      }
    ],
    gardenSquareMeters: 8.2,
    unitType: "appartementEersteVerdiep"
  },
  29: {
    rooms: 2,
    price: "+/- € 257,368 (excl. BTW)",
    lot: 29,
    type: "Appartement +2",
    status: AVAILABLE,
    squareMeters: 89.7,
    images: [
      {
        name: "Blok E, niveau 2",
        path: "/assets/img/aanbod/plannen/architect/blokE_nivo2.jpg"
      }
    ],
    gardenSquareMeters: 18.6,
    unitType: "appartementTweedeVerdiep"
  },
  30: {
    rooms: 1,
    price: "+/- € 212,992 (excl. BTW)",
    lot: 30,
    type: "Appartement +2",
    status: AVAILABLE,
    squareMeters: 65.8,
    images: [
      {
        name: "Blok E, niveau 2",
        path: "/assets/img/aanbod/plannen/architect/blokE_nivo2.jpg"
      }
    ],
    gardenSquareMeters: 6.5,
    unitType: "appartementTweedeVerdiep"
  },
  31: {
    rooms: 2,
    price: "+/- € 230,675 (excl. BTW)",
    lot: 31,
    type: "Appartement +2",
    status: SOLD,
    squareMeters: 77.7,
    images: [
      {
        name: "Blok E, niveau 2",
        path: "/assets/img/aanbod/plannen/architect/blokE_nivo2.jpg"
      }
    ],
    gardenSquareMeters: 6.5,
    unitType: "appartementTweedeVerdiep"
  },
  32: {
    rooms: 2,
    price: "+/- € 247,039 (excl. BTW)",
    lot: 32,
    type: "Appartement +2",
    status: AVAILABLE,
    squareMeters: 91,
    images: [
      {
        name: "Blok E, niveau 2",
        path: "/assets/img/aanbod/plannen/architect/blokE_nivo2.jpg"
      }
    ],
    gardenSquareMeters: 8.3,
    unitType: "appartementTweedeVerdiep"
  },
  33: {
    rooms: 3,
    price: "+/- € 274,898 (excl. BTW)",
    lot: 33,
    type: "Appartement +3",
    status: AVAILABLE,
    squareMeters: 98.9,
    images: [
      {
        name: "Blok E, niveau 3",
        path: "/assets/img/aanbod/plannen/architect/blokE_nivo3.jpg"
      }
    ],
    gardenSquareMeters: 32,
    unitType: "appartementDerdeVerdiep"
  },
  34: {
    rooms: 1,
    price: "+/- € 250,168 (excl. BTW)",
    lot: 34,
    type: "Appartement +3",
    status: AVAILABLE,
    squareMeters: 91.9,
    images: [
      {
        name: "Blok E, niveau 3",
        path: "/assets/img/aanbod/plannen/architect/blokE_nivo3.jpg"
      }
    ],
    gardenSquareMeters: 6.1,
    unitType: "appartementDerdeVerdiep"
  },
  35: {
    price: "+/- € 220,351 (excl. BTW)",
    lot: 35,
    type: "Duplex +1 & +2",
    status: AVAILABLE,
    squareMeters: 77,
    image: "path/to/image",
    gardenSquareMeters: 5,
    unitType: "duplex"
  },
  36: {
    price: "+/- € 254,096 (excl. BTW)",
    lot: 36,
    type: "Duplex +1 & +2",
    status: SOLD,
    squareMeters: 97,
    image: "path/to/image",
    gardenSquareMeters: 5,
    unitType: "duplex"
  },
  37: {
    price: "+/- € 312,255 (excl. BTW)",
    lot: 37,
    type: "Duplex +1 & +2",
    status: SOLD,
    squareMeters: 125,
    image: "path/to/image",
    gardenSquareMeters: 12,
    unitType: "duplex"
  }
};
export default unitInfo;
