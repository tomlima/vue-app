<template>
   <main>
    <TheHeader />
    <ArticleList />
  </main>
</template>

<script>
import TheHeader from "../src/components/TheHeader.vue"
import ArticleList from "../src/components/ArticleList.vue"

export default {
  name: 'App',
  components: {
    ArticleList,
    TheHeader
  }
}
</script>

