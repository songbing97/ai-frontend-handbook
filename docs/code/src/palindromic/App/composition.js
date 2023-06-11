export default {
  setup() {
    function isPalindrome(str) {
      var originalStr = str.toLowerCase().replace(/[\W_]/g, '');
      var reverseStr = originalStr.split('').reverse().join('');
      return originalStr === reverseStr;
    }

    const result0 = isPalindrome("A man, a plan, a canal: Panama");
    const result1 = isPalindrome("OpenAI");

    console.log(result0); // 输出：true
    console.log(result1); // 输出：false

    // return {
    //   result0,
    //   result1
    // }
  }
}
