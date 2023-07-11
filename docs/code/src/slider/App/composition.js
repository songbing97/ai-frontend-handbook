import { ref, onUnmounted, onMounted } from 'vue'
const pointer = ref(null);
const track = ref(null);
const value = ref(0)
const currentState = ref(0);
let fatherDom = {};

  
 const handleMouseUp = () => {
   window.removeEventListener('mousemove', handleMouseMove)
   
}

const handleMouseDown = (e) => {
  window.addEventListener('mouseup', handleMouseUp)
  window.addEventListener('mousemove', handleMouseMove)
}

const handleMouseMove = (e) => {
  console.log(e.x)
  currentState.value = e.x;
  let temp = Math.ceil(( 100 * currentState.value - fatherDom.x) / fatherDom.width)
  if (temp > 100) {
    temp = 100;
  } else if (temp < 0) {
    temp = 0;
  }
  value.value = temp;
}
onMounted(() => {
  pointer.value.addEventListener('mousedown', handleMouseDown)
  fatherDom = track.value.getBoundingClientRect();
})