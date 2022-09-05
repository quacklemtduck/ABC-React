import React, { useState } from "react";
import styles from "./PopupInfo.module.css";

var showPopup;
var setShowPopup;

var content = (
  <div>
    <h1>hello</h1>
  </div>
);
var setContent;

export function ShowPopup(newContent) {
    setShowPopup(false);
  setContent(newContent);
  setShowPopup(true);
}

export function HidePopup() {
  setShowPopup(false);
}

export function PopupInfoOverlay() {
  [showPopup, setShowPopup] = useState(false);
  [content, setContent] = useState(
    <div>
      <h1>hello</h1>
    </div>
  );

  return (
    <div>
      {showPopup ? (
        <div className={styles.container}>
          <div className={styles.backdrop} onClick={HidePopup}></div>
          <div className={styles.box}>
            {content}
            <button onClick={HidePopup} className={styles.closeButton}>Close</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
