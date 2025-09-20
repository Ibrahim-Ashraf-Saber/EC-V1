export const loadState = (key) => {
  try {
    const state = localStorage.getItem(key);
    if (state === null) return undefined;
    return JSON.parse(state);
  } catch (err) {
    console.error("Failed to load state from localStorage", err);
    return undefined;
  }
};

export const saveState = (key, state) => {
  try {
    localStorage.setItem(key, JSON.stringify(state));
  } catch (err) {
    console.error("Failed to save state to localStorage", err);
  }
};
