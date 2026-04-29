<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Nav from './components/Nav.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <Nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/counter">Counter</RouterLink>
      </Nav>
    </div>
  </header>
  <div class="content">
    <main>
      <div class="slide-wrapper">
        <router-view v-slot="{ Component, route }">
          <transition name="slide">
            <component :is="Component" :key="route.path" />
          </transition>
        </router-view>
      </div>
    </main>
    <aside>aside</aside>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5rem;
  background-color: rgba(0, 255, 0, 0.1);
  grid-area: header;
}

main {
  grid-area: main;
}

.slide-wrapper {
  position: relative;
  overflow: hidden;
  width: 100%;
}
.slide-enter-active,
.slide-leave-active {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transition: transform 0.5s ease;
}

.slide-enter-from {
  transform: translateX(-100%);
}
.slide-enter-to {
  transform: translateX(0);
}
.slide-leave-from {
  transform: translateX(0);
}
.slide-leave-to {
  transform: translateX(100%);
}

aside {
  grid-area: aside;
  padding: 1rem;
  background-color: rgba(255, 255, 0, 0.1);
}

@media (max-width: 1023px) {
  .slide-wrapper {
    min-height: var(--content-height-mobile);
  }
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .slide-wrapper {
    min-height: var(--content-height-desktop);
  }

  .content {
    display: flex;
  }
  main {
    flex: 3 0 75%;
  }
  aside {
    flex: 1 0 25%;
  }
}
</style>
