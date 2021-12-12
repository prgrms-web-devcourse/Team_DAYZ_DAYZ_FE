export const getSessionStorageItem = (key: string, initialState: unknown) => {
  try {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : initialState;
  } catch (error) {
    return initialState;
  }
};

export const setSessionStorageItem = (key: string, value: unknown) => {
  try {
    sessionStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(error);
  }
};
