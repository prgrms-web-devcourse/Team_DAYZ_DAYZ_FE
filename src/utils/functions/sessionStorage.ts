export const getSessionStorageItem = (key: string | undefined, initialState: unknown) => {
  try {
    const item = sessionStorage.getItem(key as string);
    return item ? JSON.parse(item) : initialState;
  } catch (error) {
    return initialState;
  }
};

export const setSessionStorageItem = (key: string | undefined, value: unknown) => {
  try {
    sessionStorage.setItem(key as string, JSON.stringify(value));
  } catch (error) {
    console.error(error);
  }
};
