import { ref, onMounted } from 'vue';

function addClass(element, className) {
  element.classList.add(className);
}

const myElement = ref(null);

// Test
onMounted(() => {
  addClass(myElement.value, 'myClass');
  addClass(myElement.value, 'myClass2');
  console.log(myElement.value.className); // 输出 'myClass myClass2'
})
