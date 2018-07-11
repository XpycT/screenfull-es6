<template>
  <div class="hello">
    <section class="jumbotron text-center">
      <div class="container">
        <h1 class="jumbotron-heading">ScreenFull-ES6 Demo</h1>
        <p class="lead text-muted">Simple wrapper for cross-browser usage of the JavaScript
          <a href="https://developer.mozilla.org/en/DOM/Using_full-screen_mode">Fullscreen API</a>, which lets you bring
          the page or any element into fullscreen.</p>
      </div>
    </section>
    <section class="container">
      <div class="row justify-content-center">
        <div class="col col-md-4" >
          <div class="card mb-4 shadow " ref="card">
            <img class="card-img-top" src="https://sindresorhus.com/unicorn" ref="image" @click="toggleImage">
            <div class="card-body">
              <h5 class="card-title">Try out the Fullscreen API.</h5>
              <p class="card-text">Click the image to make it fullscreen</p>
              <section>
                <ul>
                  <li id="supported">Supported/allowed: {{ScreenFullEnabled}}</li>
                  <li id="status"></li>
                  <li id="element"></li>
                </ul>
              </section>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-primary" @click="request">Request</button>
                  <button type="button" class="btn btn-sm btn-secondary" @click="exit">Exit</button>
                  <button type="button" class="btn btn-sm btn-success" @click="toggle">Toggle</button>
                  <button type="button" class="btn btn-sm btn-info" @click="requestDocument">Request document</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import ScreenFull from '../../../';
  export default {
    name: 'FullScreenComponent',
    data() {
      return {}
    },
    mounted() {
    },
    computed: {
      /**
       * @return {boolean}
       */
      ScreenFullEnabled() {
        return  !!ScreenFull.enabled;
      }
    },
    methods: {
      request() {
        ScreenFull.request(this.$refs.card);
      },
      exit() {
        ScreenFull.exit();
      },
      toggle(){
        ScreenFull.toggle(this.$refs.card);
      },
      toggleImage(){
        ScreenFull.toggle(this.$refs.image);
      },
      requestDocument(){
        ScreenFull.request();
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #demo-img {
    cursor: pointer;
  }
  .card {
    width:340px;
  }
</style>
