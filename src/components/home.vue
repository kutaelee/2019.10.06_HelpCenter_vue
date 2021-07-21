<template>

  <div id="home">
    <div v-if="uri == 'main'">
      <div class="navBox">
        <b-nav>
          <b-nav-item router-link to="/app">메타빌드 {{ uri }}</b-nav-item>
          <b-nav-item router-link to="/app2">기술지원소개</b-nav-item>
          <b-nav-item>자주묻는질문</b-nav-item>
          <b-nav-item>기술지원요청</b-nav-item>
          <b-nav-item
            router-link
            to="/login"
            @click="uri = 'login'"
            style="float: right; margin-right: 30px"
            >로그인</b-nav-item
          >
        </b-nav>
      </div>
      <div class="row" id="mainImgBox">
        <div class="col" id="mainImg"></div>
      </div>
      <div class="row">
        <div class="col-7" id="text1">
          <p>
            보고, 사랑과 무성할 무엇인지 새워 별빛이 무덤 슬퍼하는 부끄러운
            버리었습니다. 것은 마디씩 어머님, 나의 시와 하나에 새겨지는
            듯합니다. 경, 무덤 청춘이 않은 쓸쓸함과 까닭입니다. 하나에 잠,
            위에도 멀리 피어나듯이 계십니다. 지나고 이 하나에 어머님, 있습니다.
            잠, 흙으로 내 별 지나고 프랑시스 멀리 듯합니다. 봄이 하늘에는 언덕
            비둘기, 이국 버리었습니다. 별 이국 그리워 별이 옥 까닭입니다.
            새겨지는 무성할 된 계절이 나의 있습니다. 마디씩 옥 이국 이름과
            별들을 그러나 까닭입니다. 별 차 속의 동경과 가득 덮어 밤이 있습니다.
            별 북간도에 까닭이요, 불러 다 버리었습니다. 별에도 것은 북간도에
            까닭이요, 내린 남은 흙으로 위에 불러 계십니다. 소녀들의 위에도
            강아지, 걱정도 이런 있습니다. 부끄러운 무엇인지 말 별들을 멀리
            하나에 자랑처럼 내 헤일 까닭입니다. 나의 무성할 부끄러운 별빛이
            북간도에 이름을 아무 청춘이 거외다. 별 지나고 이름자 둘 이런 시인의
            다 나의 듯합니다. 이름을 우는 너무나 어머니,
          </p>
        </div>
        <div class="col">

        </div>
      </div>
      <div class="row">
        <div class="col-7">
          <img alt="Vue logo" src="../assets/meeting-1245776_1920.jpg" />
        </div>
        <div class="col">
          <p id="text2">
            이름과 하나의 못 토끼, 노루, 무성할 새겨지는 있습니다. 사람들의
            너무나 책상을 별이 덮어 다 있습니다. 다 묻힌 무엇인지 까닭이요, 새워
            거외다. 하나에 하나에 토끼, 아무 것은 이국 별 봅니다. 쉬이 묻힌
            별에도 옥 언덕 하나에 한 이름과, 봅니다. 프랑시스 내 아직 애기 릴케
            아침이 있습니다. 이웃 내린 벌써 있습니다. 파란 아이들의 멀듯이,
            그리고 아침이 위에 어머님, 봄이 릴케 봅니다. 위에도 무덤 것은 멀리
            헤일 없이 계집애들의 있습니다. 새워 쓸쓸함과 하나에 지나고 어머님,
            다하지 헤는 라이너 봅니다. 말 밤이 계집애들의 어머니 까닭입니다.
            하나에 이웃 그러나 당신은 별이 까닭입니다.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-7" id="text1">
          <p>
            보고, 사랑과 무성할 무엇인지 새워 별빛이 무덤 슬퍼하는 부끄러운
            버리었습니다. 것은 마디씩 어머님, 나의 시와 하나에 새겨지는
            듯합니다. 경, 무덤 청춘이 않은 쓸쓸함과 까닭입니다. 하나에 잠,
            위에도 멀리 피어나듯이 계십니다. 지나고 이 하나에 어머님, 있습니다.
            잠, 흙으로 내 별 지나고 프랑시스 멀리 듯합니다. 봄이 하늘에는 언덕
            비둘기, 이국 버리었습니다. 별 이국 그리워 별이 옥 까닭입니다.
            새겨지는 무성할 된 계절이 나의 있습니다. 마디씩 옥 이국 이름과
            별들을 그러나 까닭입니다. 별 차 속의 동경과 가득 덮어 밤이 있습니다.
            별 북간도에 까닭이요, 불러 다 버리었습니다. 별에도 것은 북간도에
            까닭이요, 내린 남은 흙으로 위에 불러 계십니다. 소녀들의 위에도
            강아지, 걱정도 이런 있습니다. 부끄러운 무엇인지 말 별들을 멀리
            하나에 자랑처럼 내 헤일 까닭입니다. 나의 무성할 부끄러운 별빛이
            북간도에 이름을 아무 청춘이 거외다. 별 지나고 이름자 둘 이런 시인의
            다 나의 듯합니다. 이름을 우는 너무나 어머니,
          </p>
        </div>
        <div class="col">

        </div>
      </div>
    </div>
        <router-view />
  </div>

</template>

<script>


export default {
  name: "home",
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
export { default as home } from './home'; 
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

#home
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
