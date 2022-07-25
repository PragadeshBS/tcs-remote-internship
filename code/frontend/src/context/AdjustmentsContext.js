import { createContext, useReducer } from "react";

export const AdjustmentsContext = createContext();

const adjustmentsReducer = (state, action) => {
  switch (action.type) {
    case "SET_ADJUSTMENTS":
      return {
        adjustments: action.payload,
      };
    case "ADD_ADJUSTMENT":
      return {
        adjustments: [action.payload, ...state.adjustments],
      };
    default:
      return state;
  }
};

export const AdjustmentsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(adjustmentsReducer, {
    adjustments: null,
  });
  return (
    <AdjustmentsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AdjustmentsContext.Provider>
  );
};
