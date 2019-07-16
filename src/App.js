import React from "react";
import DesktopView from "./DesktopView/DesktopView";
import Footer from "./DesktopView/Footer/Footer";

const App = () => {
  return (
    <div>
      <DesktopView />
      <Footer />
      {/* <div className="pdf-print-view">
        Print Resume PDF - by Clicking the Button at the Top Left. Thanks!
      </div> */}
    </div>
  );
};

export default App;
