import { useState } from "react";
import styles from "./Todo.module.css";

export function Todo() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const [error, setError] = useState("");

  function clearError() {
    setError("");
  }

  function onInputButtonClick() {
    clearError();
    const promptValue = prompt();
    if (promptValue === null) {
      return;
    }
    if (promptValue.length < 3) {
      setError("Введенное значение должно содержать минимум 3 символа");
    } else {
      setValue(promptValue);
    }
  }

  function onAddButtonClick() {
    setList([...list, value]);
    setValue("");
    setError("");
  }

  return (
    <div className={styles.app}>
      <h1 className={styles.pageHeading}>Ввод значения</h1>
      <p className={styles.noMarginText}>
        Текущее значение <code>value</code>: "
        <output className={styles.currentValue}>{value}</output>"
      </p>
      <div className={styles.error}>{error}</div>
      <div className={styles.buttonsContainer}>
        <button
          className={styles.button}
          onClick={() => {
            onInputButtonClick();
          }}
        >
          Ввести новое
        </button>
        <button
          className={styles.button}
          disabled={!value}
          onClick={() => {
            onAddButtonClick();
          }}
        >
          Добавить в список
        </button>
      </div>
      <div className={styles.listContainer}>
        <h2 className={styles.listHeading}>Список:</h2>
        {list.length === 0 && (
          <p className={styles.noMarginText}>Нет добавленных элементов</p>
        )}
        <ul className={styles.list}>
          {list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
