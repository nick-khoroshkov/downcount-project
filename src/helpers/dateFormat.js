import moment from "moment";

const region = "GMT";
// const dateTimeFormat = "YYYY-M-D H:m a";
const dateTimeFormat = "YYYY-M-D HH:mm:ss";

//2021-02-28 08:05:00

export default function dateFormat(str) {
  // const dateArray = str.split("");

  // const timeAmPm = dateArray.slice(Math.max(dateArray.length - 2, 0)).join("");

  // const years = dateArray.slice(0, 4).join("");
  // const month = dateArray.slice(4, 6).join("");
  // const days = dateArray.slice(6, 8).join("");

  // const hours = dateArray.slice(8, 10).join("");
  // const minutes = dateArray.slice(10, 12).join("");

  // let date = moment
  //   .tz(
  //     `${years}-${month}-${days}:${hours}:${minutes}:${timeAmPm}`,
  //     dateTimeFormat,
  //     region
  //   )
  //   .format();

  let date = moment.tz(str, dateTimeFormat, region).format();
  return date;
}
