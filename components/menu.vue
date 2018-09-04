<template>
  <div v-click-outside="hide">
    <div 
      :class="{ 'active': menuOpen }"
      class="hamburger" 
      @click="toggle"
    >
      <i class="fas fa-bars fa-2x icon-hamburger"/>
      <i class="fas fa-times fa-2x icon-close"/>
    </div>
    <nav 
      :class="{ 'open': menuOpen }"
      class="nav" 
    >
      <ul>
        <li>
          <nuxt-link to="/">Info</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/projects">Projects</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/personal">Personal Projects</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/technologies">Technologies</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside';

export default {
  directives: {
    ClickOutside
  },
  data() {
    return {
      menuOpen: false
    };
  },
  methods: {
    toggle: function() {
      this.menuOpen = !this.menuOpen;
    },
    hide: function() {
      this.menuOpen = false;
    }
  }
};
</script>

