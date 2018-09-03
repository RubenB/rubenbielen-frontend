<template>
  <section class="projects container">
    <div class="row">
      <div class="col-12 projects-caption">
        <h1>Personal Projects<span class="cursor">|</span></h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-6">
        <rb-card 
          title="This site" 
          class="project"
        >
          <div class="row">
            <div class="col-12"><strong>Technologies</strong></div>
            <div class="col-12">
              <img 
                class="project-technology"
                src="@/assets/images/projects/technologies/html5.png" 
                alt="html5"
              >
              <img 
                class="project-technology"
                src="@/assets/images/projects/technologies/css3.png" 
                alt="css3"
              >
              <img 
                class="project-technology"
                src="@/assets/images/projects/technologies/sass.png" 
                alt="vue"
              >
              <img 
                class="project-technology"
                src="@/assets/images/projects/technologies/js.png" 
                alt="js"
              >
              <img 
                class="project-technology"
                src="@/assets/images/projects/technologies/vue.png" 
                alt="vue"
              >
              <img 
                class="project-technology"
                src="@/assets/images/projects/technologies/nodejs.png" 
                alt="nodejs"
              >
            </div>
          </div>
          <div class="row">
            <div class="col-12"><strong>Why I build it</strong></div>
            <div class="col-12">
              <p>I wanted to have a own site. This site will grow with projects and technologies that I learn on the way.</p>
            </div>
          </div>
          <div class="row">
            <div class="col-12"><strong>Where can I find it</strong></div>
            <div class="col-12">
              <ul>
                <li><a href="https://github.com/RubenB/rubenbielen-frontend"><i class="fab fa-github"/> On github</a></li>
              </ul>
            </div>
          </div>
        </rb-card>
      </div>
      <div class="col-12 col-md-6">
        <rb-card 
          title="file-toolkit" 
          class="project"
        >
          <div class="row">
            <div class="col-12"><strong>Technologies</strong></div>
            <div class="col-12">
              <img 
                class="project-technology"
                src="@/assets/images/projects/technologies/nodejs.png" 
                alt="nodejs"
              >
              <img 
                class="project-technology"
                src="@/assets/images/projects/technologies/js.png" 
                alt="js"
              >
            </div>
          </div>
          <div class="row">
            <div class="col-12"><strong>Why I build it</strong></div>
            <div class="col-12">
              <p>I wanted to have a own site. This site will grow with projects and technologies that I learn on the way.</p>
            </div>
          </div>
          <div class="row">
            <div class="col-12"><strong>Where can I find it</strong></div>
            <div class="col-12">
              <ul>
                <li><a href="https://www.npmjs.com/search?q=file-toolkit"><i class="fab fa-npm"/> On npm</a></li>
                <li><a href="https://github.com/RubenB/file-toolkit"><i class="fab fa-github"/> On github</a></li>
              </ul>
            </div>
          </div>
        </rb-card>
      </div>
    </div>
  </section>
</template>

<script>
import rbCard from "../components/card";

export default {
  components: {
    rbCard
  }
};
</script>
