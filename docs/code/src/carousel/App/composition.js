import { ref, onUnmounted, onMounted } from 'vue'

const props = defineProps({
  slides: {
    type: Array,
    default: () => ([
      { image: 'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg', caption: 'Slide 1' },
      { image: 'http://c.hiphotos.baidu.com/image/pic/item/30adcbef76094b36de8a2fe5a1cc7cd98d109d99.jpg', caption: 'Slide 2' },
      { image: 'http://h.hiphotos.baidu.com/image/pic/item/7c1ed21b0ef41bd5f2c2a9e953da81cb39db3d1d.jpg', caption: 'Slide 3' }
    ])
  },
  interval: {
    type: Number,
    default: 3000
  }
})

const currentSlide = ref(0);
const slideWidth = ref(0);
let intervalId = null;

const goToSlide = (index) => {
  currentSlide.value = index;
  stopAutoPlay();
  startAutoPlay();
};

const startAutoPlay = () => {
  intervalId = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % props.slides.length;
  }, props.interval);
};

const stopAutoPlay = () => {
  clearInterval(intervalId);
};

onMounted(() => {
  slideWidth.value = document.querySelector('.carousel').offsetWidth;
  startAutoPlay();
});

onUnmounted(() => {
  stopAutoPlay();
});