export const formatDate = (date: string) => {
  const day = date.split("/")[0];
  const month = date.split("/")[1];
  const year = date.split("/")[2];

  const newDateFormatted = new Date(year + "-" + ("0" + month).slice(-2) + "-" + ("0" + day).slice(-2));

  return newDateFormatted;
};
