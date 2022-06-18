<template>
  <div class="project">
    <h1>This is a project page {{$route.params.projectId}}</h1>
  </div>
</template>

<script>
import {projects} from '@/config';
export default {
  name: 'ProjectView',
  components: {},
  computed: {
    projects() {
      return projects;
    }
  }
};
</script>
