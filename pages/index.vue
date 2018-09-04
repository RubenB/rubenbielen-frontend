<template>
  <section class="intro container">
    <div class="row">
      <div class="col-12 offset-sm-3 col-sm-8 col-md-2 col-md-7 intro-caption">
        <h1>Hi I'm <strong>Ruben</strong></h1>
      </div>
    </div>
    <div class="row">
      <div class="offset-sm-4 col-sm-8 col-12 intro-subtext">
        <h3>And I really like <strong>webdevelopment</strong><span class="cursor">|</span></h3>
      </div>
    </div>
    <div class="row info">
      <div class="offset-lg-4 col-lg-4 offset-sm-3 col-sm-6 col-12">
        <img 
          src="@/assets/images/profile.jpg" 
          alt="Ruben Bielen"
          class="info-image"
        >
      </div>
      <div class="offset-lg-4 col-lg-4 offset-sm-3 col-sm-6 col-12">
        <rb-card 
          title="Personal info"
        >
          <ul class="info-items">
            <li><span class="emoji">😊</span> Ruben Bielen</li>
            <li><span class="emoji">🍰</span> I am {{ age }} years old</li>
            <li><span class="emoji">💻</span> All around webdeveloper</li>
            <li><span class="emoji">🇧🇪</span> Belgium</li>
          </ul>
        </rb-card>
      </div>
    </div>
    <div class="row">
      <div class="offset-lg-4 col-lg-2 offset-sm-3 col-sm-3 col-12 info-read-more">
        <a 
          href="https://github.com/RubenB" 
          class="btn btn-primary read-more"
          target="_black"
        >
          <span>github</span>
        </a>
      </div>
      <div class="col-lg-2 col-sm-3 col-12 info-read-more">
        <a 
          href="https://dev.to/rubenb" 
          class="btn btn-primary read-more"
          target="_black"
        >
          <span>dev.to</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import rbCard from "../components/card";

export default {
  transition: 'fade',
  components: {
    rbCard
  },
  computed: {
    age() {
      const today = new Date();
      const birthDate = new Date(1993, 5, 24);
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age = age - 1;
      }
      return age;
    }
  }
};
</script>

<style lang="scss">
@import 'assets/scss/components/transition';
</style>
