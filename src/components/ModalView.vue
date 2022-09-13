<template>
  <div class="modal-wrap">
    <div class="modal-main">
      <div class="modal-txt">
        <h1><strong>본 사이트는 개인 포트폴리오용으로 제작되었습니다.</strong></h1>
        <p>
        사이트에 대한 리소스는 원저작자에게 있습니다.<br>
        해당 사이트 관련 문제 사항이 있으시면 아래 메일을 통해 연락해주시면 삭제하겠습니다.
        <span class="opti">본 사이트는 Chrome 에 최적화되어 있습니다.</span>
        </p>
        <a href="mailto:ban8627@gmail.com" class="mail-bt">
          <span>ban8627@gmail.com</span>
        </a>
      </div>
      <button class="modal-close">
        <img src="@/assets/images/modal_close.png" alt="">
      </button>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import {onMounted} from 'vue'
export default {
 setup(){
  onMounted(()=>{
    $('.modal-close').click(()=>{
      $('.modal-wrap').hide();
    })
  })
  return {}
 }
}
</script>

<style>
    @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}
body {
  font-family: 'Pretendard-Regular';
}
  .modal-wrap {
    position: fixed;
    left:0;
    top:0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 99999;
    display: block;
    width:100vw;
    height:100vh;
  }
  .hidden {
    display: none;
  }
  .modal-main {
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    border-radius: 15px;
    box-shadow: 5px 10px 27px rgba(0, 0, 0, 0.7);
    width:100%;
    max-width:800px;
    height:100%;
    max-height:360px;
    text-align: center;
    background-color: #fff;
    padding:10px;
    overflow: hidden;

  }
  .modal-main::before {
    content: '';
    position: absolute;
    left:0;
    top:0;
    background:#fff url('@/assets/images/modal_caution.png') no-repeat;
    background-position: center 25%;
    display: block;
    width:100%;
    height:100%;
    z-index: 0;
    opacity:.5;
  }
  .modal-txt {
    position: relative;
    z-index: 5;
  }
  .modal-main h1 {
    margin-top:65px;
    font-size: 26px;
    margin-bottom:30px;
    font-weight: 900;
    line-height:1.5;
  }
  .modal-main h1 strong {

    font-size: 25px;
  }
  .modal-main p {
    font-size: 20px;
    font-weight: 600;
    line-height:1.5;
    margin-bottom:30px;
  }
  .modal-main .opti {
    position: relative;
    display: block;
  }
  .mail-bt {
    position: relative;
    display: block;
    padding:5px 10px;
    width:60%;
    height:35px;
    font-size: 20px;
    margin:0 auto;
    line-height:35px;
    text-decoration: none;
    transition: all .3s;
  }
  .mail-bt::before {
    content: '';
    position: absolute;
    left:0;
    top:0;
    display: block;
    width:100%;
    height:100%;
    background-color: #e3e7f2;
    opacity:.5;
    border-radius: 10px;
    z-index: -1;
  }
  .mail-bt span {
    color:#000;
    font-weight: bold;
  }
  .modal-main .mail-bt:hover {
    transform: scale(1.2);
    opacity:1;
  }
  .modal-main .mail-bt:hover span {
    transform: scale(1.2);
  }
  .modal-close {
    position: absolute;
    right:10px;
    top:10px;
    border:0;
    font-size: 30px;
    background-color: transparent;
    cursor: pointer;
    transition:all .3s;
    z-index: 99;
  }
  .modal-close:hover {
    transform: rotate(90deg);
  }
</style>