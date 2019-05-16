<template>
  <Layout>
    <div class="bg-indigo-500 h-8 w-full">
      <div class="flex justify-center">
        <img class="h-4 text-center align-middle" src="../assets/svg/indigo-slate-white.svg" alt>
      </div>
    </div>
    <div class="my-16 w-5/6">
      <!-- <h1 class="mb-4">{{ msg }}</h1> -->
      <!-- eslint-disable-next-line -->
      <div class="border-4 round border-indigo-500 p-16">
        <h1
          class="text-center font-lazer tracking-wide text-5xl gradient-font mb-8"
        >Slatarian Snacks</h1>
        <h4
          class="text-indigo-500 text-center uppercase tracking-wide text-base"
        >Vote for your favorite snacks.</h4>
      </div>
    </div>

    <div v-for="edge in $page.snacks.edges" :key="edge.node.id">{{edge.node.title}}</div>

    <SnackCard 
      v-for="edge in $page.snacks.edges" 
      :key="edge.node.id" 
      :title="edge.node.title"
      :votes="edge.node.votes" 
      :image="edge.node.image"
      />

    <p class="home-links">
      <a href="https://gridsome.org/docs" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>
  </Layout>
</template>

<page-query>
query AllTheSnacks {
  snacks: allContentfulSnack {
    edges {
      node {
        title
        votes
        image {
          file {
            url
          }
        }
      }
    }
  }
}
</page-query>


<script>
import SnackCard from "@/components/SnackCard";

export default {
  metaInfo: {
    title: "Slatarian Snacks"
  },
  components: {
    SnackCard
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
