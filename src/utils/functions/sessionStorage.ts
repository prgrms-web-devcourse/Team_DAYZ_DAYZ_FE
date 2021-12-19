export const getSessionStorageItem = (key: string | undefined, initialState: string): string => {
  try {
    const item = sessionStorage.getItem(key ?? '');
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

export const removeSessionStorageItem = (key: string) => {
  try {
    sessionStorage.removeItem(key);
  } catch (error) {
    console.error(error);
  }
};
