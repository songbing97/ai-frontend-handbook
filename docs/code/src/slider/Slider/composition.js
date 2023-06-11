import { ref, onUnmounted, onMounted, watchEffect } from 'vue'

// const props = defineProps({
//   value: {
//     type: Number,
//     default: 0
//   }
// })

// const emit = defineEmits(['update:modelValue'])

// let isDragging = false;
// let startX = 0;

// const thumbPosition = ref(0);
// const width = ref(0);
// const slider = ref(null);
// const maxLength = ref(0);


// const setMaxLength = () => {
//   maxLength.value = slider.value.clientWidth;
// }
// onMounted(() => {
//   setMaxLength();
//   document.addEventListener('resize', setMaxLength);
// })

// const startDrag = (event) => {
//   event.preventDefault();
//   isDragging = true;
//   startX = event.pageX || event.touches[0].pageX;
//   document.addEventListener('mousemove', handleDrag);
//   document.addEventListener('touchmove', handleDrag);
//   document.addEventListener('mouseup', stopDrag);
//   document.addEventListener('touchend', stopDrag);
// };

// const handleDrag = (event) => {
//   if (!isDragging) return;
//   const x = event.pageX || event.touches[0].pageX;
//   const diff = x - startX;
//   const thumbWidth = thumbPosition.value + diff;

//   if (thumbWidth > 0) {
//     thumbPosition.value = thumbWidth;
//     startX = x;
//     const percentage = Math.ceil(thumbWidth / maxLength.value * 100);
//     emit('update:modelValue', percentage);
//   }
// };

// const stopDrag = () => {
//   isDragging = false;
//   document.removeEventListener('mousemove', handleDrag);
//   document.removeEventListener('touchmove', handleDrag);
//   document.removeEventListener('mouseup', stopDrag);
//   document.removeEventListener('touchend', stopDrag);
// };

// watchEffect(() => {
//   thumbPosition.value = Math.max(0, props.value / 100 * maxLength.value);
//   width.value = thumbPosition.value - 10;
// });

// onUnmounted(() => {
//   stopDrag();
//   document.removeEventListener('resize', setMaxLength);
// });