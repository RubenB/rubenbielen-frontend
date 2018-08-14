<template>
  <section class="intro container">
    <div class="row">
      <div class="col-12 col-sm-8 intro-caption">
        <h1>Hi I'm <strong>Ruben</strong></h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12 offset-sm-4 col-sm-8 intro-subtext">
        <h3>And I really like <strong>webdevelopment</strong><span class="cursor">|</span></h3>
      </div>
    </div>
    <div class="bio">
      <div class="card">
        <div class="card-title">
          Personal info
        </div>
        <div class="card-content">
          <div class="row">
            <aside class="col-12 col-sm-4">
              <div class="row">
                <div class="offset-2 col-8 offset-sm-0 col-sm-12">
                  <img 
                    src="@/assets/images/profile.jpg" 
                    alt="Ruben Bielen Profile"
                    class="bio-image"
                  >
                </div>
                <div class="col-12 bio-social">
                  <span class="social">
                    <a 
                      href="https://github.com/RubenB"
                      class="btn btn-small btn-secondary social-link github"
                    >
                      <i class="fab fa-github-alt"/> Github
                    </a>
                  </span>
                  <span class="social">
                    <a 
                      href="https://twitter.com/RubenBielen"
                      class="btn btn-small btn-secondary social-link twitter" 
                    >
                      <i class="fab fa-twitter"/> Twitter
                    </a>
                  </span>
                </div>
              </div>
            </aside>
            <article class="col-12 col-sm-8">
              <p>  
                Content
              </p>
              <button class="btn btn-primary read-more">Read more</button>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="scss" scoped>
</style>
