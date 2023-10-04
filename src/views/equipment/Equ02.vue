<template>
  <div>
    <div id="wrapper">
      <div id="container">
        <section class="sales">
          <div class="breadcrumb">
            <a href="home.html">HOME</a>
            <p>장비제어</p>
            <p>세차순서</p>
          </div>
          <div class="contents">
            <h2 class="title title_equ">세차순서</h2>
            <div class="contents_area MT40">
              <div class="contents_area-table product_inquire">
                <p class="contents_area-title">세차 진입 차량 순서 제어</p>
                <div class="carwash_equ">세차기</div>
                <div
                  class="contents_area-queue"
                  style="width: 70%; float: left"
                >
                  <div
                    v-for="(info, index) in get_washCar"
                    :key="index"
                    style="margin: 0 auto; margin-top: 40px"
                  >
                    <div>
                      <p>{{ info.car_no }}</p>
                      <ul class="process">
                        <li>세차메뉴 : {{ info.prod_name }}</li>
                        <li>옵션 : {{ info.option_name }}</li>
                        <li>건조브러쉬 : {{ info.is_brush }}</li>
                      </ul>
                      <button
                        class="btn_red"
                        @click="
                          set_washCtrl(info.use_seq, info.wash_seq, info.car_no)
                        "
                      >
                        회차처리
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  style="
                    width: 30%;
                    float: right;
                    margin-top: 40px;
                    border: 2px solid orange;
                  "
                >
                  <div style="height: 150px; margin: 0 auto; margin-top: 40px">
                    <button class="btn_up btn_up1" @click="gate_up('01')">
                      1호차단기 UP
                    </button>
                    <button class="btn_up btn_down1" @click="gate_down('01')">
                      1호차단기 DOWN
                    </button>
                  </div>
                  <div style="height: 150px; margin: 0 auto; margin-top: 40px">
                    <button class="btn_up btn_up2" @click="gate_up('02')">
                      2호차단기 UP
                    </button>
                    <button class="btn_up btn_down2" @click="gate_down('02')">
                      2호차단기 DOWN
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      get_washCar: "",
    };
  },
  mounted() {
    clearInterval(this.loading);
    this.loading = setInterval(this.get_washCtrl, 3000);
  },
  beforeRouteLeave(to, from, next) {
    var result = confirm("이 사이트에서 나가시겠습니까?");
    if (result) {
      clearInterval(this.loading);
      next();
    }
  },
  methods: {
    get_washCtrl() {
      console.log("보냄");
      this.$http
        .post(
          this.$server + "/admin/getWashCtl",
          {},
          {
            headers: {
              auth_key: "c83b4631-ff58-43b9-8646-024b12193202",
            },
          }
        )
        .then((res) => {
          this.get_washCar = res.data;
          console.log(res.data);
        });
    },
    set_washCtrl(use_seq, wash_seq, car_no) {
      this.$http
        .post(
          this.$server + "/admin/setWashCtl",
          {
            use_seq: use_seq,
            wash_seq: wash_seq,
            car_no: car_no,
          },
          {
            headers: {
              auth_key: "c83b4631-ff58-43b9-8646-024b12193202",
            },
          }
        )
        .then((res) => {
          if (res.data.result_code == "Y") {
            alert("회차처리 성공");
            clearInterval(this.loading);
            this.$router.go();
          } else {
            alert("회차처리 실패");
          }
        });
    },
    gate_up(gate_no) {
      this.$http
        .post(
          this.$server + "/admin/openGate",
          {
            gate_no: gate_no,
          },
          {
            headers: {
              auth_key: "c83b4631-ff58-43b9-8646-024b12193202",
            },
          }
        )
        .then((res) => {
          if (res.data.result_code == "Y") {
            alert(gate_no + "호차단기UP 성공");
          }
        });
    },
    gate_down(gate_no) {
      this.$http
        .post(
          this.$server + "/admin/closeGate",
          {
            gate_no: gate_no,
          },
          {
            headers: {
              auth_key: "c83b4631-ff58-43b9-8646-024b12193202",
            },
          }
        )
        .then((res) => {
          if (res.data.result_code == "Y") {
            alert(gate_no + "호차단기DOWN 성공");
          }
        });
    },
  },
};
</script>
