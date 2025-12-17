import { atom } from 'jotai';

export const dataAtom = atom([
  { id: 1, name: 'Ali', age: 20, status: true },
  { id: 2, name: 'Ahmad', age: 25, status: false },
  { id: 3, name: 'John', age: 30, status: true },
]);

export const deleteUserAtom = atom(
  null,
  (get, set, id) => {
    set(dataAtom, (prev) => prev.filter((item) => item.id !== id));
  }
);

export const addUserAtom = atom(
  null,
  (get, set, newUser) => {
    set(dataAtom, (prev) => [
      ...prev,
      {
        id: Date.now(),
        ...newUser,
      },
    ]);
  }
);

export const editUserAtom = atom(
  null,
  (get, set, updatedUser) => {
    set(dataAtom, (prev) =>
      prev.map((item) => (item.id === updatedUser.id ? updatedUser : item))
    );
  }
);