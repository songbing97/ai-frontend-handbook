import { ref, onMounted } from 'vue';

function getChildren(element) {
  return element.querySelectorAll('*');
}

// Test
const myElement = ref(null);
const children = ref(null);
onMounted(() => {
  children.value = getChildren(myElement.value);
  console.log(children.value); // 输出一个类数组对象，包含元素的所有子元素
});
