import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router";

export const SelectedLinkContext = createContext(null);
const SelectedLinkProvider = ({ children }) => {
  const location = useLocation();
  const [selectedLink, setSelectedLink] = useState(
    localStorage.getItem("selectedLink") || location.pathname
  );

  useEffect(() => {
    setSelectedLink(location.pathname);
    localStorage.setItem("selectedLink", location.pathname);
  }, [location.pathname]);

  const AllContent = {
    selectedLink,
  };
  return (
    <SelectedLinkContext.Provider value={AllContent}>
      {children}
    </SelectedLinkContext.Provider>
  );
};

export default SelectedLinkProvider;
