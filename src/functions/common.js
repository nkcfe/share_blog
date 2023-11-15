export const getToday = () => {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // month는 0부터 시작하기 때문에 +1
  const day = String(today.getDate()).padStart(2, "0"); // padStart()는 문자열에 자릿수 만큼 0 채울수 있음.

  const formattedDate = `${year}.${month}.${day}`;
  return formattedDate;
};
