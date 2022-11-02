/* @flow */
import * as React from "react";

import classNames from "classnames/bind";
import styles from "@coviu-team/uikit/styles/portal";
import * as ReactDOM from "react-dom";

const cx = classNames.bind(styles);

type Props = {
  container?: HTMLElement,
  children: React.Node,
  opened?: boolean,
  dontPreventScroll?: boolean
};

const Portal = React.forwardRef((props, ref) => {
  const { container, children } = props;

  return ReactDOM.createPortal(
    <div className={cx("portal")} ref={ref}>
      {children}
    </div>,
    container || document.body
  );
});

Portal.displayName = "Portal";

export default Portal;
export { Portal };
