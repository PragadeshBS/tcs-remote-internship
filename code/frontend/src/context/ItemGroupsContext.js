import { createContext, useReducer } from "react";

export const ItemGroupsContext = createContext();

export const itemGroupsReducer = (state, action) => {
  switch (action.type) {
    case "SET_ITEM_GROUPS":
      return {
        itemGroups: action.payload,
      };
    case "CREATE_ITEM_GROUP":
      return {
        itemGroups: [action.payload, ...state.itemGroups],
      };
    default:
      return state;
  }
};

export const ItemGroupsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(itemGroupsReducer, {
    itemGroups: [],
  });
  return (
    <ItemGroupsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ItemGroupsContext.Provider>
  );
};
