<template>
  <section class="technologies container">
    <div class="row">
      <div class="col-12 projects-caption">
        <h1>Technologies<span class="cursor">|</span></h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-sm-6">
        <rb-card 
          title="doing/using" 
          class="technology"
        >
          <div class="technology-images">
            <span 
              v-for="(technologyUsing, index) in technologiesUsing" 
              :key="index"
            >
              <img 
                :src="require(`@/assets/images/projects/technologies/${technologyUsing}.png`)"
                :alt="technologyUsing"
                class="technology-image"
              >
            </span>
          </div>
        </rb-card>
      </div>
      <div class="col-12 col-sm-6">
        <rb-card 
          title="learning/trying" 
          class="technology"
        >
          <div class="technology-images">
            <span 
              v-for="(technologyLearning, index) in technologiesLearning"
              :key="index"
            >
              <img 
                :src="require(`@/assets/images/projects/technologies/${technologyLearning}.png`)"
                :alt="technologyLearning"
                class="technology-image"
              >
            </span>
          </div>
        </rb-card>
      </div>
    </div>
  </section>
</template>

<script>
import rbCard from '../components/card';

export default {
  transition: 'fade',
  components: {
    rbCard
  },
  data() {
    return {
      technologiesLearning: [
        'aws',
        'react',
        'angular',
        'typescript'
      ],
      technologiesUsing: [
        'html5',
        'css3',
        'js',
        'webpack',
        'babel',
        'bootstrap',
        'jquery',
        'docker',
        'vagrant',
        'vue',
        'sass',
        'git',
        'gulp',
        'nodejs',
        'java',
        'firebase',
        'mysql',
        'sql'
      ]
    }
  }
}
</script>

<style lang="scss">
@import 'assets/scss/components/transition';
</style>
