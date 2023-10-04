<template>
  <div>
    <div id="layer-opens">
      <div id="wrapper">
        <div style="width: 100%" class="login"></div>
      </div>
      <div class="layer layer_login is-open" id="layer">
        <form>
          <div class="inner">
            <div class="top">
              <h1 class="login_logo">spark plus</h1>
              <p class="title">쿠팡 시범 사업 관리자 로그인</p>
            </div>
            <div class="contents">
              <div class="input_box id MB35">
                <label for="id">아이디</label>
                <input
                  type="text"
                  id="id"
                  v-model="admin_id"
                  placeholder="아이디"
                />
                <!-- <span class="MT-25">*잘못된 아이디입니다.</span> -->
              </div>
              <div class="input_box password">
                <label for="password">비밀번호</label>
                <input
                  type="password"
                  autocomplete="on"
                  id="password"
                  v-model="admin_pw"
                  placeholder="비밀번호"
                  v-on:keydown.enter.prevent="login_method"
                />
                <!-- <span class="MT-25">*잘못된 비밀번호입니다.</span> -->
              </div>
              <div class="btns PDT20">
                <a @click="login_method" class="Btn-blue-Large">로그인</a>
              </div>
              <div class="btns PDT20"></div>
              <div class="contents_bottom">
                <div class="check_box" style="">
                  <input type="checkbox" id="auto_login" v-model="auto_login" />
                  <label for="auto_login">자동로그인</label>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      admin_id: "",
      admin_pw: "",
      auto_login: false,
    };
  },
  mounted() {
    if (localStorage.getItem("auto_admin_no")) {
      sessionStorage.setItem("admin_no", localStorage.getItem("auto_admin_no"));
      sessionStorage.setItem(
        "admin_name",
        localStorage.getItem("auto_admin_name")
      );
      this.$router.push("/Home");
    }
  },

  methods: {
    // async login_method() {
    //   console.log(`admin_id -> ${this.admin_id}`);
    //   console.log(`admin_pw -> ${this.admin_pw}`);
    //   console.log(`auto_login -> ${this.auto_login}`);
    //   this.$http
    //     .post(
    //       this.$server + "/admin/chkLogin",
    //       {
    //         admin_id: this.admin_id,
    //         admin_pwd: this.admin_pw,
    //       },
    //       {
    //         headers: {
    //           auth_key: "c83b4631-ff58-43b9-8646-024b12193202",
    //         },
    //       }
    //     )
    //     .then((res) => {
    //       console.log(res.data);
    //       if (res.data.result_code == "N") {
    //         alert(
    //           "아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다"
    //         );
    //       } else if (res.data.result_code == "Y") {
    //         this.$http
    //           .post(
    //             this.$server + "/admin/getLoginInfo",
    //             {
    //               admin_id: this.admin_id,
    //             },
    //             {
    //               headers: {
    //                 auth_key: "c83b4631-ff58-43b9-8646-024b12193202",
    //               },
    //             }
    //           )
    //           .then((res) => {
    //             console.log(res.data);
    //             sessionStorage.setItem("admin_no", res.data.admin_id);
    //             sessionStorage.setItem("admin_name", res.data.admin_name);
    //             if (this.auto_login == true) {
    //               localStorage.setItem("auto_admin_no", res.data.admin_id);
    //               localStorage.setItem("auto_admin_name", res.data.admin_name);
    //               console.log(localStorage.getItem("admin_no"));
    //             }
    //             this.$router.push("/Home");
    //           });
    //       }
    //     });
    // },

    // for local test
    async login_method() {
      // console.log(this.admin_id);
      // console.log(this.admin_pw);
      // this.$axios
      //   .post(this.$devServer + "/admin/login", {
      //     ainAdminId: this.admin_id,
      //     ainAdminPwd: this.admin_pw,
      //   })
      //   .then((res) => {
      //     console.log(res.data);
      //     if (res.data === "fail") {
      //       alert(
      //         "아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다"
      //       );
      //     } else {
      //       sessionStorage.setItem("admin_no", "admin");
      //       sessionStorage.setItem("admin_name", "admin");
      //       if (this.auto_login == true) {
      //         localStorage.setItem("auto_admin_no", "admin");
      //         localStorage.setItem("auto_admin_name", "admin");
      //         console.log(localStorage.getItem("admin_no"));
      //       }
      //       this.$router.push("/Home");
      //     }
      //   });
      if (this.admin_id === "test" && this.admin_pw === "1234") {
        sessionStorage.setItem("admin_no", "admin");
        sessionStorage.setItem("admin_name", "admin");
        if (this.auto_login == true) {
          localStorage.setItem("auto_admin_no", "admin");
          localStorage.setItem("auto_admin_name", "admin");
          console.log(localStorage.getItem("admin_no"));
        }
        this.$router.push("/Home");
      } else {
        alert("아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다");
      }
    },
  },
};
</script>
