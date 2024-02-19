import { useState, useEffect } from "react";

/** A custom hook for syncing state w/ localStorage */
export default function useLocalStorage(key: string, initialValue: any = null) {

  const initialValueFromLocalStorage = localStorage.getItem(key) || initialValue;

  const [value, setValue] = useState(initialValueFromLocalStorage);

  useEffect(function setKeyInLocalStorage() {
    if (value === null) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, value);
    }
  }, [key, value]);

  return [value, setValue];
}