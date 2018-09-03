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
          <a href="/">Info</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/personal">Personal Projects</a>
        </li>
        <li>
          <a href="/technologies">Technologies</a>
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

