<template>
  <div class="page-wrapper">
    <header class="home-page-header">
      <div class="intro-text">
        Hello, my name is Brad Lewis
      </div>
      <div class="face-image-wrapper">
        <img src="../assets/FacePortfolio.png">
      </div>
    </header>
    <div class="additional-text">
      <div class="IAMA">I am a...</div>
      <div class="row1">
      <div class="job-title">Software Engineer</div>
      <div class="job-title">Full Stack Developer</div>
      </div><div class="row2">
      <div class="job-title">Frontend Developer</div>
      <div class="job-title">Backend Developer</div>
      </div>
      <div class="brand-statement">
        I am a full stack developer living in the Greater Boston area. I am a highly motivated problem solver who thrives in work environments that require creativity, flexibility, collaboration, and unique challenges. 
        Outside of programming, I have several artistic pursuits in design, multimedia production, and live performance. Prior to becoming a developer, I worked as a science teacher, and helped young people pique their interest in technology.
      </div>
      <div class="button-container">
        <router-link to="/projects" class="nav-link">Click to See My Most Recent Projects</router-link>
        <button>Click to Download a PDF of My Resume</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage"
}
</script>
