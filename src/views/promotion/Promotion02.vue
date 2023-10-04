<template>
  <div>
    <div id="wrapper">
      <div id="container">
        <section class="sales">
          <div class="breadcrumb">
            <router-link to="/Home">HOME</router-link>
            <p>프로모션</p>
            <p>쿠폰 관리</p>
          </div>
          <div class="contents">
            <h2 class="title title_prom">쿠폰 관리</h2>
            <div class="contents_area">
              <form autocomplete="off">
                <div class="contents_area-search" style="margin: -20px 0 30px">
                  <div class="select MT20">
                    <div>
                      <div
                        class="checksRadio MT08"
                        style="margin-bottom: 20px; display: flex"
                      >
                        <input
                          type="radio"
                          id="ex_rd3"
                          value="reg"
                          name="radiobtn"
                          v-model="date_type"
                        />
                        <label for="ex_rd3" style="width: 100px"
                          >발행일자</label
                        >
                        <input
                          type="radio"
                          id="ex_rd4"
                          value="use"
                          name="radiobtn"
                          v-model="date_type"
                        />
                        <label for="ex_rd4" style="width: 100px"
                          >사용일자</label
                        >
                      </div>
                    </div>
                  </div>
                  <div class="select MT20">
                    <div class="input_box date">
                      <label for="start">조회일자</label>
                      <input type="date" id="start" v-model="sea_date_start" />
                      <div class="hyphen">-</div>
                      <input type="date" id="end" v-model="sea_date_end" />
                      <div class="btn_group ML10 MR30">
                        <button type="button" @click="set_yes">전일</button>
                        <button type="button" @click="set_today">당일</button>
                        <button type="button" @click="set_weak">일주일</button>
                        <button type="button" @click="set_month">한달</button>
                      </div>
                    </div>
                    <div class="select_box MR30">
                      <label for="">쿠폰종류</label>
                      <select v-model="sea_cct">
                        <option disabled value="">쿠폰종류 선택</option>
                        <option value="">전체</option>
                        <option
                          v-for="(info, index) in get_cct"
                          :value="info.code"
                          :selected="index == 1"
                          :key="index"
                        >
                          {{ info.code_name }}
                        </option>
                      </select>
                    </div>
                    <div class="select_box MR30">
                      <label for="approve">사용가능여부</label>
                      <select name="" id="approve" v-model="sea_use">
                        <option disabled value="">사용가능여부 선택</option>
                        <option value="">전체</option>
                        <option value="Y">사용가능</option>
                        <option value="N">사용불가</option>
                      </select>
                    </div>
                    <div class="select_box MR30">
                      <label for="approve">발행구분</label>
                      <select name="" id="approve" v-model="sea_cpt">
                        <option disabled value="">발행구분 선택</option>
                        <option value="">전체</option>
                        <option
                          v-for="(info, index) in get_cpt"
                          :key="`o-${index}`"
                          :value="info.code"
                        >
                          {{ info.code_name }}
                        </option>
                      </select>
                    </div>
                  </div>

                  <div class="select MT40">
                    <div class="input_box">
                      <label for="number">차량번호</label>
                      <input
                        type="text"
                        id=""
                        placeholder="차량번호 입력"
                        class="WD180 MR20"
                        v-model="sea_carnum"
                        v-on:keydown.enter.prevent="get_search"
                      />
                    </div>
                    <button
                      type="button"
                      class="btn_blue btn_search ML10 MR20"
                      @click="get_search"
                    >
                      조회
                    </button>
                    <button
                      type="button"
                      class="btn_yellow btn_excel"
                      @click="makeExcelFile5"
                    >
                      엑셀 다운로드
                    </button>
                  </div>
                </div>
              </form>
              <div class="contents_area-table">
                <p class="contents_area-title">
                  검색결과
                  <font class="fs14"
                    ><span>(</span> 합계 :
                    {{ return_one(get_couponsum.account_coupon) }}건)</font
                  >
                </p>
                <p class="fl_right" style="width: 500px">
                  사은품 QR :
                  <input
                    type="text"
                    name="text"
                    size="20"
                    placeholder="쿠폰번호 입력"
                    v-model="coupon_number"
                    style="width: 63%; margin-right: 3px"
                  />
                  <button
                    type="button"
                    class="btn_add btn_red"
                    @click="register_qrcoupon"
                  >
                    사용 처리
                  </button>
                  <!-- <button type="button" class="btn_add btn_blue">엑셀 업로드</button> -->
                </p>
                <table>
                  <colgroup>
                    <col width="4%" />
                    <col width="4%" />
                    <col width="" />
                    <col width="" />
                    <col width="" />
                    <col width="" />
                    <col width="" />
                    <col width="" />
                    <col width="" />
                    <col width="" />
                    <col width="" />
                    <col width="" />
                    <col width="" />
                    <col width="" />
                    <col width="" />
                    <col width="" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th rowspan="2">NO</th>
                      <th rowspan="2">쿠폰번호</th>
                      <th rowspan="2">구매상품</th>
                      <th rowspan="2">쿠폰종류</th>
                      <th rowspan="2">사용가능</th>
                      <th rowspan="2">차량번호</th>
                      <th rowspan="2">할인율(%)</th>
                      <th rowspan="2">할인금액</th>
                      <th rowspan="2">발행일자</th>
                      <th rowspan="2">사용일자</th>
                      <th rowspan="2">발행구분</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(info, index) in get_couponresult" :key="index">
                      <td class="right">
                        {{ get_couponsum.account_coupon - index_no - index }}
                      </td>
                      <td>{{ info.coupon_no }}</td>
                      <td>{{ info.coupon_name }}</td>
                      <td>{{ info.coupon_type }}</td>
                      <td>{{ info.is_use }}</td>
                      <td>{{ info.car_no }}</td>
                      <td class="right">{{ info.dc_percent }}</td>
                      <td class="right">{{ return_one(info.dc_fee) }}</td>
                      <td>{{ info.reg_date }}</td>
                      <td>
                        <span v-if="info.use_date == '1900-01-01'">--</span>
                        <span v-else>{{ info.use_date }}</span>
                      </td>
                      <td>{{ info.publish_type }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="pagination">
              <!-- seleted : li.is-current -->
              <!-- disable : li.disable -->
              <ul>
                <li class="page first" :class="{ disable: current == 1 }">
                  <a
                    v-if="!(current == 1)"
                    href="javascript:void(0)"
                    @click="updateCurrent(1)"
                    >first page</a
                  >
                  <a v-else>first page</a>
                </li>
                <li class="page prev" :class="{ disable: current == 1 }">
                  <a
                    v-if="!(current == 1)"
                    href="javascript:void(0)"
                    @click="updateCurrent(current - 1)"
                    >prev page</a
                  >
                  <a v-else>prev page</a>
                </li>

                <div
                  v-for="page_index in paginate_total_unit"
                  :key="page_index"
                >
                  <li
                    class="num"
                    @click.prevent="updateCurrent(page_index)"
                    :class="{ 'num is-current': page_index == current }"
                    :key="page_index"
                  >
                    <a href="">{{ page_index }}</a>
                  </li>
                </div>

                <li
                  class="page next"
                  :class="{ disable: current == paginate_total }"
                >
                  <a
                    v-if="!(current == paginate_total)"
                    href="javascript:void(0)"
                    @click="updateCurrent(current + 1)"
                    >next page</a
                  >
                  <a v-else>next page</a>
                </li>
                <li
                  class="page last"
                  :class="{ disable: current == paginate_total }"
                >
                  <a
                    v-if="!(current == paginate_total)"
                    href="javascript:void(0)"
                    @click="updateCurrent(paginate_total)"
                    >last page</a
                  >
                  <a v-else>last page</a>
                </li>
              </ul>
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
  computed: {
    maxPage() {
      // 총 페이지 수(and 최대 페이지 번호)
      return this.paginate_total;
    },
    startPage() {
      // 페이지 시작 번호
      return (
        Math.trunc((this.current - 1) / this.pageCount) * this.pageCount + 1
      );
    },
    endPage() {
      // 페이지 끝 번호
      let end = this.startPage + this.pageCount - 1;
      return end < this.maxPage ? end : this.maxPage;
    },
    paginate_total_unit() {
      let units = [];
      for (let num = this.startPage; num <= this.endPage; num++) {
        units.push(num);
      }
      return units;
    },
  },
  data() {
    return {
      get_cct: "",
      get_cpt: "",
      sea_date_start: "",
      sea_date_end: "",
      sea_use: "",
      sea_cct: "",
      sea_cpt: "",
      sea_phonenum: "",
      sea_carnum: "",
      get_couponsum: "",
      get_couponresult: "",
      paginate: 25,
      sea_id: "",
      paginate_total: 0,
      current: 1,
      pageCount: 10, // 페이지 버튼 최대 개수
      get_memdetail: "",
      date_type: "reg",
      index_no: 0,
      coupon_number: "",
    };
  },
  created() {
    this.get_select();
    //this.set_yes();
    this.set_today();
    this.get_search();
  },
  methods: {
    get_search() {
      if (this.sea_date_start > this.sea_date_end) {
        alert("날짜 선택이 잘못되었습니다.");
        return false;
      }
      this.current = 1;
      this.index_no = 0;
      this.get_couponsum = "";
      this.get_couponresult = "";
      this.$http
        .post(
          this.$server + "/admin/getCouponSum",
          {
            start_date: this.sea_date_start,
            end_date: this.sea_date_end,
            date_type: this.date_type,
            coupon_type: this.sea_cct,
            is_use: this.sea_use,
            publish_type: this.sea_cpt,
            car_no: this.sea_carnum,
          },
          {
            headers: {
              auth_key: "c83b4631-ff58-43b9-8646-024b12193202",
            },
          }
        )
        .then((res) => {
          this.get_couponsum = res.data;
        });
      this.$http
        .post(
          this.$server + "/admin/getCouponList",
          {
            start_date: this.sea_date_start,
            end_date: this.sea_date_end,
            date_type: this.date_type,
            coupon_type: this.sea_cct,
            is_use: this.sea_use,
            publish_type: this.sea_cpt,
            car_no: this.sea_carnum,
            view_count: 25,
            start_count: (this.current - 1) * 25,
          },
          {
            headers: {
              auth_key: "c83b4631-ff58-43b9-8646-024b12193202",
            },
          }
        )
        .then((res) => {
          this.get_couponresult = res.data;
          console.log(res.data);
          this.paginate_total = Math.ceil(
            this.get_couponsum.account_coupon / this.paginate
          );
        });
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
          this.$server + "/admin/getCodeList",
          {
            code_type: "CCT",
          },
          {
            headers: {
              auth_key: "c83b4631-ff58-43b9-8646-024b12193202",
            },
          }
        )
        .then((res) => {
          this.get_cct = res.data;
        });
      this.$http
        .post(
          this.$server + "/admin/getCodeList",
          {
            code_type: "CPT",
          },
          {
            headers: {
              auth_key: "c83b4631-ff58-43b9-8646-024b12193202",
            },
          }
        )
        .then((res) => {
          this.get_cpt = res.data;
        });
    },
    setPaginate: function (i) {
      if (this.current == 1) {
        return i < this.paginate;
      } else {
        return (
          i >= this.paginate * (this.current - 1) &&
          i < this.current * this.paginate
        );
      }
    },
    updateCurrent(i) {
      this.current = i;
      this.index_no = (this.current - 1) * 25;
      this.$http
        .post(
          this.$server + "/admin/getCouponList",
          {
            start_date: this.sea_date_start,
            end_date: this.sea_date_end,
            date_type: this.date_type,
            coupon_type: this.sea_cct,
            is_use: this.sea_use,
            publish_type: this.sea_cpt,
            car_no: this.sea_carnum,
            view_count: 25,
            start_count: (this.current - 1) * 25,
          },
          {
            headers: {
              auth_key: "c83b4631-ff58-43b9-8646-024b12193202",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          this.get_couponresult = res.data;
        });
    },
    register_qrcoupon() {
      this.$http
        .post(
          this.$server + "/admin/setCouponUse",
          {
            coupon_code: this.coupon_number,
            coupon_type: "CCT002",
          },
          {
            headers: {
              auth_key: "c83b4631-ff58-43b9-8646-024b12193202",
            },
          }
        )
        .then((res) => {
          if (res.data.result_code == "Y") {
            alert("사용처리 완료 되었습니다");
            location.reload();
          } else {
            alert("유효한 QR코드가 아닙니다.");
          }
        });
    },
    set_yes: function () {
      const d = new Date();
      const b = new Date();
      const year = d.getFullYear(); // 년
      const month = d.getMonth() + 1; // 월
      const day = d.getDate();
      var pastDate = b.getDate() - 1;
      b.setDate(pastDate);
      const b_year = b.getFullYear(); // 년
      const b_month = b.getMonth() + 1; // 월
      const b_day = b.getDate();
      this.sea_date_start =
        b_year +
        "-" +
        b_month.toString().padStart(2, "0") +
        "-" +
        b_day.toString().padStart(2, "0");
      this.sea_date_end =
        year +
        "-" +
        month.toString().padStart(2, "0") +
        "-" +
        day.toString().padStart(2, "0");
    },
    set_today: function () {
      const d = new Date();
      const year = d.getFullYear(); // 년
      const month = d.getMonth() + 1; // 월
      const day = d.getDate();
      this.sea_date_start =
        year +
        "-" +
        month.toString().padStart(2, "0") +
        "-" +
        day.toString().padStart(2, "0");
      this.sea_date_end =
        year +
        "-" +
        month.toString().padStart(2, "0") +
        "-" +
        day.toString().padStart(2, "0");
    },
    set_weak: function () {
      const d = new Date();
      const b = new Date();
      const year = d.getFullYear(); // 년
      const month = d.getMonth() + 1; // 월
      const day = d.getDate();
      var pastDate = b.getDate() - 7;
      b.setDate(pastDate);
      const b_year = b.getFullYear(); // 년
      const b_month = b.getMonth() + 1; // 월
      const b_day = b.getDate();
      this.sea_date_start =
        b_year +
        "-" +
        b_month.toString().padStart(2, "0") +
        "-" +
        b_day.toString().padStart(2, "0");
      this.sea_date_end =
        year +
        "-" +
        month.toString().padStart(2, "0") +
        "-" +
        day.toString().padStart(2, "0");
    },
    set_month: function () {
      const d = new Date();
      const year = d.getFullYear(); // 년
      const month = d.getMonth() + 1; // 월
      const day = d.getDate();
      this.sea_date_start =
        year +
        "-" +
        (month - 1).toString().padStart(2, "0") +
        "-" +
        day.toString().padStart(2, "0");
      this.sea_date_end =
        year +
        "-" +
        month.toString().padStart(2, "0") +
        "-" +
        day.toString().padStart(2, "0");
    },
    set_year: function () {
      const d = new Date();
      const year = d.getFullYear(); // 년
      const month = d.getMonth() + 1; // 월
      const day = d.getDate();
      this.sea_date_start =
        year +
        "-" +
        month.toString().padStart(2, "0") +
        "-" +
        day.toString().padStart(2, "0");
      this.sea_date_end =
        year +
        "-" +
        (month - 1).toString().padStart(2, "0") +
        "-" +
        day.toString().padStart(2, "0");
    },
    return_date(date) {
      var today = new Date(date);
      today.setHours(today.getHours() + 9);
      return today.toISOString().replace("T", " ").substring(0, 19);
    },
    makeExcelFile5() {
      const workBook = Xlsx.utils.book_new();
      const workSheet = Xlsx.utils.json_to_sheet(this.get_couponresult);
      Xlsx.utils.book_append_sheet(workBook, workSheet, "매출");
      Xlsx.writeFile(workBook, "output.xlsx");
    },
  },
};
</script>
