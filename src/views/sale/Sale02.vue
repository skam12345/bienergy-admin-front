<template>
  <div>
    <div id="wrapper">
      <div id="container">
        <section class="sales">
          <div class="breadcrumb">
            <router-link to="/Home">HOME</router-link>
            <p>매출관리</p>
            <p>이용현황</p>
          </div>
          <div class="contents">
            <h2 class="title title_sale">이용현황</h2>
            <div class="contents_area">
              <form autocomplete="off">
                <div class="contents_area-search">
                  <div class="select MT30">
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
                      <div class="select_box MR30">
                        <label for="purchase">구매 구분</label>
                        <select name="" id="purchase" v-model="sea_wut">
                          <option disabled value="">구매구분 선택</option>
                          <option value="">전체</option>
                          <option
                            v-for="(info, index) in get_wut"
                            :key="`o-${index}`"
                            :value="info.code"
                          >
                            {{ info.code_name }}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="search MT30">
                    <div class="input_box">
                      <label for="number">차량번호</label>
                      <input
                        type="text"
                        id="number"
                        placeholder="차량번호 입력"
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
                    {{ return_one(get_paysum.amount_fee) }} 원 /
                    {{ get_paysum.account_fee }} 건)</font
                  >
                </p>
                <table>
                  <!-- <colgroup>
                                        <col width=""/>
                                        <col width="5%"/>
                                        <col width="5%"/>
                                        <col width=""/>
                                        <col width=""/>
                                        <col width=""/>
                                        <col width=""/>
                                        <col width=""/>
                                        <col width=""/>
                                    </colgroup> -->
                  <thead>
                    <tr>
                      <th rowspan="2">NO</th>
                      <th rowspan="2">차량번호</th>
                      <th rowspan="2">이용구분</th>
                      <th rowspan="2">이용일시</th>
                      <th rowspan="2">QR사용</th>
                      <th rowspan="2">세차메뉴</th>
                      <th rowspan="2">옵션명</th>
                      <th rowspan="2">건조브러쉬</th>
                      <th rowspan="2">결제금액</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(info, index) in get_payresult"
                      v-show="setPaginate(index)"
                      :key="index"
                    >
                      <td class="right">{{ get_payresult.length - index }}</td>
                      <td>{{ info.car_no }}</td>
                      <td>{{ info.use_name }}</td>
                      <td>{{ return_date(info.use_date) }}</td>
                      <td>{{ info.qr_is }}</td>
                      <td>{{ info.prod_name }}</td>
                      <td>{{ info.option_name }}</td>
                      <td>{{ info.brush_is }}</td>
                      <td class="right">{{ return_one(info.pay_fee) }}</td>
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
      get_wtt: "",
      get_pat: "",
      get_wut: "",
      sea_date_start: "",
      sea_date_end: "",
      sea_wtt: "",
      sea_pat: "",
      sea_wut: "",
      sea_carnum: "",
      get_paysum: "",
      get_payresult: "",
      paginate: 25,
      paginate_total: 0,
      current: 1,
      pageCount: 10, // 페이지 버튼 최대 개수
    };
  },
  created() {
    this.get_select();
    //this.set_yes();
    this.set_today();
    this.get_search();
  },
  methods: {
    async get_search() {
      if (this.sea_date_start > this.sea_date_end) {
        alert("날짜 선택이 잘못되었습니다.");
        return false;
      }
      console.log(this.sea_date_start);
      console.log(this.sea_date_end);
      console.log(this.sea_wtt);
      console.log(this.sea_pat);
      console.log(this.sea_wut);
      console.log(this.sea_carnum);
      this.$http
        .post(
          this.$server + "/admin/getUseSum",
          {
            start_date: this.sea_date_start,
            end_date: this.sea_date_end,
            use_type: this.sea_wut,
            car_no: this.sea_carnum,
          },
          {
            headers: {
              auth_key: "c83b4631-ff58-43b9-8646-024b12193202",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          this.get_paysum = res.data;
        });
      this.$http
        .post(
          this.$server + "/admin/getUseList",
          {
            start_date: this.sea_date_start,
            end_date: this.sea_date_end,
            use_type: this.sea_wut,
            car_no: this.sea_carnum,
          },
          {
            headers: {
              auth_key: "c83b4631-ff58-43b9-8646-024b12193202",
            },
          }
        )
        .then((res) => {
          this.get_payresult = res.data;
          console.log(this.get_payresult);
          console.log(this.get_payresult.length);
          this.paginate_total = Math.ceil(
            this.get_payresult.length / this.paginate
          );
          console.log(this.paginate_total);
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
          this.$server + "/admin/getCodeSubList",
          {
            code_type: "WUT",
          },
          {
            headers: {
              auth_key: "c83b4631-ff58-43b9-8646-024b12193202",
            },
          }
        )
        .then((res) => {
          this.get_wut = res.data;
          console.log(res.data);
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
    updateCurrent: function (i) {
      this.current = i;
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
      const b = new Date();
      const year = d.getFullYear(); // 년
      const month = d.getMonth() + 1; // 월
      const day = d.getDate();
      var pastDate = b.getMonth() - 1;
      b.setDate(pastDate);
      const b_year = b.getFullYear(); // 년
      const b_month = b.getMonth(); // 월
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
      const workSheet = Xlsx.utils.json_to_sheet(this.get_payresult);
      Xlsx.utils.book_append_sheet(workBook, workSheet, "매출");
      Xlsx.writeFile(workBook, "output.xlsx");
    },
  },
};
</script>
