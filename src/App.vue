<template>
  <header>
    Hi, I'm Mahi
  </header>
  <main>
    Main
  </main>
  <footer>
    Footer
  </footer>
</template>

<script>


export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">


$background: rgb(249,179,179,0.71);

html, body {
  margin: 0;
  padding: 0;
  background: $background;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: whitesmoke;

}

header {
  height: 100vh;
  width: 100vw;
  font-size: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
