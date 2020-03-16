// 过滤器
export default {
    // 转大写
    upper: function(value) {
        return value.toUpperCase();
    },
    // 转小写
    lower: function(value) {
        return value.toLowerCase();
    },
    // 时间格式化
    formatCustomDate2: function(cDate, hasMesc = 0) {
        try {
            cDate += "";
            if (cDate.length !== 17 || isNaN(cDate)) {
                //
                return "";
            }
            var year = cDate.substring(0, 4); // 年
            var mon = cDate.substring(4, 6); // 月
            var day = cDate.substring(6, 8); // 日
            var hour = cDate.substring(8, 10); // 时
            var min = cDate.substring(10, 12); // 分
            var sec = cDate.substring(12, 14); // 秒
            var mesc = cDate.substring(14, 17); // 毫秒

            if (
                parseInt(mon) < 1 ||
                parseInt(mon) > 12 ||
                parseInt(day) < 1 ||
                parseInt(day) > 31 ||
                parseInt(hour) > 23 ||
                parseInt(min) > 60 ||
                parseInt(sec) > 60
            ) {
                return "";
            }
            if (hasMesc == 1) {
                // hasMesc == 1代表需要返回毫秒
                return (
                    year +
                    "-" +
                    mon +
                    "-" +
                    day +
                    " " +
                    hour +
                    ":" +
                    min +
                    ":" +
                    sec +
                    ":" +
                    mesc
                );
            }
            return year + "-" + mon + "-" + day + " " + hour + ":" + min + ":" + sec;
        } catch (e) {
            return "";
        }
    },
};