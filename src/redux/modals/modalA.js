import axios from "axios";
const GET_DATA = "modals/modalA/GET_DATA";
const LOADING = "modals/modalA/LOADING";
const ERROR = "modals/modalA/ERROR";
const DELETE = "modals/modalA/DELETE";

export const getData = (page = 1, query = "", reset = false) => async (
  dispatch
) => {
  dispatch({ type: LOADING });
  try {
    let res = (
      await axios.get("https://api.dev.pastorsline.com/api/contacts.json", {
        params: { companyId: 171, page, query },
      })
    ).data;
    if (reset) {
      dispatch({ type: DELETE });
    }

    return dispatch({
      type: GET_DATA,
      payload: { ...res, page },
    });
  } catch {
    dispatch({ type: ERROR });
  }
};

const initState = {
  error: false,
  loading: false,
  page: 1,
  contacts: {},
  contacts_ids: {},
  contactsArr: [],
  contacts_idsArr: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case ERROR:
      return { ...state, error: true };
    case LOADING:
      return { ...state, loading: true };
    case DELETE:
      return { ...initState };
    case GET_DATA:
      return {
        ...state,
        ...action.payload,
        contacts: { ...state.contacts, ...action.payload.contacts },
        contacts_ids: { ...state.contacts_ids, ...action.payload.contacts_ids },
        contactsArr: [
          ...Object.values(state.contacts),
          ...Object.values(action.payload.contacts),
        ],
        contacts_idsArr: [
          ...Object.values(state.contacts_ids),
          ...Object.values(action.payload.contacts_ids),
        ],
        loading: false,
        error: false,
      };
    default:
      return state;
  }
};
