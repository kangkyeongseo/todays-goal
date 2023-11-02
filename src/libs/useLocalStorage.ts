import { useState } from "react";

interface useLocalStorageProp {
  key: string;
}

function useLocalStorage({ key }: useLocalStorageProp) {
  const setLocalStorage = (data: any) => {
    localStorage.setItem(key, JSON.stringify(data));
  };
  return { setLocalStorage };
}

export default useLocalStorage;
