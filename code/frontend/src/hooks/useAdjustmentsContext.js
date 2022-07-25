import { useContext } from "react";
import { AdjustmentsContext } from "../context/AdjustmentsContext";

export const useAdjustmentsContext = () => {
  const context = useContext(AdjustmentsContext);
  if (!context) {
    throw Error("incorrect usage of context");
  }
  return context;
};
