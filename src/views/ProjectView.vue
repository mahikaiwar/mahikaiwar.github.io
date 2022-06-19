<template>
  <main class="h-screen bg-center bg-cover text-red-100 flex" :style="{backgroundImage: `url('/projects/${project.id}/${project.heroImage}')`}">
    <aside class="bg-black/60 w-3/12 px-6 py-6 h-full overflow-y-auto">
      <div class="back">
        <router-link :to="{name:'home'}">Home</router-link>
      </div>
      <div class="info-tile text-center">
        <img :src="`/projects/${project.id}/${project.heroImage}`" alt="Logo" class="block w-6/12 mx-auto my-4 aspect-square object-cover object-center rounded-full">
        <h1 class="font-bold text-2xl my-2">{{ project.title }}</h1>
        <div class="h-0 border my-8"></div>
        <div class="prose" v-html="project.description">
        </div>
      </div>
    </aside>
    <section
        class="content h-full overflow-y-auto flex-1 bg-black/60 px-10 py-10">
        <div class="projects columns-3">
          <div v-for="image in project.images" :key="image.img" class="m-2">
            <img :src="`/projects/${project.id}/${image.img}`" alt="">
          </div>
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
