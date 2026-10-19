import { onMounted, onUnmounted, watch, type Ref } from 'vue'
import { Page, type Container } from './page'

export function useSizing(state: Ref<Container>) {
  function updateWidth() {
    switch (state.value.currentPage) {
    case Page.Explorer:
      state.value.width = window.innerWidth > 450 ? 50 : 65
    break;
    case Page.Info:
      state.value.width = window.innerWidth > 1100 ? 40 : 70
    break;
    case Page.Projects:
      state.value.width = window.innerWidth > 700 ? 50 : 80
    break;
    case Page.Blog:
      state.value.width = window.innerWidth > 950 ? 45 : 75
    break;
    }
  }

  function updateWidthBlog() {
    if (state.value.blogs === null) return;

    if (state.value.blogs.current !== null) {
      state.value.width = window.innerWidth > 950 ? 50 : 85
    } else {
      state.value.width = window.innerWidth > 950 ? 45 : 75
    }
  }

  watch(() => state.value.currentPage, updateWidth, { immediate: true })
  watch(() => state.value.blogs?.current, updateWidthBlog, { immediate: true })

  onMounted(() => {
    updateWidth()
    window.addEventListener('resize', updateWidth)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateWidth)
  })
}

