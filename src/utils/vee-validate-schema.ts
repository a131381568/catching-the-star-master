export default {
  required(value: string) {
    if (!value) return '此欄位必填'
    return true
  },
  password(value: string) {
    if (!value) return '請輸入密碼'
    if (!/^\w{6,24}$/.test(value)) return '密碼為6-24個字符'
    return true
  },
  email(value: string) {
    let pattern = /^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/;

    if (!value) {
      return '請輸入信箱'
    }
    if (!pattern.test(value)) {
      return '請輸入信箱格式'
    }
    return true
  },
  image(value: string) {
    if (!value) return '請上傳圖片'
    return true
  },
  latreg(value: number) {
    const rule = /^-?((0|1?[0-7]?[0-9]?)(([.][0-9]{1,15})?)|180(([.][0]{1,15})?))$/;
    if (!value) {
      return '請輸入緯度'
    }
    if (!rule.test(String(value))) {
      return '請輸入緯度格式'
    }
    return true
  },
  longrg(value: number) {
    const rule = /^(\-|\+)?(((\d|[1-9]\d|1[0-7]\d|0{1,3})\.\d{0,15})|(\d|[1-9]\d|1[0-7]\d|0{1,3})|180\.0{0,15}|180)$/;
    if (!value) {
      return '請輸入經度'
    }
    if (!rule.test(String(value))) {
      return '請輸入經度格式'
    }
    return true
  }
}