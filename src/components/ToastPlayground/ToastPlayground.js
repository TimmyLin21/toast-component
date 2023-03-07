import React from "react";

import Button from "../Button";
import RadioButton from "../RadioButton/RadioButton";
import ToastShelf from "../ToastShelf/ToastShelf";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [list, setList] = React.useState([]);
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);

  function handleSubmit(e) {
    e.preventDefault();

    const nextList = [...list, { message, variant, id: crypto.randomUUID() }];
    setMessage("");
    setVariant(VARIANT_OPTIONS[0]);
    setList(nextList);
  }

  function dismissToast(id) {
    const nextList = list.filter((item) => item.id !== id);
    setList(nextList);
  }

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf list={list} dismissToast={dismissToast} />

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              required
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option) => (
              <RadioButton
                key={option}
                option={option}
                group="variant"
                onChange={(e) => setVariant(e.target.value)}
                checked={variant === option}
              />
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ToastPlayground;
