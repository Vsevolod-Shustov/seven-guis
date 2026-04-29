<template>
  <nav class="nav">
    <slot></slot>
  </nav>
</template>

<style scoped>
.nav {
  width: 100%;
  text-align: center;
}

.nav :slotted(a.router-link-active) {
  background-color: rgba(0, 0, 0, 0.1);
}

.nav :slotted(a.router-link-active:hover) {
  background-color: rgba(0, 0, 0, 0.1);
  text-decoration: none;
  cursor: not-allowed;
}

.nav :slotted(a) {
  display: inline-block;
  padding: 1rem;
}

@media (min-width: 1024px) {
  .nav {
    text-align: left;
    font-size: 1rem;
  }

  .nav :slotted(a) {
    border-inline-start: 1px solid var(--color-border);
  }

  .nav :slotted(a:first-of-type) {
    border: 0;
  }
}
</style>
