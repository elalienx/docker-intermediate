/**
 *
 * @param {string} UTCDate
 * @returns {string}
 */
export default function friendlyData(UTCDate) {
  return new Date(UTCDate).toLocaleDateString("en-gb", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
