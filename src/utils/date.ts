export function dateFormat (date: Date, format = 'YYYY-MM-DD HH:mm:ss') {
  date = new Date(date);
  const config: any = {
    YYYY: date.getFullYear(),
    MM: date.getMonth() + 1,
    DD: date.getDate(),
    HH: date.getHours(),
    mm: date.getMinutes(),
    ss: date.getSeconds(),
  }
  for(const key in config) {
    format = format.replace(key, config[key]);
  }
  return format;
}
