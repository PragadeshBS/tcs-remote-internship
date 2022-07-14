import { useContext } from "react";
import { ItemGroupsContext } from "../context/ItemGroupsContext";

export const useItemGroupsContext = () => {
  const context = useContext(ItemGroupsContext);
  if (!context) {
    throw Error("incorrect usage of context");
  }
  return context;
};
