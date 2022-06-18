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
    </section>
    <section class="images">
      <img v-for="i in project.images" :src="i.img" alt="" />
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
