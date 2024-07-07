import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export const formatDate = (date, format = 'DD-MM-YYYY') => {
    if (!date) return "";
    return dayjs(date).format(format);
};


export const prettyDate = (time) => {
    return dayjs(time).fromNow();
};
