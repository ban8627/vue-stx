<template>
      <!-- 상단 -->
    <header class="header">
      <div class="inner">
        <a href="#" class="logo" >stx건설</a>
        <nav class="gnb">
          <ul class="depth1">
            <li>
              <a href="#">회사소개</a>
              <ul class="depth2">
                <li><a href="#">인사말</a></li>
                <li><a href="#">STX건설</a></li>
                <li><a href="#">기업문화</a></li>
                <li><a href="#">STX건설연혁</a></li>
                <li><a href="#">조직안내</a></li>
                <li><a href="#">윤리경영</a></li>
                <li><a href="#">안전·환경·품질경영</a></li>
                <li><a href="#">찾아오시는길</a></li>
                
              </ul>
            </li>
            <li>
              <a href="#">사업분야</a>
              <ul class="depth2">
                <li><a href="#">건축사업</a></li>
                <li><a href="#">주택사업</a></li>
                <li><a href="#">토목사업</a></li>
                <li><a href="#">플랜트/공작기계사업</a></li>
                <li><a href="#">해외사업</a></li>
              </ul>
            </li>
            <li>
              <a href="#">사회공헌</a>
              <ul class="depth2">
                <li><a href="#">나눔의생각</a></li>
                <li><a href="#">주요활동분야</a></li>
                <li><a href="#">활동현황</a></li>
              </ul>
            </li>
            <li>
              <a href="#">홍보센터</a>
              <ul class="depth2">
                <li><a href="#">홍보동영상</a></li>
                <li><a href="#">홍보브로슈어</a></li>
                <li><a href="#">STX건설뉴스</a></li>
              </ul>
            </li>
            <li>
              <a href="#">고객지원</a>
              <ul class="depth2">
                <li><a href="#">자주묻는질문</a></li>
                <li><a href="#">고객문의</a></li>
              </ul>
            </li>
            <li>
              <a href="#">채용정보</a>
              <ul class="depth2">
                <li><a href="#">채용안내</a></li>
                <li><a href="#">채용공고</a></li>
                <li><a href="#">채용FAQ</a></li>
              </ul>
            </li>
          </ul>
        </nav>
        <div class="lang">
          <a href="#">ENG</a>
          <i class="lang-bar"></i>
          <a href="#" class="lang-active">KOR</a>
        </div>
      </div>
    </header>
</template>

<script>
export default {

}
</script>

<style>
/* 상단 */
.header {
  position: fixed;
  left: 0;
  top: 0;
  overflow: hidden;
  width: 100%;
  height: 80px;
  transition: height 0.5s;
  z-index: 9999;  
  box-shadow: 0px 0px 7px 0px rgb(0 0 0 / 20%);
}

.header-open {
  height: 400px;
}

.header::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  width: 100vw;
  height: 80px;
  background: #fff;
  box-shadow: 0px 0px 7px 0px rgb(0 0 0 / 20%);
}

.header .inner {}

.logo {
  position: absolute;
  right: calc(100% + 100px);
  top: 20px;
  width: 150px;
  height: 39px;
  background: url('../assets/images/logo.png') no-repeat center;
  background-size: cover;
  font-size: 0;
}

.gnb {
  position: relative;
}

.gnb::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 80px;
  display: block;
  width: 100vw;
  height: calc(100% - 80px);
  background-color: rgba(0, 0, 0, 0.5);
}

.depth1 {
  position: relative;
  display: table;
  table-layout: fixed;
  width: calc(180px * 6 - 70px);
  margin: 0 auto;
}

.depth1>li {
  display: table-cell;
  width: 180px;
}

.depth1>li:last-child {
  width: 70px;
}

.depth1>li>a {
  position: relative;
  font-size: 19px;
  color: #000;
  font-weight: 500;
  line-height: 80px;
}

.depth1-focus {
  color: #ed1c24 !important;
}

.depth2 {
  padding-top: 40px;
  padding-bottom: 20px;
}

.depth2 li a {
  display: inline-block;
  font-size: 15px;
  color: #fff;
  margin-bottom: 15px;
}

.lang {
  position: absolute;
  left: calc(100% + 100px);
  top: 26px;
  font-size: 0;
  white-space: nowrap;
}

.lang a {
  display: inline-block;
  font-size: 15px;
  color: #888;
  font-weight: 500;
  text-transform: uppercase;
}

.lang .lang-active {
  color: #000;
}

.lang-bar {
  display: inline-block;
  width: 1px;
  height: 9px;
  background-color: #999;
  margin: 0 10px;
}
</style>