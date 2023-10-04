<template>
  <nav>
    <ul class="main_menu">
      <li class="home is-current">
        <router-link to="/Home">HOME</router-link>
      </li>
      <li class="sales is-sub">
        <router-link to="/Customer01">회원 관리</router-link>
      </li>
      <li class="customer is-sub">
        <router-link to="/Sale01">결제, 이용 현황</router-link>
      </li>
      <!-- <li class="product is-sub">
        <a href="javascript:void(0);">상품관리</a>
        <ul class="sub_menu">
          <li><router-link to="/Product01">상품조회</router-link></li>
        </ul>
      </li>
      <li class="equipment is-sub">
        <a href="javascript:void(0);">장비제어</a>
        <ul class="sub_menu">
          <li><router-link to="/Equ01">충전제어</router-link></li>
        </ul>
      </li>
      <li class="basics is-sub">
        <a href="javascript:void(0);">기초관리</a>
        <ul class="sub_menu">
          <li><router-link to="/Setting02">근무자관리</router-link></li>
        </ul>
      </li> -->
    </ul>
    <div class="info" style="bottom: 2%; position: absolute">
      <p>(주)바이에너지</p>
      사업자등록번호 : 695-81-02203 <br />
      대표이사 : 이자현<br />서울특별시 강남구 강남대로 345, 11층 브이아이피호
    </div>
  </nav>
</template>

<script>
export default {
  name: "leftMenu",
  components: {},
  data() {
    return {};
  },
};
</script>
