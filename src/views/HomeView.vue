<template>
  <main id="home-view" class="lg:h-screen bg-center bg-cover text-red-100 lg:flex bg-[#392121]"
        :style="{backgroundImage}">
    <aside class="bg-black/60 lg:w-3/12 px-6 py-6 lg:h-full lg:overflow-y-auto">
      <div class="info-tile text-center">
        <img src="/logo.png" alt="Logo" class="block w-6/12 mx-auto my-4">
        <h1 class="font-bold text-2xl my-2">{{ about.name }}</h1>
        <p class="my-2">{{ about.shortDescription }}</p>
        <div class="social-links flex justify-center items-center my-4 text-lg">
          <a v-for="link in about.socialLinks" :key="link.type" :href="link.url" class="hover:text-pink-400 mx-2">
            <component :is="`${link.type}-icon`"/>
          </a>
        </div>
        <div class="h-0 border my-8"></div>
        <div class="prose" v-html="about.description">
        </div>
      </div>
    </aside>
    <section
        class="content h-full overflow-y-auto flex-1 bg-black/60 px-10 py-10">
      <h1 class="text-2xl md:text-4xl lg:text-6xl text-center lg:text-left m-5 lg:m-10">
        Recent Work
      </h1>
      <div class="projects flex flex-wrap">
        <router-link :to="{name: 'project', params:{projectId: project.id}}" v-for="project in projects"
                     :key="project.id"
                     class="block project md:w-5/12 lg:w-4/12 m-5 lg:m-10 group relative cursor-pointer overflow-hidden transition-all"
                     @mouseenter="hoveredProject = project" @mouseleave="hoveredProject=null">
          <img :src="`/projects/${project.id}/${project.heroImage}`" :alt="`${project.name} image`"
               class="block w-full object-cover object-center grayscale group-hover:grayscale-0 aspect-square">
          <div class="tinter absolute top-0 left-0 w-full h-full bg-pink-900/50 group-hover:invisible"></div>
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
  methods: {
    openProject(projectId) {
      this.$router.push({
        name: 'project',
        params: {
          projectId
        }
      });
    }
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
    backgroundImage() {
      const {hoveredProject} = this;
      if (!hoveredProject) {
        return 'url(\'/Banner.png\')';
      }
      const {id: projectId, heroImage} = hoveredProject;
      return `url('/projects/${projectId}/${heroImage}')`;
    }
  }
};
</script>
