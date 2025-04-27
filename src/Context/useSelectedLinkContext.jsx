import { useContext } from "react";
import { SelectedLinkContext } from "../Provider/SelectedLinkProvider/SelectedLinkProvider";

const useSelectedLinkContext = () => {
  return useContext(SelectedLinkContext);
};

export default useSelectedLinkContext;
