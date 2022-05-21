<template>
  <div class="page-wrapper">
    <header>
    </header>
    <div class="project-cards-wrapper">
      <div :key="item.id" v-for="item in projectData">
        <ProjectCard :item="item"/>
      </div>
    </div>
  </div>
</template>

<script>
import projectData from '../data/projects'
import ProjectCard from '../components/ProjectCard.vue'
export default {
  name: "ProjectsPage",
  data: () => ({
    projectData: projectData
  }),
  components: {
    ProjectCard
  }
}
</script>
