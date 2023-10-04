<template>
  <div>
    <div id="wrapper">
      <div id="container">
        <section class="sales">
          <div class="breadcrumb">
            <router-link to="/Home">HOME</router-link>
            <p>프로모션</p>
            <p>쿠폰 발행</p>
          </div>
          <div class="contents">
            <h2 class="title title_prom">쿠폰 발행</h2>
            <div class="contents_area">
              <div class="contents_area-search">
                세차쿠폰
                <div class="select MT40">
                  <div class="select_box MR30">
                    <label for="">세차메뉴</label>
                    <select v-model="car_code">
                      <option
                        v-for="(info, index) in car_select"
                        :value="info"
                        :selected="index == 1"
                        :key="index"
                      >
                        {{ info.prod_name }}
                      </option>
                    </select>
                  </div>
                  <div class="input_box">
                    <label for="number">매수</label>
                    <input
                      type="text"
                      id=""
                      class="WD180 MR20"
                      style="text-align: right"
                      v-model="car_count"
                      v-on:keydown.enter.prevent="car_search"
                    />
                  </div>
                  <div class="input_box date">
                    <label for="end_date">유효기간</label>
                    <input type="date" id="start" v-model="car_enddate" />
                  </div>
                  <button
                    type="button"
                    class="btn_blue btn_excel ML10 MR20"
                    @click="car_search"
                  >
                    발행(엑셀)
                  </button>
                </div>
              </div>
              <div class="contents_area-search">
                할인쿠폰
                <div class="select MT40">
                  <div class="input_box">
                    <label for="number">할인율(%)</label>
                    <input
                      type="text"
                      id=""
                      placeholder="할인율(%) 입력"
                      style="text-align: right"
                      class="WD180 MR20 right"
                      v-model="dis_percent"
                    />
                  </div>
                  <div class="input_box">
                    <label for="number">할인금액(원)</label>
                    <input
                      type="text"
                      id=""
                      placeholder="할인금액(원) 입력"
                      style="text-align: right"
                      class="WD180 MR20 right"
                      v-model="dis_won"
                    />
                  </div>
                  <div class="input_box">
                    <label for="number">매수</label>
                    <input
                      type="text"
                      id=""
                      style="text-align: right"
                      class="WD180 MR20"
                      v-model="dis_count"
                      v-on:keydown.enter.prevent="cop_search"
                    />
                  </div>
                  <div class="input_box date">
                    <label for="end_date">유효기간</label>
                    <input type="date" id="start" v-model="dis_enddate" />
                  </div>
                  <button
                    type="button"
                    class="btn_blue btn_excel ML10 MR20"
                    @click="cop_search"
                  >
                    발행(엑셀)
                  </button>
                </div>
              </div>
              <div class="contents_area-search">
                사은품교환
                <div class="select MT40">
                  <div class="input_box">
                    <label for="number">매수</label>
                    <input
                      type="text"
                      id=""
                      style="text-align: right"
                      class="WD180 MR20"
                      v-model="serv_count"
                      v-on:keydown.enter.prevent="serv_search"
                    />
                  </div>
                  <div class="input_box date">
                    <label for="end_date">유효기간</label>
                    <input type="date" id="start" v-model="serv_enddate" />
                  </div>
                  <button
                    type="button"
                    class="btn_blue btn_excel ML10 MR20"
                    @click="serv_search"
                  >
                    발행(엑셀)
                  </button>
                </div>
              </div>
              <div class="contents_area-search">
                Gift 쿠폰
                <div class="select MT40">
                  <div class="input_box">
                    <label for="number">매수</label>
                    <input
                      type="text"
                      id=""
                      style="text-align: right"
                      class="WD180 MR20"
                      v-model="gift_count"
                      v-on:keydown.enter.prevent="gift_search"
                    />
                  </div>
                  <div class="input_box date">
                    <label for="end_date">유효기간</label>
                    <input type="date" id="start" v-model="gift_enddate" />
                  </div>
                  <button
                    type="button"
                    class="btn_blue btn_excel ML10 MR20"
                    @click="gift_search"
                  >
                    발행(엑셀)
                  </button>
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
import * as Xlsx from "xlsx";
export default {
  data() {
    return {
      gift_count: 0,
      serv_count: 0,
      dis_count: 0,
      car_count: 0,
      car_select: [],
      car_code: "",
      car_enddate: "",
      coupon_code: [],
      dis_percent: 0,
      dis_won: 0,
      exl_result: [],
      call_name: "",
      dis_enddate: "",
      serv_enddate: "",
      gift_enddate: "",
    };
  },
  created() {
    this.get_select();
    var now = new Date();
    var oneMonthAfter = new Date(now.setMonth(now.getMonth() + 1));
    var year = oneMonthAfter.getFullYear();
    var month = ("0" + (oneMonthAfter.getMonth() + 1)).slice(-2);
    var day = ("0" + oneMonthAfter.getDate()).slice(-2);
    oneMonthAfter = year + "-" + month + "-" + day;
    this.car_enddate = oneMonthAfter;
    this.dis_enddate = oneMonthAfter;
    this.serv_enddate = oneMonthAfter;
    this.gift_enddate = oneMonthAfter;
  },
  methods: {
    async car_search() {
      var today = new Date();
      var select_date = new Date(this.car_enddate);
      if (!this.car_code) {
        alert("세차메뉴를 선택해주세요.");
        return false;
      }
      if (this.car_count <= 0) {
        alert("매수가 잘못되었습니다.");
        return false;
      }
      if (today > select_date || this.car_enddate.length == 0) {
        alert("유효기간이 잘못되었습니다.");
        return false;
      }
      const dat_fin = [];
      for (let index = 0; index < this.car_count; index++) {
        await this.$http
          .post(
            this.$server + "/admin/setPublishCoupon",
            {
              coupon_type: "CCT003",
              rest_count: 1,
              plc_code: this.car_code.plc_code,
              dc_fee: 0,
              dc_percent: 0,
              prod_name: this.car_code.prod_name,
              end_date: this.car_enddate,
            },
            {
              headers: {
                auth_key: "c83b4631-ff58-43b9-8646-024b12193202",
              },
            }
          )
          .then((res) => {
            console.log(res.data);
            dat_fin.push({
              쿠폰종류: "세차쿠폰",
              세차메뉴: this.car_code.prod_name,
              할인율: 0,
              할인금액: 0,
              쿠폰번호: res.data.coupon_code,
              유효기간: this.car_enddate,
            });
          });
      }
      const Book = Xlsx.utils.book_new();
      const workSheet = Xlsx.utils.json_to_sheet(dat_fin);
      Xlsx.utils.book_append_sheet(Book, workSheet, "쿠폰");
      Xlsx.writeFile(Book, "쿠폰.xlsx");
    },
    async cop_search() {
      var today = new Date();
      var select_date = new Date(this.dis_enddate);
      if (this.dis_percent < 0) {
        alert("할인율이 잘못되었습니다.");
        return false;
      }
      if (this.dis_won < 0) {
        alert("할인금액이 잘못되었습니다.");
        return false;
      }
      if (this.dis_percent == 0 && this.dis_won == 0) {
        alert("할인율 혹은 할인금액을 설정해주세요.");
        return false;
      }
      if (this.dis_count <= 0) {
        alert("매수가 잘못되었습니다.");
        return false;
      }
      if (today > select_date || this.dis_enddate.length == 0) {
        alert("유효기간이 잘못되었습니다.");
        return false;
      }
      const dat_fin = [];
      for (let index = 0; index < this.dis_count; index++) {
        await this.$http
          .post(
            this.$server + "/admin/setPublishCoupon",
            {
              coupon_type: "CCT001",
              rest_count: 1,
              plc_code: "",
              dc_fee: this.dis_won,
              dc_percent: this.dis_percent,
              prod_name: "",
              end_date: this.dis_enddate,
            },
            {
              headers: {
                auth_key: "c83b4631-ff58-43b9-8646-024b12193202",
              },
            }
          )
          .then((res) => {
            console.log(res.data);
            dat_fin.push({
              쿠폰종류: "할인쿠폰",
              세차메뉴: "",
              할인율: this.dis_percent,
              할인금액: this.dis_won,
              쿠폰번호: res.data.coupon_code,
              유효기간: this.dis_enddate,
            });
          });
      }
      console.log(dat_fin);
      const Book = Xlsx.utils.book_new();
      const workSheet = Xlsx.utils.json_to_sheet(dat_fin);
      console.log(workSheet);
      Xlsx.utils.book_append_sheet(Book, workSheet, "쿠폰");
      Xlsx.writeFile(Book, "쿠폰.xlsx");
    },
    async serv_search() {
      var today = new Date();
      var select_date = new Date(this.serv_enddate);
      if (this.serv_count <= 0) {
        alert("매수가 잘못되었습니다.");
        return false;
      }
      if (today > select_date || this.serv_enddate.length == 0) {
        alert("유효기간이 잘못되었습니다.");
        return false;
      }
      const dat_fin = [];
      for (let index = 0; index < this.serv_count; index++) {
        await this.$http
          .post(
            this.$server + "/admin/setPublishCoupon",
            {
              coupon_type: "CCT002",
              rest_count: 1,
              plc_code: "",
              dc_fee: 0,
              dc_percent: 0,
              prod_name: "",
              end_date: this.serv_enddate,
            },
            {
              headers: {
                auth_key: "c83b4631-ff58-43b9-8646-024b12193202",
              },
            }
          )
          .then((res) => {
            console.log(res.data);
            dat_fin.push({
              쿠폰종류: "사은품교환쿠폰",
              세차메뉴: "",
              할인율: 0,
              할인금액: 0,
              쿠폰번호: res.data.coupon_code,
              유효기간: this.serv_enddate,
            });
          });
      }
      console.log(dat_fin);
      const Book = Xlsx.utils.book_new();
      const workSheet = Xlsx.utils.json_to_sheet(dat_fin);
      console.log(workSheet);
      Xlsx.utils.book_append_sheet(Book, workSheet, "쿠폰");
      Xlsx.writeFile(Book, "쿠폰.xlsx");
    },
    async gift_search() {
      var today = new Date();
      var select_date = new Date(this.gift_enddate);
      if (this.gift_count <= 0) {
        alert("매수가 잘못되었습니다.");
        return false;
      }
      if (today > select_date || this.gift_enddate.length == 0) {
        alert("유효기간이 잘못되었습니다.");
        return false;
      }
      const dat_fin = [];
      for (let index = 0; index < this.gift_count; index++) {
        await this.$http
          .post(
            this.$server + "/admin/setPublishCoupon",
            {
              coupon_type: "CCT004",
              rest_count: 1,
              plc_code: "",
              dc_fee: 0,
              dc_percent: 0,
              prod_name: "",
              end_date: this.gift_enddate,
            },
            {
              headers: {
                auth_key: "c83b4631-ff58-43b9-8646-024b12193202",
              },
            }
          )
          .then((res) => {
            console.log(res.data);
            dat_fin.push({
              쿠폰종류: "Gift 쿠폰",
              세차메뉴: "",
              할인율: 0,
              할인금액: 0,
              쿠폰번호: res.data.coupon_code,
              유효기간: this.gift_enddate,
            });
          });
      }
      console.log(dat_fin);
      const Book = Xlsx.utils.book_new();
      const workSheet = Xlsx.utils.json_to_sheet(dat_fin);
      console.log(workSheet);
      Xlsx.utils.book_append_sheet(Book, workSheet, "쿠폰");
      Xlsx.writeFile(Book, "쿠폰.xlsx");
    },
    return_one(on_num) {
      if (on_num != undefined) {
        const parts = on_num.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
      }
    },
    get_select() {
      this.$http
        .post(
          this.$server + "/admin/getProdFirstList",
          {},
          {
            headers: {
              auth_key: "c83b4631-ff58-43b9-8646-024b12193202",
            },
          }
        )
        .then((res) => {
          this.car_select = res.data;
          console.log(this.car_select);
        });
    },
    makeExcelFile5() {
      const workBook = Xlsx.utils.book_new();
      this.exl_result = [];
      this.exl_result.push([
        "쿠폰종류",
        "세차메뉴",
        "할인율",
        "할인금액",
        "쿠폰번호",
      ]);

      const workSheet = Xlsx.utils.json_to_sheet(this.exl_result);
      Xlsx.utils.book_append_sheet(workBook, workSheet, "매출");
      Xlsx.writeFile(workBook, "output.xlsx");
    },
  },
};
</script>
