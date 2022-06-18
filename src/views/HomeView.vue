<template>
  <header>
    <div class="content">
      <p class="title">
        Hi, I'm Mahi
      </p>
      <div class="cta">
        <a class="btn" href="#work">Nice to meet you!</a>
      </div>
    </div>
  </header>
  <main>
    <section id="work">
      <h1>My Work</h1>
      <div class="gallery">
        <div @click="openProject(project.id)" class="project" v-for="project in projects" :key="project.id">
          <div class="image" :style="{backgroundImage: `url('/projects/${project.id}/${project.heroImage}')`}"></div>
          <div class="title">{{ project.title }}</div>
        </div>
      </div>
    </section>
  </main>
  <footer>
    Footer
  </footer>
</template>

<script>
import {projects} from '@/config';
export default {
  name: 'HomeView',
  components: {},
  methods:{
    openProject(projectId){
      this.$router.push({
        name: 'project',
        params:{
          projectId
        }
      })
    }
  },
  computed: {
    projects() {
      return projects;
    }
  }
};
</script>

<style lang="scss">


</style>
