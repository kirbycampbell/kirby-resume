import React from "react";
import { unstable_useMediaQuery as useMediaQuery } from "@material-ui/core/useMediaQuery";
import PhoneView from "./PhoneView/PhoneView";
import DesktopView from "./DesktopView/DesktopView";

const App = () => {
  const phoneScreen = useMediaQuery("(max-width:900px)");
  const DesktopScreen = useMediaQuery("(min-width:900px");

  if (phoneScreen) {
    return <PhoneView />;
  } else if (DesktopScreen && !phoneScreen) {
    return <DesktopView />;
  } else {
    return <div>Loading...</div>;
  }
};

export default App;
