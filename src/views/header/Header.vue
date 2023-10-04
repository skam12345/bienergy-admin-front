<template>
  <div>
    <header>
      <div class="header_wrap">
        <h1 class="logo">
          <a href="javascript:void(0)"><span>쿠팡 시범사업 관리자</span></a>
        </h1>
        <div class="user">
          <p class="name">{{ name }}</p>
          <button type="button" class="btn_logout">
            <a @click="logout">로그아웃</a>
          </button>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: sessionStorage.getItem("admin_name") || "",
    };
  },
  methods: {
    logout() {
      alert("로그아웃 되었습니다.");
      localStorage.removeItem("auto_admin_no");
      localStorage.removeItem("auto_admin_name");
      sessionStorage.removeItem("admin_name");
      sessionStorage.removeItem("admin_no");
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
