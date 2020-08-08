import { createSelector } from "reselect";
import { v4 as uuidv4 } from "uuid";

const getContacts = (state) => state.contactsArr;
const even = (state) => state.even;

export const getAllContactsA = createSelector(
  getContacts,
  even,
  (contacts, even) => {
    const arr = contacts.map((v) => {
      return { ...v, key: uuidv4() };
    });
    if (even) {
      return arr.filter((v, i) => v.id % 2 === 0);
    }
    return arr;
  }
);

export const getAllContactsB = createSelector(
  getContacts,
  even,
  (contacts, even) => {
    const arr = contacts.map((v) => {
      return { ...v, key: uuidv4() };
    });
    if (even) {
      return arr.filter((v, i) => v.id % 2 === 0);
    }
    return arr;
  }
);
