---
title: Code
aside: false
footer: false
outline: false
editLink: false
prev: false
next: false
page: true
---

<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    ExampleRepl: defineAsyncComponent({
      loader: () => import('/code/ExampleRepl.vue'),
    })
  }
}
</script>

<ClientOnly>
  <ExampleRepl />
</ClientOnly>

<style>
.VPNavBar .curtain {
	height: 0px !important;
}
</style>
