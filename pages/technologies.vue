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
          skills
        </rb-card>
      </div>
      <div class="col-12 col-sm-6">
        <rb-card 
          title="learning/trying" 
          class="technology"
        >
          learning/trying
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
