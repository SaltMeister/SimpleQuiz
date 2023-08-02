export const increment = () => {
  return {
    type: 'INCREMENT'
  };
};
export const decrement = () => {
  return {
    type: 'DECREMENT'
  };
};

export const reset = () => {
  return {
    type: 'RESET'
  };
};

export const set = (index) => {
  return {
    type: 'SET',
    payload: index
  }
}
export const clear = () => {
  return {
    type: 'CLEAR'
  }
}