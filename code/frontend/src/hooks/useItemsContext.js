import { useContext } from "react";
import { ItemsContext } from "../context/ItemsContext";

export const useItemsContext = () => {
  const context = useContext(ItemsContext);
  if (!context) {
    throw Error("incorrect usage of context");
  }
  return context;
};
