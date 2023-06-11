import { ref } from 'vue'

const display = ref('')
const append = (value) => { display.value += value }

const clear = () => { display.value = '' }

const calculate = () => {
  try {
    display.value = eval(display.value)
  } catch {
    clear()
    alert('Invalid input')
  }
}