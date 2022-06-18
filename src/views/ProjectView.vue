<template>
  <main>
    <section class="project">
      <div class="project">
        <h1>{{ project.title }}</h1>
        <div class="hero-image">
          <img :src="`/projects/${project.id}/${project.heroImage}`" alt="">
        </div>
        <p class="description" v-html="project.description"></p>
      </div>
      <div class="images">
        <img v-for="(i, idx) in project.images" :key="idx" :src="`/projects/${project.id}/${i.img}`" alt=""/>
      </div>
    </section>
  </main>
</template>

<script>
import {projects} from '@/config';

export default {
  name: 'ProjectView',
  components: {},
  computed: {
    project() {
      return projects.find(project => project.id === this.$route.params.projectId);
    }
  }
};
</script>
