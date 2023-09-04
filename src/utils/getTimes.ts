export default () => {
  const hours = new Date().getHours();
  return hours <= 9
    ? '上午'
    : hours <= 12
    ? '中午'
    : hours <= 18
    ? '下午'
    : '晚上';
};
