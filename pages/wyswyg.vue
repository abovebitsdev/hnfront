<template>
  <section>
      <div class="hnn">
        <div class="hnn__yellow_hero">
            <h2 class="h1">WYSIWYG<br class="desktop-show"/>Template</h2>
            <p>This is a short subtitle.</p>
        </div>

        <div class="white-section">
            <div class="wyswyg">
              <div class="container">
                  <div class="row">
                      <div class="column-8 offset-4 column-md-12 column-xs-12">
                          <div class="wyswyg__target" ref="wyswyg__target">
                            <h1>This is an H1 headline.</h1>
                            <h3>This is an H3 headline.</h3>
                            <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur.</p>
                            <h2>This is an H2 headline.</h2>

                            <h3>This is an H3 headline.</h3>
                            <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur.</p>
                            <ul>
                              <li>Bullet Point 1</li>
                              <li>Bullet Point 2</li>
                              <li>Bullet Point 3</li>
                              <li>Bullet Point 4</li>
                            </ul>
                            <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur.</p>
                            <h1>This is an H1 headline.</h1>
                            <h3>This is an H3 headline.</h3>
                            <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur.</p>
                            <ol>
                              <li>Bullet Point 1</li>
                              <li>Bullet Point 2</li>
                              <li>Bullet Point 3</li>
                              <li>Bullet Point 4</li>
                            </ol>
                            <h2>This is an H2 headline.</h2><h3>This is an H3 headline.</h3>
                            <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur.</p>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  data: function () {
    return {

    }
  },
  mounted(){
    console.log(this.$refs.wyswyg__target.firstChild);
    this.$refs.wyswyg__target.firstChild.style.marginTop = 0;
  },
  methods: {

  }
}
</script>
