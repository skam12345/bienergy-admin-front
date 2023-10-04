<template>
  <div>
    <div id="wrapper">
      <div id="container">
        <section class="sales">
          <div class="breadcrumb">
            <router-link to="/Home">HOME</router-link>
            <p>상품관리</p>
            <p>상품조회</p>
          </div>
          <div class="contents">
            <h2 class="title title_user">상품조회</h2>
            <div class="contents_area">
              <form autocomplete="off">
                <div class="contents_area-search">
                  <div class="select MT20">
                    <div class="select_box MR30">
                      <label for="">상품분류</label>
                      <select v-model="see_test">
                        <option value="">전체</option>
                        <option
                          v-for="(info, index) in get_pgc"
                          :value="info.code"
                          :selected="index == 1"
                          :key="index"
                        >
                          {{ info.code_name }}
                        </option>
                      </select>
                    </div>
                    <div class="select_box MR30">
                      <label for="">1회권 메뉴</label>
                      <select v-model="see_prod">
                        <option value="0">전체</option>
                        <option
                          v-for="(info, index) in get_prod"
                          :value="info.prod_code"
                          :selected="index == 1"
                          :key="index"
                        >
                          {{ info.prod_name }}
                        </option>
                      </select>
                    </div>
                    <div class="select_box MR30">
                      <label for="approve">사용여부</label>
                      <select name="" id="approve" v-model="see_yn">
                        <option value="">전체</option>
                        <option value="Y">사용가능</option>
                        <option value="N">사용불가</option>
                      </select>
                    </div>
                    <button
                      type="button"
                      class="btn_blue btn_search ML10 MR20"
                      @click="get_search"
                    >
                      조회
                    </button>
                  </div>
                </div>
              </form>
              <div class="contents_area-table">
                <p class="contents_area-title">
                  검색결과
                  <font class="fs14"
                    ><span>(</span> 합계 :
                    {{ get_paysum.account_product }} 건)</font
                  >
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
                    <col width="" />
                    <col width="" />
                    <col width="" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th class="thht">NO</th>
                      <th>메뉴명</th>
                      <th>상품구분</th>
                      <th>상품요금</th>
                      <th>사용여부</th>
                      <th>Fleet선불할인</th>
                      <th>등록일자</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(info, index) in get_payresult"
                      v-show="setPaginate(index)"
                      :key="index"
                    >
                      <td class="right">{{ get_payresult.length - index }}</td>
                      <td>
                        <a
                          href="javascript:void(0);"
                          onclick="layerOpen('.layer_member_modify')"
                          @click="setReviseInfo(info.seq_no)"
                          >{{ info.prod_name }}</a
                        >
                      </td>
                      <td>{{ info.prod_type }}</td>
                      <!-- <td v-if="info.is_brush=='Y'">사용</td>
                                        <td v-if="info.is_brush=='N'">미사용</td> -->
                      <td class="right">{{ return_one(info.prod_fee) }}</td>
                      <td>{{ info.is_use }}</td>
                      <td class="right">{{ return_one(info.dc_fee) }}</td>
                      <td>{{ info.reg_date }}</td>
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
    <!-- 상품수정 -->
    <div class="layer layer_member_modify is-hidden">
      <form autocomplete="off">
        <div class="inner">
          <div class="top">
            <p class="popup_title">상품수정</p>
          </div>
          <div class="contents input">
            <div class="input_box MT40">
              <label for="name">메뉴명</label>
              <input
                type="text"
                id="name1"
                v-model="revise.prod_name"
                placeholder="메뉴명 입력"
              />
              <!-- <span class="MT40">*에러메시지</span> -->
            </div>
          </div>
          <div class="contents input MT20">
            <div class="input_box fl_left w200 MR10">
              <label for="number1">상품요금</label>
              <input
                type="text"
                id="number1"
                placeholder="상품 요금 입력"
                v-model="revise.prod_fee"
              />
            </div>
            <div class="input_box fl_left w200 MB40">
              <label for="number2">fleet선불할인요금</label>
              <input
                type="text"
                id="number2"
                placeholder="fleet선불할인 요금"
                v-model="revise.dc_fee"
              />
            </div>
            <div class="select_box fl_left w200 MR10">
              <label for="">상품구분(수정불가)</label>
              <select v-model="revise.prod_type" disabled>
                <option value="">전체</option>
                <option
                  v-for="(info, index) in get_pgc"
                  :value="info.code"
                  :selected="index == 1"
                  :key="index"
                >
                  {{ info.code_name }}
                </option>
              </select>
            </div>
            <div class="select_box fl_left w200 MB40">
              <label for="">사용여부</label>
              <select v-model="revise.is_use">
                <option value="Y">사용</option>
                <option value="N">미사용</option>
              </select>
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
            <button type="button" class="btn_blue" @click="prod_Update">
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
  </div>
