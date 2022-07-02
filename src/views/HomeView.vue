<template>
  <main id="home-view" class="lg:h-screen text-red-100 lg:flex relative bg-[#392121]">
    <div class="absolute h-full w-full bg-center bg-cover z-[0] transition-all"
         :style="{backgroundImage, filter}"></div>
    <aside class="bg-black/60 lg:w-3/12 px-6 py-6 lg:h-full lg:overflow-y-auto z-10">
      <div class="info-tile text-center">
        <img src="/logo.png" alt="Logo" class="block w-6/12 mx-auto my-4">
        <h1 class="font-bold text-5xl my-4">{{ about.name }}</h1>
        <h2 class="my-4 text-2xl">{{ about.shortDescription }}</h2>
        <div class="social-links flex justify-center items-center my-4 text-lg">
          <a v-for="link in about.socialLinks" target="_blank" :key="link.type" :href="link.url" class="hover:text-pink-400 mx-2">
            <component :is="`${link.type}-icon`"/>
          </a>
        </div>
        <div class="h-0 border my-8"></div>
        <div class="prose text-2xl" v-html="about.description">
        </div>
      </div>
    </aside>
    <section
        class="content h-full overflow-y-auto flex-1 bg-black/60 px-10 py-10 z-10">
      <h1 class="text-2xl md:text-4xl lg:text-9xl text-center lg:text-left m-5 lg:m-10">
        Recent Work
      </h1>
      <div class="projects flex flex-wrap">
        <router-link :to="{name: 'project', params:{projectId: project.id}}" v-for="project in projects"
                     :key="project.id"
                     class="block project md:w-5/12 lg:w-3/12 m-5 lg:m-10 group relative cursor-pointer overflow-hidden transition-all"
                     @mouseenter="hoveredProject = project" @mouseleave="hoveredProject=null">
          <img :src="`/projects/${project.id}/${project.heroImage}`" :alt="`${project.name} image`"
               class="block w-full object-cover object-center grayscale group-hover:grayscale-0 aspect-square">
          <div class="tinter absolute top-0 left-0 w-full h-full bg-[#a83a4b57] group-hover:invisible"></div>
          <div class="absolute inset-x-0 bottom-0 bg-black/60 visible group-hover:visible lg:invisible p-2">{{
              project.title
            }}
          </div>
        </router-link>
      </div>
    </section>
  </main>
</template>

<script>
import {projects, about} from '@/config';
import InstagramIcon from 'vue-material-design-icons/Instagram';
import DeviantArtIcon from 'vue-material-design-icons/Deviantart';

export default {
  name: 'HomeView',
  components: {
    InstagramIcon,
    DeviantArtIcon
  },
  data() {
    return {
      hoveredProject: null
    };
  },
  computed: {
    projects() {
      return projects;
    },
    about() {
      return about;
    },
    filter() {
      const {hoveredProject} = this;
      return hoveredProject ? 'blur(4px)' : '';
    },
    backgroundImage() {
      return 'url(\'/Banner.png\')';
    }
  }
};
</script>
