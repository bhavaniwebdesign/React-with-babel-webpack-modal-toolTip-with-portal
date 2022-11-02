import React from "react";
import classNames from "classnames/bind";
import styles from "./modal.css";
const cx = classNames.bind(styles);
const Modal = ({ show, closeModal }) => {
  if (!show) return null;
  return (
    <div className={cx({ modal: true })}>
      <div className={cx({ overlay: true })} onClick={closeModal}></div>
      <div className={cx({ contentModel: true })}>
        <header>
          <h2 className={cx({ title: true })}>
            WHAT’S YOUR PROPERTY WORTH? REQUEST AN APPRAISAL
          </h2>
        </header>
        <div className={cx({ content: true })}>
          Driving the neighbourhood during this Halloween's spooky season is
          spectacular with all the decorations! However, don't be scared by the
          local Real Estate market, as we are here to help with all your
          property needs!
        </div>
        <div className={cx({ align: true })}>
          <button className={cx({ button: true })} onClick={closeModal}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
