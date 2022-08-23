<template>
  <!-- 안내창 -->
  <div class="modal-wrap" v-show="showModal" v-on:click.stop="closeModal" v-on:click.prevent>
    <div class="modal-main">
      <h1>STX 건설 클론코딩</h1>
      <p>
        이 사이트는 <b>스터디용</b>으로 제작되었으며 리소스는 <strong>원저작자</strong>에게 있습니다. <br>
        해당 사이트 관련 문제 사항이 있으시면 <a href="mailto:aaa@aaa.net"><b>연락</b></a>해주시면 삭제하겠습니다.<br>
        본 사이트는 Chrome 에 최적화되어 있습니다.
      </p>
      <button class="modal-close" v-on:click.stop="closeModal" v-on:click.prevent>
        <i class="fas fa-times"></i>
      </button>
    </div>
  </div>
  <div class="wrap">
    <Header />
    <Visual />
    <Part />
    <News :ntdata="noticeData" :nsdata="newsData" />
    <Cs />
    <About />
    <Footer />
  </div>
</template>

<script>
  import {ref} from 'vue';
  import Header from '@/components/HeaderView.vue';
  import Visual from '@/components/VisualView.vue';
  import Part from '@/components/PartView.vue';
  import News from '@/components/NewsView.vue';
  import Cs from '@/components/CsView.vue';
  import About from '@/components/AboutView.vue';
  import Footer from '@/components/FooterView.vue';
  // import $ from 'jquery';

  export default {
    name: 'App',
    components: {
      Header,
      Visual,
      Part,
      News,
      Cs,
      About,
      Footer
    },
    setup() {
      const noticeData = [{
        url: 'a.html',
        title: '에스티엑스건설자산관리 주식회사 해산결의에 따른 채권신고 안내 공고 (2차)'
      }, {
        url: 'b.html',
        title: '에스티엑스건설자산관리 주식회사 해산결의에 따른 채권신고 안내 공고 (1차)'
      }, {
        url: 'c.html',
        title: '2021년도 협력업체 모집공고'
      }, {
        url: 'd.html',
        title: 'STX건설 상호 사용 관련 안내'
      }];

      const newsData = [{
        url: 'a.html',
        title: 'STX건설, 춘천 레고랜드 테마파크 시공사 ‘선정’'
      }, {
        url: 'b.html',
        title: 'STX건설, 2018년 성장 "청신호"'
      }];

      let showModal = ref(true);

      const closeModal = ()=> {
        // 모달 창 닫기 변수
        showModal.value = false;
      }

      return {
        noticeData,
        newsData,
        showModal,
        closeModal,
      }
    }
  }
</script>

<style>
  @charset "utf-8";
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul,
  li {
    list-style: none;
  }

  a {
    color: #333;
    text-decoration: none;
  }

  img {
    vertical-align: middle;
    border: 0;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: 'Noto Sans KR', Helvetica, '맑은 고딕', 'malgun gothic', 'Apple SD Gothic Neo', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.4;
    letter-spacing: -0.64px;
    color: #444;
  }

  /* 공통요소 */
  .clearfix::after {
    content: '';
    position: relative;
    display: block;
    width: 100%;
    clear: both;
  }

  .inner {
    position: relative;
    display: block;
    max-width: 1200px;
    margin: 0 auto;
  }
/* 안내창 */
.modal-wrap {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 99999;
}
.modal-main {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 550px;
  height: 400px;
  background-color: #fff;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0px 0px 15px 0px rgb(0 0 0 / 70%);
  border: 5px solid rgba(0, 0, 0, 0.1);
}

.modal-main h1 {
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  color: #000;
  padding: 20px 0;
}
.modal-main p {
  text-align: center;
  font-size: 16px;
  font-weight: 300;
  color: #111;
  line-height: 1.8;
}

.modal-main b {
  font-weight: 600;
  text-decoration: underline;
  color: #ed1c24;
}
.modal-main strong {
  font-weight: 600;
  text-decoration: underline;
  color: #ed1c24;
}
.modal-close {
  position: absolute;
  right: 20px;
  top: 20px;
  border: 0;
  cursor: pointer;
  font-size: 24px;
  background: transparent;
  color: #999;
  transition: transform 0.3s;
}

.modal-close:hover {
  transform: rotate(90deg);
}
  .wrap {
    padding-top: 80px;
  }
</style>