</template>
<script>
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
      get_pgc: "",
      get_prod: "",
      see_test: "",
      see_prod: "0",
      see_yn: "",
      get_paysum: "",
      get_payresult: "",
      paginate: 25,
      sea_id: "",
      paginate_total: 0,
      current: 1,
      pageCount: 10, // 페이지 버튼 최대 개수
      get_memdetail: "",
      revise: {
        prod_name: "",
        prod_fee: "",
        dc_fee: "",
        prod_type: "",
        is_use: "",
        seq_no: "",
      },
    };
  },
  created() {
    this.get_select();
    this.get_search();
  },
  methods: {
    get_search() {
      this.current = 1;
      this.get_payresult = "";
      this.$http
        .post(
          this.$server + "/admin/getProdSum",
          {
            prod_type: this.see_test,
            menu_type: this.see_prod,
            is_use: this.see_yn,
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
          this.$server + "/admin/getProdList",
          {
            prod_type: this.see_test,
            menu_type: this.see_prod,
            is_use: this.see_yn,
          },
          {
            headers: {
              auth_key: "c83b4631-ff58-43b9-8646-024b12193202",
            },
          }
        )
        .then((res) => {
          this.get_payresult = res.data;
          console.log(res.data);
          this.paginate_total = Math.ceil(
            this.get_payresult.length / this.paginate
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
          this.$server + "/admin/getCodeSubList",
          {
            code_type: "PGC",
          },
          {
            headers: {
              auth_key: "c83b4631-ff58-43b9-8646-024b12193202",
            },
          }
        )
        .then((res) => {
          this.get_pgc = res.data;
          console.log(this.get_pgc);
        });
      this.$http
        .post(
          this.$server + "/admin/getProdMenuList",
          {},
          {
            headers: {
              auth_key: "c83b4631-ff58-43b9-8646-024b12193202",
            },
          }
        )
        .then((res) => {
          this.get_prod = res.data;
          console.log(this.get_prod);
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
    setReviseInfo(seq_no) {
      this.$http
        .post(
          this.$server + "/admin/getProdDetail",
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
          this.revise.prod_name = this.get_memdetail.prod_name;
          this.revise.prod_type = this.get_memdetail.prod_type;
          this.revise.prod_fee = this.get_memdetail.prod_fee;
          this.revise.is_use = this.get_memdetail.is_use;
          this.revise.dc_fee = this.get_memdetail.dc_fee;
          this.revise.seq_no = seq_no;
        });
    },
    prod_Update() {
      if (this.revise.use_status == "MUS") {
        alert("이용상태를 선택해주세요.");
        return false;
      }
      var result = confirm("수정하시겠습니까?");
      if (result) {
        this.$http
          .post(
            this.$server + "/admin/setprodupdate",
            {
              prod_name: this.revise.prod_name,
              prod_fee: this.revise.prod_fee,
              is_use: this.revise.is_use,
              dc_fee: this.revise.dc_fee,
              seq_no: this.revise.seq_no,
            },
            {
              headers: {
                auth_key: "c83b4631-ff58-43b9-8646-024b12193202",
              },
            }
          )
          .then((res) => {
            if (res.data.result_code == "Y") {
              // eslint-disable-next-line no-undef
              layerClose(".layer_member_modify");
              this.get_select();
            }
          });
      }
    },
  },
};
</script>
