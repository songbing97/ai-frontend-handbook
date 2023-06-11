export default {
  setup() {
    function isEven (number) {
      return number % 2 === 0;
    }

    const result = isEven(2)

    return {
      result
    }
  }
}
