<template>
  <div>
    <div id="wrapper">
      <div id="container">
        <section class="sales">
          <div class="breadcrumb">
            <router-link to="/Home">HOME</router-link>
            <p>고객관리</p>
            <p>회원조회</p>
          </div>
          <div class="contents">
            <h2 class="title title_user">회원 관리</h2>
            <div class="contents_area">
              <form autocomplete="off">
                <div class="contents_area-search">
                  <!-- <div class="select MT20">
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
                      <label for="">회원구분</label>
                      <select v-model="sea_wtt">
                        <option disabled value="">회원구분 선택</option>
                        <option value="">전체</option>
                        <option
                          v-for="(info, index) in get_wtt"
                          :value="info.code"
                          :selected="index == 1"
                          :key="index"
                        >
                          {{ info.code_name }}
                        </option>
                      </select>
                    </div>
                    <div class="select_box MR30">
                      <label for="approve">회원상태</label>
                      <select name="" id="approve" v-model="sea_pat">
                        <option disabled value="">회원상태 선택</option>
                        <option value="">전체</option>
                        <option
                          v-for="(info, index) in get_pat"
                          :key="`o-${index}`"
                          :value="info.code"
                        >
                          {{ info.code_name }}
                        </option>
                      </select>
                    </div>
                  </div> -->

                  <div class="select MT40">
                    <div class="input_box">
                      <label for="number">회원명</label>
                      <input
                        type="text"
                        id=""
                        placeholder="회원명 입력"
                        class="WD180 MR20"
                        v-model="sea_carnum"
                        v-on:keydown.enter.prevent="get_search"
                      />
                    </div>
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
                    <div class="input_box">
                      <label for="number">아이디</label>
                      <input
                        type="text"
                        id=""
                        placeholder="회원아이디 입력"
                        class="WD180 MR20"
                        v-model="sea_id"
                        v-on:keydown.enter.prevent="get_search"
                      />
                    </div>
                    <div class="input_box">
                      <label for="number">연락처</label>
                      <input
                        type="text"
                        id=""
                        placeholder="010-1234-5678"
                        class="WD150 MR20"
                        v-model="sea_phonenum"
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
                    <!-- <button
                      type="button"
                      class="btn_yellow btn_excel"
                      @click="makeExcelFile5"
                    >
                      엑셀 다운로드
                    </button> -->
                  </div>
                </div>
              </form>
              <div class="contents_area-table">
                <p class="contents_area-title">
                  검색결과
                  <!-- <font class="fs14"
                    ><span>(</span> 합계 :
                    {{ return_one(get_paysum.account_fee) }} 건)</font
                  > -->
                </p>
                <!-- <p class="fl_right"><button type="button" class="btn_add btn_red" onclick="layerOpen('.layer_member_signup')">회원등록</button></p> -->

                <table>
                  <colgroup>
                    <col width="4%" />
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
                      <th class="thht">NO</th>
                      <th>회원번호</th>
                      <th>회원ID</th>
                      <th>회원명</th>
                      <th>차량 번호</th>
                      <th>차종</th>
                      <th>연락처</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(info, index) in userData"
                      v-show="setPaginate(index)"
                      :key="index"
                    >
                      <td class="right">{{ index + 1 }}</td>
                      <td class="left">
                        {{ info.usdNo }}
                      </td>
                      <td class="left">{{ info.usdId }}</td>
                      <td class="left">{{ info.usdName }}</td>
                      <td>{{ info.usdCarNo }}</td>
                      <td>{{ info.usdCarType }}</td>
                      <td>{{ info.usdTel }}</td>
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
    <!-- 쿠폰 보유 내역 -->
    <div class="layer layer_coupon is-hidden">
      <div class="inner">
        <div class="top">
          <p class="popup_title">쿠폰 보유 내역</p>
        </div>
        <div class="contents">
          <div class="coupon_area">
            <ul class="coupon">
              <li class="number">쿠폰번호 : WDC2022050401</li>
              <li class="name">쿠폰종류 : <span>Gift_BASIC 1장</span></li>
              <li class="date">유효기간 : 2022/06/03 24:00:00</li>
            </ul>
            <ul class="coupon">
              <li class="number">쿠폰번호 : WDC2022050401</li>
              <li class="name">쿠폰종류 : <span>Gift_BASIC 1장</span></li>
              <li class="date">유효기간 : 2022/06/03 24:00:00</li>
            </ul>
            <ul class="coupon">
              <li class="number">쿠폰번호 : WDC2022050401</li>
              <li class="name">쿠폰종류 : <span>Gift_BASIC 1장</span></li>
              <li class="date">유효기간 : 2022/06/03 24:00:00</li>
            </ul>
          </div>
        </div>
        <button
          type="button"
          class="btn_close"
          onclick="layerClose('.layer_coupon')"
        >
          닫기
        </button>
      </div>
    </div>
    <!-- 회원정보 수정 -->
    <div class="layer layer_member_modify is-hidden">
      <form autocomplete="off">
        <div class="inner">
          <div class="top">
            <p class="popup_title">회원정보 수정</p>
          </div>
          <div class="contents input MT20">
            <div class="input_box fl_left w200 MR10">
              <label for="number1">회원번호(수정불가)</label>
              <input
                type="text"
                id="number1"
                placeholder="회원번호 입력"
                v-model="revise.mem_no"
                disabled
              />
            </div>
            <div class="input_box fl_left w200 MB40">
              <label for="number2">회원아이디(수정불가)</label>
              <input
                type="text"
                id="number2"
                placeholder="회원아이디 입력"
                v-model="revise.mem_id"
                disabled
              />
            </div>
            <div class="select_box fl_left w200 MR10">
              <label for="">회원구분</label>
              <select v-model="revise.mem_type">
                <option value="">전체</option>
                <option
                  v-for="(info, index) in get_wtt"
                  :value="info.code"
                  :selected="index == 1"
                  :key="index"
                >
                  {{ info.code_name }}
                </option>
              </select>
            </div>
            <div class="select_box fl_left w200 MB40">
              <label for="">회원상태</label>
              <select v-model="revise.mem_status">
                <option value="">전체</option>
                <option
                  v-for="(info, index) in get_pat"
                  :value="info.code"
                  :selected="index == 1"
                  :key="index"
                >
                  {{ info.code_name }}
                </option>
              </select>
            </div>
            <div class="input_box fl_left w200 MR10">
              <label for="name">회원명</label>
              <input
                type="text"
                id="name"
                placeholder="회원명 입력"
                v-model="revise.mem_name"
              />
            </div>
            <div class="input_box fl_left w200 MB40">
              <label for="phone">연락처</label>
              <input
                type="text"
                id="phone"
                placeholder="연락처 입력"
                v-model="revise.mem_tel"
              />
            </div>
            <!-- <div class="input_box fl_left w200 MR10">
                        <label for="coupon">이메일</label>
                        <input type="text" id="coupon" value="3" class="red" disabled>
                    </div> -->
            <div class="input_box fl_left w200 MR10">
              <label for="email">이메일</label>
              <input
                type="text"
                id="email"
                placeholder="이메일 입력"
                v-model="revise.mem_email"
              />
            </div>
            <div class="input_box fl_left w200 MB50">
              <label for="compnum">사업자번호</label>
              <input type="text" id="compnum" v-model="revise.com_no" />
            </div>
            <div class="input_box fl_left w200 MR10">
              <label for="discount">Fleet 할인율(%)</label>
              <input
                type="number"
                id="discount"
                placeholder="%없이 입력"
                v-model="revise.fleet_dc"
              />
            </div>
            <div class="input_box fl_left w200 MB40">
              <label for="remain">Fleet 선불 세차 잔여수</label>
              <input
                type="number"
                id="remain"
                placeholder="잔여수 입력"
                v-model="revise.fleet_prepay"
              />
            </div>
            <div class="input_box fl_left w200 MR10">
              <label for="use">Fleet 선불 이용건수</label>
              <input
                type="number"
                id="use"
                placeholder="이용건수 입력"
                v-model="revise.fleet_prepay_use"
              />
            </div>
            <div class="input_box fl_left w200 MB50">
              <label for="join_date">회원가입일(수정불가)</label>
              <input
                type="text"
                id="join_date"
                v-model="revise.reg_date"
                disabled
              />
            </div>
          </div>
          <div class="btn_group2" style="clear: both">
            <button
              type="button"
              class="btn_white"
              onclick="layerClose('.layer_member_modify')"
            >
              취소
            </button>
            <button type="button" class="btn_blue" @click="mem_Update">
              저장
            </button>
          </div>
          <button
            type="button"
            class="btn_close"
            onclick="layerClose('.layer_member_modify')"
          >
            닫기
          </button>
        </div>
      </form>
    </div>
    <!-- 회원 등록 -->
    <div class="layer layer_member_signup is-hidden">
      <form autocomplete="off">
        <div class="inner">
          <div class="top">
            <p class="popup_title">회원 등록</p>
          </div>
          <div class="contents input MT20">
            <div class="input_box fl_left w200 MR10">
              <label for="number1">회원번호</label>
              <input type="text" id="number1" placeholder="회원번호 입력" />
            </div>
            <div class="input_box fl_left w200 MB40">
              <label for="number2">차량번호</label>
              <input type="text" id="number2" placeholder="차량번호 입력" />
            </div>
            <div class="select_box fl_left w200 MR10">
              <label for="select1">회원유형</label>
              <select name="" id="select1">
                <option value="비회원">비회원</option>
                <option value="회원">회원</option>
              </select>
            </div>
            <div class="select_box fl_left w200 MB40">
              <label for="select2">회원등급</label>
              <select name="" id="select2">
                <option value="일반">일반</option>
                <option value="선택2">선택2</option>
              </select>
            </div>
            <div class="select_box fl_left w200 MR10">
              <label for="select3">FLEET 승인</label>
              <select name="" id="select3">
                <option value="일반">승인대기</option>
                <option value="선택2">선택2</option>
              </select>
            </div>
            <div class="input_box fl_left w200 MB40">
              <label for="id">FLEET ID</label>
              <input type="text" id="id" placeholder="FLEET ID 입력" />
            </div>
            <div class="input_box fl_left w200 MB40">
              <label for="phone">휴대폰 번호</label>
              <input type="text" id="phone" placeholder="휴대폰번호 입력" />
            </div>
          </div>
          <div class="btn_group2" style="clear: both">
            <button
              type="button"
              class="btn_white"
              onclick="layerClose('.layer_member_signup')"
            >
              취소
            </button>
            <button type="button" class="btn_blue">등록</button>
          </div>
          <button
            type="button"
            class="btn_close"
            onclick="layerClose('.layer_member_signup')"
          >
            닫기
          </button>
        </div>
      </form>
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
      sea_phonenum: "",
      sea_carnum: "",
      get_paysum: "",
      get_payresult: "",
      paginate: 25,
      sea_id: "",
      paginate_total: 0,
      current: 1,
      pageCount: 10, // 페이지 버튼 최대 개수
      get_memdetail: "",
      revise: {
        mem_no: "",
        mem_id: "",
        mem_type: "",
        mem_status: "",
        mem_name: "",
        mem_tel: "",
        mem_email: "",
        com_no: "",
        fleet_dc: "",
        fleet_prepay: "",
        fleet_prepay_use: "",
        reg_date: "",
        seq_no: "",
        index: "",
        t_name: "",
        s_name: "",
      },
      // test
      userData: [],
      usdCarNo: "",
      usdCarType: "",
      usdId: "",
      usdName: "",
      usdNo: "",
      usdStatus: "",
      usdTel: "",
    };
  },
  created() {
    // this.get_select();
    // this.set_yes();
    // this.get_search();
    this.getList();
  },
  methods: {
    get_search() {
      if (this.sea_date_start > this.sea_date_end) {
        alert("날짜 선택이 잘못되었습니다.");
        return false;
      }
      this.current = 1;
      this.get_payresult = "";
      console.log(this.sea_date_start);
      console.log(this.sea_date_end);
      // console.log(this.sea_wtt);
      // console.log(this.sea_pat);
      // console.log(this.sea_id);
      // console.log(this.sea_carnum);
      // console.log(this.sea_phonenum);

      this.$axios
        .post(
          this.$server + "/admin/getMemSum",
          {
            start_date: this.sea_date_start,
            end_date: this.sea_date_end,
            mem_type: this.sea_wtt,
            mem_status: this.sea_pat,
            mem_id: this.sea_id,
            car_no: this.sea_carnum,
            mem_tel: this.sea_phonenum,
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
      this.$axios
        .post(
          this.$server + "/admin/getMemList",
          {
            start_date: this.sea_date_start,
            end_date: this.sea_date_end,
            mem_type: this.sea_wtt,
            mem_status: this.sea_pat,
            mem_id: this.sea_id,
            car_no: this.sea_carnum,
            mem_tel: this.sea_phonenum,
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
      this.$axios
        .post(
          this.$server + "/admin/getCodeSubList",
          {
            code_type: "MMT",
          },
          {
            headers: {
              auth_key: "c83b4631-ff58-43b9-8646-024b12193202",
            },
          }
        )
        .then((res) => {
          this.get_wtt = res.data;
          console.log(typeof this.get_wtt);
        });
      this.$axios
        .post(
          this.$server + "/admin/getCodeSubList",
          {
            code_type: "MMS",
          },
          {
            headers: {
              auth_key: "c83b4631-ff58-43b9-8646-024b12193202",
            },
          }
        )
        .then((res) => {
          this.get_pat = res.data;
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
    setReviseInfo(seq_no, index) {
      this.revise.index = index;
      this.$axios
        .post(
          this.$server + "/admin/getMemDetail",
          {
            seq_no: seq_no,
          },
          {
            headers: {
              auth_key: "c83b4631-ff58-43b9-8646-024b12193202",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          this.get_memdetail = res.data;
          this.revise.mem_no = this.get_memdetail.mem_no;
          this.revise.mem_id = this.get_memdetail.mem_id;
          this.revise.mem_type = this.get_memdetail.mem_type;
          this.revise.mem_status = this.get_memdetail.mem_status;
          this.revise.mem_name = this.get_memdetail.mem_name;
          this.revise.mem_tel = this.get_memdetail.mem_tel;
          this.revise.mem_email = this.get_memdetail.mem_email;
          this.revise.com_no = this.get_memdetail.com_no;
          this.revise.fleet_dc = this.get_memdetail.fleet_dc;
          this.revise.fleet_prepay = this.get_memdetail.fleet_prepay;
          this.revise.fleet_prepay_use = this.get_memdetail.fleet_prepay_use;
          this.revise.reg_date = this.get_memdetail.reg_date;
          this.revise.seq_no = seq_no;
        });
    },
    mem_Update() {
      console.log(this.revise.mem_type);
      console.log(this.revise.mem_status);
      if (this.revise.mem_type == "MMT") {
        alert("회원구분을 선택해주세요.");
        return false;
      }
      if (this.revise.mem_status == "MMS") {
        alert("회원상태를 선택해주세요.");
        return false;
      }
      if (!this.revise.mem_name) {
        alert("회원명을 입력해주세요.");
        return false;
      }
      if (!this.revise.mem_tel) {
        alert("연락처를 입력해주세요.");
        return false;
      }
      if (this.revise.mem_type != "MMT001") {
        if (!this.revise.mem_email) {
          alert("이메일을 입력해주세요.");
          return false;
        }
        if (!this.revise.com_no) {
          alert("사업자번호를 입력해주세요.");
          return false;
        }
        if (!this.revise.fleet_dc) {
          alert("Fleet 할인율을 입력해주세요.");
          return false;
        }
        if (!this.revise.fleet_prepay) {
          alert("Fleet 선불 세차 잔여수를 입력해주세요.");
          return false;
        }
        if (!this.revise.fleet_prepay_use) {
          alert("Fleet선불 이용건수를 입력해주세요.");
          return false;
        }
      }
      var result = confirm("수정하시겠습니까?");
      if (result) {
        this.$axios
          .post(
            this.$server + "/admin/setUpdateMem",
            {
              mem_type: this.revise.mem_type,
              mem_status: this.revise.mem_status,
              mem_name: this.revise.mem_name,
              mem_tel: this.revise.mem_tel,
              mem_email: this.revise.mem_email,
              com_no: this.revise.com_no,
              fleet_dc: this.revise.fleet_dc,
              fleet_prepay: this.revise.fleet_prepay,
              fleet_prepay_use: this.revise.fleet_prepay_use,
              seq_no: this.revise.seq_no,
            },
            {
              headers: {
                auth_key: "c83b4631-ff58-43b9-8646-024b12193202",
              },
            }
          )
          .then((res) => {
            console.log(res.data);
            if (res.data.result_code == "Y") {
              alert("회원정보 수정이 완료되었습니다.");
              for (var i = 0; i < this.get_wtt.length; i++) {
                if (this.get_wtt[i].code == this.revise.mem_type)
                  this.revise.t_name = this.get_wtt[i].code_name;
              }
              for (var j = 0; j < this.get_pat.length; j++) {
                if (this.get_pat[i].code == this.revise.mem_status)
                  this.revise.s_name = this.get_pat[i].code_name;
              }
              this.get_payresult[this.revise.index].mem_name =
                this.revise.mem_name;
              this.get_payresult[this.revise.index].mem_status =
                this.revise.s_name;
              this.get_payresult[this.revise.index].mem_type =
                this.revise.t_name;
              this.get_payresult[this.revise.index].mem_tel =
                this.revise.mem_tel;
              this.get_payresult[this.revise.index].fleet_dc =
                this.revise.fleet_dc;
              this.get_payresult[this.revise.index].fleet_prepay =
                this.revise.fleet_prepay;
              // $('.layer_member_modify').removeClass('is-open').addClass('is-hidden');
              // $('body').removeClass('layer-opens');
              return false;
            }
          });
      }
    },
    getList() {
      console.log(this.$devServer);
      this.$axios
        .post(this.$devServer + "/admin/user", {
          headers: {
            auth_key: "c83b4631-ff58-43b9-8646-024b12193202",
          },
        })
        .then((res) => {
          // console.log(res.data);
          this.userData = res.data;
          console.log(this.userData);
        });
    },
  },
};
</script>
