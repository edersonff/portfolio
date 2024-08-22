import { useEffect, useState } from "react";
import { UseBoundStore } from "zustand";

export const useSSRStore = (store: UseBoundStore<any>) => {
  const [_store, setStore] = useState<UseBoundStore<any>>();

  useEffect(() => {
    setStore(store);
  }, [store]);

  let defaultStore = undefined;

  if (Array.isArray(store)) {
    defaultStore = [];
  }

  return _store || defaultStore;
};
