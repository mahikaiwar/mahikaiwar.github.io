<template>
  <main class="h-screen bg-center bg-cover text-red-100 flex" :style="{backgroundImage}">
    <aside class="bg-black/60 w-3/12 px-6 py-6 h-full overflow-y-auto">
      <div class="back">
        <router-link :to="{name:'home'}">Home</router-link>
      </div>
      <div class="info-tile text-center">
        <img :src="`/projects/${project.id}/${project.heroImage}`" alt="Logo"
             class="block w-6/12 mx-auto my-4 aspect-square object-cover object-center rounded-full">
        <h1 class="font-bold text-2xl my-2">{{ project.title }}</h1>
        <div class="h-0 border my-8"></div>
        <div class="prose" v-html="project.description">
        </div>
      </div>
    </aside>
    <section
        class="content h-full overflow-y-auto flex-1 bg-black/60 px-10 py-10 cursor-pointer">
      <div class="projects columns-3">
        <div v-for="image in project.images" :key="image.img" class="m-2 group hover:scale-105 relative"
             @mouseenter="selectedImage = image" @mouseleave="selectedImage = null">
          <img :src="`/projects/${project.id}/${image.img}`" :alt="`Project Image: ${image.title}`">
          <div class="absolute inset-x-0 bottom-0 w-100 bg-black/50 invisible group-hover:visible p-2"
               v-if="image.title || image.description">
            <h4 class="font-bold my-2">{{ image.title }}</h4>
            <p v-html="image.description" class="prose text-sm"></p>
          </div>
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
  data() {
    return {
      selectedImage: null
    };
  },
  computed: {
    project() {
      return projects.find(project => project.id === this.$route.params.projectId);
    },
    backgroundImage() {
      const {project: {id: projectId, heroImage}, selectedImage} = this;
      if (!selectedImage) {
        return `url('/projects/${projectId}/${heroImage}')`;
      }
      return `url('/projects/${projectId}/${selectedImage.img}')`;
    }
  }
};
</script>
