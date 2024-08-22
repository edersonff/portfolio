import { useEffect, useState } from "react";
import { UseBoundStore } from "zustand";

export const useSSRStore = (store: UseBoundStore<any>) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  let defaultStore = undefined;

  if (Array.isArray(store)) {
    defaultStore = [];
  }

  if (!ready) {
    return defaultStore;
  }

  return store;
};
