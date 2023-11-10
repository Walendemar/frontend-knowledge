// eslint-disable-next-line import/no-extraneous-dependencies
import { create } from "zustand";

type Person = {
  id: number;
  name: string;
};

type Store = {
  leftBoxPerson: Person[];
  rightBoxPerson: Person[];
  movePersonRight: (id: number) => void;
  movePersonLeft: (id: number) => void;
};

const useStore = create<Store>((set) => ({
  leftBoxPerson: [
    { id: 1, name: "Павел" },
    { id: 2, name: "Андрей" },
    { id: 3, name: "Антон" },
    { id: 4, name: "Алексей" },
    { id: 5, name: "Артем" },
    { id: 6, name: "Владимир" },
    { id: 7, name: "Дмитрий" },
    { id: 8, name: "Александр" },
    { id: 9, name: "Сергей" },
    { id: 10, name: "Георгий" },
    { id: 11, name: "Григорий" },
    { id: 12, name: "Анна" },
    { id: 13, name: "Анастасия" },
  ],
  rightBoxPerson: [],
  movePersonRight: (id) =>
    set((state) => {
      const movingPerson = state.leftBoxPerson.find(
        (person) => person.id === id
      );
      const updatedLeftBoxPerson = state.leftBoxPerson.filter(
        (person) => person.id !== id
      );

      return {
        leftBoxPerson: updatedLeftBoxPerson,
        rightBoxPerson: [...state.rightBoxPerson, movingPerson],
      };
    }),
  movePersonLeft: (id) =>
    set((state) => {
      const movingPerson = state.rightBoxPerson.find(
        (person) => person.id === id
      );
      const updatedRightBoxPerson = state.rightBoxPerson.filter(
        (person) => person.id !== id
      );

      return {
        leftBoxPerson: [...state.leftBoxPerson, movingPerson],
        rightBoxPerson: updatedRightBoxPerson,
      };
    }),
}));

export default useStore;
