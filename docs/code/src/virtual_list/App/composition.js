import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    default: () => Array.from({ length: 100 }, (_, i) => ({
      id: i,
      text: `Item ${i + 1}`
    }))
  },
  itemHeight: {
    type: Number,
    default: 20
  }
})

const container = ref(null)
const scrollTop = ref(0)
const visibleCount = ref(0);

const totalHeight = computed(() => props.items.length * props.itemHeight)
const start = computed(() => Math.floor(scrollTop.value / props.itemHeight))
const offset = computed(() => start.value * props.itemHeight)
const visibleItems = computed(() => props.items.slice(start.value, start.value + visibleCount.value))

const onScroll = () => {
  scrollTop.value = container.value.scrollTop
}

onMounted(() => {
  visibleCount.value = Math.ceil(container.value.clientHeight / props.itemHeight);
  scrollTop.value = container.value.scrollTop
})
