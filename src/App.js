import React, { useState } from "react";
import Modal from "./components/Modal";
import styles from "./styles.css";
import className from "classnames";
import Portal from "./components/Portal";
import ToolTip from "./components/ToolTip";
import Button from "./components/Button";
import { getPortalElement } from "./utils/getElement";
const cx = className.bind(styles);

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className={cx({ App: true })}>
      <h3>React with babel & webpack(Modal-ToolTip-with-portal)</h3>
      <h2>Click to open Modal</h2>
      <button onClick={() => setShow((s) => !s)}>Open Modal</button>
      <Portal>
        <Modal show={show} closeModal={() => setShow(false)} />
      </Portal>
      <h3>Tooltip with portal</h3>

      <ToolTip element={<Button />} />
      <div id="portal-root"></div>
    </div>
  );
}
export default App;
