javascript: (function () {
  const discourseDomain = 'forum.kintone.dev';
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  const todayDate = new Date();
  const firstDayPrevMonth = new Date(todayDate.getFullYear(), todayDate.getMonth() - 1, 1);
  const lastDayPrevMonth = new Date(todayDate.getFullYear(), todayDate.getMonth(), 0);
  const startDate = formatDate(firstDayPrevMonth);
  const endDate = formatDate(lastDayPrevMonth);
  const url = `https://${discourseDomain}/admin/reports/signups?end_date=${endDate}&mode=table&start_date=${startDate}`;
  console.log(url);
  window.open(url, '_blank');
})();
