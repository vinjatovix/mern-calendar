import moment from "moment";
import { types } from "../types/types";

const initialState = {
  events: [
    {
      title: "Reunion",
      start: moment().toDate(),
      end: moment().add(2, "hours").toDate(),
      bgcolor: "#fafaaf",
      notes: "cualquier cosa",
      user: {
        _id: "12",
        name: "pepe",
      },
    },
  ],
  activeEvent: null,
};

export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.eventSetActive:
      return {
        ...state,
        activeEvent: action.payload,
      };
    default:
      return state;
  }
};
