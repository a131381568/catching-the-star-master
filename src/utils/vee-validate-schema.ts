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
  }
}