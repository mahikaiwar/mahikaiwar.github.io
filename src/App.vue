<template>
  <header>
    <div class="content">
      <p class="title">
        Hi, I'm Mahi
      </p>
      <div class="cta">
        <a class="btn" href="#work">Nice to meet you!</a>
      </div>
    </div>
  </header>
  <main>
    <section id="work">
      <h1>My Work</h1>
      <div class="gallery">

      </div>
    </section>
  </main>
  <footer>
    Footer
  </footer>
</template>

<script>


export default {
  name: 'App',
  components: {}
};
</script>

<style lang="scss">

@mixin buttonBG($bg) {
  border: 2px solid $bg;
  color: $bg;
  &:hover {
    background-color: $bg;
    transition: all 0.3s ease-in-out;
  }
}

$background: rgb(249, 179, 179, 0.71);

html, body {
  margin: 0;
  padding: 0;
  border: 0;
  background: $background;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: whitesmoke;

}

.btn {
  @include buttonBG(#fff);
  width: 180px;
  height: 80px;
  outline: none;
  cursor: pointer;
  background: none;
  transition: .5s;
  font-size: 24px;
  border-radius: 5px;
  font-family: "Lato", sans-serif;
  text-decoration: none;
  padding: 20px 30px;

  &:hover {
    border: none;
    color: #823535;
    font-size: 28px;
    transform: scale(1.1);
  }
}

header {
  margin: 0;
  padding: 0;
  border: 0;
  height: calc(100vh - 10px);
  font-size: 8rem;
  background: url('@/assets/Banner.png');
  background-position: center;
  background-size: cover;

  .content {
    width: 100%;
    height: 100%;
    background: rgb(57 42 40 / 60%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    p{
      margin: 1rem 0;
    }
    .btn {
      width: 400px;
    }
  }
}

main {
  section {
    height: 98vh;
    h1 {
      text-align: center;
      font-size: 8rem;
    }
  }
}
</style>
