<template>
  <section class="projects container">
    <div class="row">
      <div class="col-12 projects-caption">
        <h1>Projects<span class="cursor">|</span></h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <rb-card 
          title="jbc.be" 
          class="project"
        >
          <div class="row">
            <div class="project-image col-12 col-md-6">
              <img 
                src="@/assets/images/projects/homepage/jbc-homepage.png" 
                alt="jbc.be"
              >
            </div>
            <div class="project-content col-12 col-md-6">
              <div class="row project-detail">
                <div class="col-12"><strong>Platform</strong></div>
                <div class="col-12">Salesforce Commerce Cloud</div>
              </div>
              <div class="row project-detail">
                <div class="col-12"><strong>Role</strong></div>
                <div class="col-12">Full Stack</div>
              </div>
            </div>
          </div>
        </rb-card>
        <rb-card 
          title="alpheios.be" 
          class="project"
        >
          <div class="row">
            <div class="project-image col-12 col-md-6">
              <img 
                src="@/assets/images/projects/homepage/alpheios-homepage.png" 
                alt="alpheios.be"
              >
            </div>
            <div class="project-content col-12 col-md-6">
              <div class="row project-detail">
                <div class="col-12"><strong>Platform</strong></div>
                <div class="col-12">Intershop 7.9</div>
              </div>
              <div class="row project-detail">
                <div class="col-12"><strong>Role</strong></div>
                <div class="col-12">Mainly Backend Developer</div>
              </div>
            </div>
          </div>
        </rb-card>
        <rb-card 
          title="tickets.comicsstation.be" 
          class="project"
        >
          <div class="row">
            <div class="project-image col-12 col-md-6">
              <img 
                src="@/assets/images/projects/homepage/csa-homepage.png" 
                alt="tickets.commicsstation.be"
              >
            </div>
            <div class="project-content col-12 col-md-6">
              <div class="row project-detail">
                <div class="col-12"><strong>Platform</strong></div>
                <div class="col-12">Spring Boot + Angular 1</div>
              </div>
              <div class="row project-detail">
                <div class="col-12"><strong>Role</strong></div>
                <div class="col-12">Full Stack</div>
              </div>
            </div>
          </div>
        </rb-card>
        <rb-card 
          title="iciparisxl.be" 
          class="project"
        >
          <div class="row">
            <div class="project-image col-12 col-md-6">
              <img 
                src="@/assets/images/projects/homepage/ipxl-homepage.png" 
                alt="iciparisxl.be"
              >
            </div>
            <div class="project-content col-12 col-md-6">
              <div class="row project-detail">
                <div class="col-12"><strong>Platform</strong></div>
                <div class="col-12">Intershop 6.4</div>
              </div>
              <div class="row project-detail">
                <div class="col-12"><strong>Role</strong></div>
                <div class="col-12">Backend Developer</div>
              </div>
            </div>
          </div>
        </rb-card>
      </div>
    </div>
  </section>
</template>

<script>
import rbCard from '../components/card';

export default {
  components: {
    rbCard
  }
}
</script>
