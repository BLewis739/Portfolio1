<template>
  <div class='card'>
    <div class='info-wrapper'>
      <div class='title'>
        {{item.name}}
      </div>
      <div class='links'>
        <a :href="item.githubLink" target="_blank"><img src="../assets/GithubIcon.png"></a>
        <!-- <a :href="item.deployedLink" target="_blank"><img src="../assets/ExternalIcon.png"></a> -->
      </div>
      <div class="description">
      {{item.description}}
      </div>
      <div class="tech-used-heading">
        Technologies used:
      </div>
      <div class="tech-used">
        <div class="tech-item" v-for="tech in item.techUsed" :key="tech.index">
          {{tech}}
        </div>
      </div>
    </div>
    <div class='image-wrapper'>
      <img :src="item.imgUrl"/>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'ProjectCard',
    props: ['item'],
    methods: {

    }
  }
</script>