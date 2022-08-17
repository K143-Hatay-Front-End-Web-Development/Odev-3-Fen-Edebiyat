/*
 * Fetches stats from Locale Storage
 *
 */
const getStatsFromLS = () => {
  const stats = localStorage.getItem("stats");
  if (stats) {
    return JSON.parse(localStorage.getItem("stats"));
  }
  return null;
};

export default getStatsFromLS;
