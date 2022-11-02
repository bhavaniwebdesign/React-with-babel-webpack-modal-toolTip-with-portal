import React from "react";
import Portal from "./Portal";
import { useState, useRef } from "react";

import classNames from "classnames/bind";
import styles from "./toolTip.css";
const cx = classNames.bind(styles);

const ToolTip = ({ element, container }) => {
  const [show, setShow] = useState(false);
  const ref = useRef();
  const clonedElememt = React.cloneElement(element, {
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    ref
  });
  const className_ = cx({
    tooltip: true,
    show
  });

  return (
    <>
      {clonedElememt}
      {show && (
        <Portal container={container}>
          <div className={className_}>
            <p>show is something</p>
          </div>
        </Portal>
      )}
    </>
  );
};
export default ToolTip;
