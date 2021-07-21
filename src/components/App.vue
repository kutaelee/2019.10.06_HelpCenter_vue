<template>

  <div id="app">
        <router-view />
  </div>

</template>

<script>


export default {
  name: "App",
  components: {

  },
  data() {
    return {
      about: false,
      uri: "main",
    };
  },
  methods: {
    uriFunc: function () {},
  },
};
export { default as app } from './App'; 
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap')
$nanum: 'Nanum Gothic', sans-serif
%center
  justify-content: center
  display: flex
  flex-direction: column
%textStyle
  line-height: 2.5
  letter-spacing: 2px
  font-size: 1em
  font-weight: 400
  text-shadow: 0 0 black
  white-space: pre-wrap
  text-overflow: ellipsis
  word-break: keep-all

body
  height: 1500px
  width: 100%
  overflow-x: hidden

#app
  height: 100%
  width: 100%

.navBox
  width: 100%
  height: 50px
  background: rgba(20, 26, 31, 1)
  position: fixed
  font-family: $nanum
  @extend %center

  .nav
    display: block
    text-align: center
    width: 100%

  li:first-child
    text-align: left
  li
    display: inline-block
    margin: 0 5px 0 5px

  a
    color: white
    opacity: .8

  a:hover
    opacity: 1
    color: white

.row
  padding: 10%
  p
    @extend %textStyle
  .col-7 , .col
    @extend %center
.row:nth-child(even)
  background: black
  color: white
#hello
  text-align: right
#text1
  text-align: right
#text2
  text-align: right
#mainImgBox
  margin: 0px
  padding: 0 0 0 0
#mainImg
  height: 800px
  background-size: cover
  background-image: url(../assets/businessman-3213659_1920.jpg)
</style>
