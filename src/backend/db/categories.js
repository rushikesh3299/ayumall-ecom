import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Avaleha",
    description:
      "Avaleha or Lehya is a semi-solid preparation of drugs, prepared with addition of jaggery, sugar or sugar-candy and boiled with prescribed juices or decoction.",
  },
  {
    _id: uuid(),
    categoryName: "Rasayana",
    description:
      "Rasayana is an Ayurvedic tonic which helps in maintenance & promotion of health. Rasayana essentially means nutrition at all levels from macro to micro-cellular level.",
  },
  {
    _id: uuid(),
    categoryName: "Churna",
    description:
      "Churna is a mixture of powdered herbs and or minerals used in Ayurvedic medicine. A churna can contain one or fixed quantity mixture of more herbs.",
  },
  {
    _id: uuid(),
    categoryName: "Vati",
    description:
      "Vati can also be called as ayurvedic pill or tablet. Vati is prepared from various herbs or minerals binded together with binders & exceptors in the form of tablets.",
  },
  {
    _id: uuid(),
    categoryName: "Taila",
    description:
      "Ayurvedic oil is essentially formulated by infusing powerful healing herbs with a carrier oil like sesame oil, coconut oil, almond oil & mustard oil etc.",
  },
];
