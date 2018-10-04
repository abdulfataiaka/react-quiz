export const random = maximum => (
  maximum <= 0
    ? 0 : Math.floor(Math.random() * maximum) + 1
);

export default { random };
