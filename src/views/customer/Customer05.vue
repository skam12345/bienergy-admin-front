<template>
  <div>
    <div id="wrapper">
      <div class="waiting" v-if="waiting">
        <img
          src="../../assets/images/ZombieingDoodle.png"
          class="bored-image"
        />
        <div class="waiting-notice">
          <img src="../../assets/images/sync.svg" class="sync-image" />
          처리중입니다.. 잠시만 기다려주세요.
        </div>
      </div>
      <div id="container">
        <section class="sales">
          <div class="breadcrumb">
            <router-link to="/Home">HOME</router-link>
            <p>고객관리</p>
            <p>멤버쉽알림톡발송</p>
          </div>
          <div class="contents">
            <h2 class="title title_user">멤버쉽알림톡발송</h2>
            <div class="contents_area">
              <form autocomplete="off">
                <div class="contents_area-search">
                  <div class="select MT20">
                    <div class="input_box date">
                      <label for="start">결제일자</label>
                      <input type="date" id="start" v-model="sea_date_start" />
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
                  검색결과 <font class="fs14"></font>
                </p>
                <!-- <p class="fl_right"><button type="button" class="btn_add btn_red" onclick="layerOpen('.layer_member_signup')">회원등록</button></p> -->
                <p class="btnRight">
                  <button
                    type="button"
                    class="btn_red"
                    @click="Alarm_Talk"
                    style="padding: 0px"
                  >
                    알림톡보내기
                  </button>
                </p>

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
                  </colgroup>
                  <thead>
                    <tr>
                      <th class="thht">NO</th>
                      <th>차량번호</th>
                      <th>회원번호</th>
                      <th>세차메뉴</th>
                      <th>건조브러쉬</th>
                      <th>결제금액</th>
                      <th>결제일</th>
                      <th>휴대폰</th>
                      <th>결제단말기</th>
                      <th>최종결제일자</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(info, index) in get_payresult"
                      v-show="setPaginate(index)"
                      :key="index"
                    >
                      <td class="right">{{ get_payresult.length - index }}</td>
                      <td class="left">
                        <a href="javascript:void(0);">{{ info.car_no }}</a>
                      </td>
                      <td class="left">{{ info.mem_no }}</td>
                      <td class="left">{{ info.prod_name }}</td>
                      <td v-if="info.is_brush == 'Y'">사용</td>
                      <td v-if="info.is_brush == 'N'">미사용</td>
                      <td class="right">{{ return_one(info.pay_fee) }}</td>
                      <td class="right">{{ info.pay_day }}일</td>
                      <td>{{ info.phone_no }}</td>
                      <td class="right">{{ info.terminal_name }}</td>
                      <td>{{ info.pay_date }}</td>
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
      sea_date_start: "",
      get_payresult: "",
      paginate: 25,
      paginate_total: 0,
      current: 1,
      pageCount: 10, // 페이지 버튼 최대 개수
      waiting: false,
      send_alarm: 0,
      seq: "",
    };
  },
  created() {
    this.set_today();
    this.get_search();
  },
  methods: {
    get_search() {
      if (this.sea_date_start.length == 0) {
        alert("날짜를 선택해주세요.");
        return false;
      }
      this.current = 1;
      this.get_payresult = "";
      this.$http
        .post(
          this.$server + "/admin/getMembershipSnsList",
          {
            search_date: this.sea_date_start,
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
      d.setDate(d.getDate() + 8);
      this.sea_date_start = d.toISOString().substr(0, 10);
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
    Alarm_Talk() {
      var result = confirm(
        this.get_payresult.length + "건을 알림톡발송 하시겠습니까?"
      );
      if (result) {
        this.waiting = true;
        for (var i = 0; i < this.get_payresult.length; i++) {
          var refresh = new Date(this.get_payresult[i].pay_date);
          var end_update = new Date(this.get_payresult[i].pay_date);
          refresh.setMonth(refresh.getMonth() + 1);
          refresh = refresh.toISOString().substr(0, 10);
          end_update.setMonth(end_update.getMonth() + 2);
          end_update = end_update.toISOString().substr(0, 10);
          this.seq = i;
          if (this.get_payresult[i].phone_no) {
            this.$http
              .post(
                "https://app.sparkpluswash.com:9000/biztalk/before7Days",
                {
                  car_no: this.get_payresult[this.seq].car_no,
                  get_date: this.get_payresult[this.seq].pay_date,
                  pay_product: this.get_payresult[this.seq].prod_name,
                  option_product: "",
                  update_date: refresh,
                  start_date: refresh,
                  end_date: end_update,
                  phone_no: this.get_payresult[this.seq].phone_no,
                  membership_pay: this.get_payresult[this.seq].pay_fee,
                  membership_end_date: refresh,
                },
                {
                  headers: {
                    auth_key: "c83b4631-ff58-43b9-8646-024b12193202",
                  },
                }
              )
              .then(() => {
                this.send_alarm++;
                if (this.seq == this.get_payresult.length - 1) {
                  this.waiting = false;
                  alert(this.send_alarm + "건을 발송처리 되었습니다.");
                  location.reload();
                }
              });
          }
        }

        //모든 전송 끝
      }
    },
  },
};
</script>
<style>
.waiting {
  position: fixed;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 100;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.8);
  text-align: center;
}
.bored-image {
  margin-top: 15vh;
  width: 30rem;
  animation: rotateFlip 0.5s infinite steps(2);
}
.sync-image {
  width: 1rem;
  animation: rotation 2s infinite linear;
  margin-right: 0.5rem;
}
.waiting-notice {
  position: absolute;
  bottom: 10rem;
  left: 50%;
  transform: translate(-50%, 0px);
  color: white;
  background: #5f5fff;
  padding: 1rem 2.5rem 1rem 2rem;
  border-radius: 0.5rem;
}
@keyframes rotation {
  from {
    transform: rotate(359deg);
  }
  to {
    transform: rotate(0deg);
  }
}
@keyframes rotateFlip {
  from {
    transform: rotate(10deg);
  }
  to {
    transform: rotate(-10deg);
  }
}
</style>
