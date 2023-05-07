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
      loader: () => import('./ExampleRepl.vue'),
    })
  }
}
</script>

<ClientOnly>
  <ExampleRepl />
</ClientOnly>
