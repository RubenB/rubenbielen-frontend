<template>
  <div class="card">
    <div 
      v-if="title" 
      class="card-title">
      {{ title }}
    </div>
    <div class="card-content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";
@import "../assets/scss/mixins";
.card {
  border: 3px solid $black;
  position: relative;
  box-shadow: 5px 5px 1px 0px rgba($black, 0.4);
  font-size: 1rem;
  background-color: $white;
  @include line-height(1rem);
  &-title {
    background-color: $white;
    display: inline-block;
    border: 3px solid $black;
    margin-left: 1rem;
    margin-top: -1rem;
    position: absolute;
    padding: 0 1rem;
    font-family: $font-family-space;
  }
  &-content {
    padding: 1.5rem 0.5rem 0.5rem 0.5rem;
    background: $white;
    font-family: $font-family-tahoma;
  }
}
</style>

