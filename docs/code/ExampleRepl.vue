<script setup lang="ts">
import { Repl, ReplStore } from '@vue/repl'
import '@vue/repl/style.css'
import { data } from './examples.data'
import * as A from './examples.data'
import { watchEffect, version, onMounted, ref } from 'vue'
import {
  onHashChange,
  resolveSFCExample
} from './utils'

const store = new ReplStore({
  defaultVueRuntimeURL: `https://unpkg.com/vue@${version}/dist/vue.esm-browser.js`
})


watchEffect(updateExample)
onHashChange(updateExample)

function updateExample() {
  let hash = location.hash.slice(1)
  if (!data.hasOwnProperty(hash)) {
    hash = 'even'
    location.hash = `#${hash}`
  }
  store.setFiles(resolveSFCExample(data[hash], true))
}

const heightProvider = ref<HTMLDivElement>()
onMounted(() => {
  const set = () => {
    heightProvider.value!.style.setProperty(
      '--vh',
      window.innerHeight + 'px'
    )
  }
  set()
  window.addEventListener('resize', set)
})
</script>

<template>
  <div ref="heightProvider">
    <Repl :showCompileOutput="false" :store="store"
      :clearConsole="false" />
  </div>
</template>

<style>
.VPDoc.has-sidebar {
  padding: 0px;
}
.VPDoc.has-sidebar .content {
  padding: 0px;
}
:root {
  --vt-nav-height: 65px;
  --vp-home-hero-name-color: none;
  --vp-home-hero-name-background: none;
}
.vue-repl {
  max-width: 1105px;
  border-right: 1px solid var(--vt-c-divider-light);
  height: calc(
    var(--vh, 0px) - var(--vt-nav-height)
  );
}

@media (max-width: 960px) {
  .vue-repl {
    border: none;
    height: calc(
      var(--vh, 0px) - var(--vt-nav-height) - 48px
    );
  }
}

@media (min-width: 960px) {
  .VPNavBar.has-sidebar .curtain::before {
    height: 0px !important;
  }
  .VPNavBar.has-sidebar .curtain {
    height: 0px !important;
  }
}

.VPNavBar.has-sidebar .curtain::before {
  background: none !important;
}
</style>
