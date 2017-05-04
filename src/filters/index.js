export function DateFormat(time,q){
  
  let _this = new Date(time);
  var s = {
      "M+": _this.getMonth() + 1,
      "d+": _this.getDate(),
      "h+": _this.getHours(),
      "m+": _this.getMinutes(),
      "s+": _this.getSeconds(),
      "q+": Math.floor((_this.getMonth() + 3) / 3),
      S: _this.getMilliseconds()
  };
  if (/(y+)/.test(q)) {
      q = q.replace(RegExp.$1, (_this.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var r in s) {
      if (new RegExp("(" + r + ")").test(q)) {
          q = q.replace(RegExp.$1, RegExp.$1.length == 1 ? s[r] : ("00" + s[r]).substr(("" + s[r]).length))
      }
  }
  return q;
}
