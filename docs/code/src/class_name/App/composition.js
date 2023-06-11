import { ref, onMounted } from 'vue';

const myElement = ref(null);
function hasClass(element, className) {
  return element.classList.contains(className);
}

const hasClassResult = ref(false);

onMounted(() => {
  console.log(myElement)
  hasClassResult.value = hasClass(myElement.value, 'myClass');
  console.log(hasClassResult); // 输出 true 或者 false，表示元素是否含有该CSS类名
})
