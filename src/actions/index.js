export const selectStation = (station) => {
  return {
    type: 'SELECT',
    payload: station,
  };
};
