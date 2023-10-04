<template>
  <div>
    <div id="wrapper">
      <div id="container">
        <section class="main">
          <div class="breadcrumb">
            <router-link to="/Home">HOME</router-link>
            <!-- <p>대출관리</p>
                    <p>매출관리</p> -->
          </div>
          <div class="contents">
            <h2 class="title">HOME</h2>
            <div class="contents_area" style="height: 75vh">
              <Map />
              <!-- <div class="first" style="margin-bottom: 50px">
                <div>
                  <p class="contents_area-title" style="width: 100%">
                    당일 매출 현황 {{ get_today() }}
                    <a style="font-size: 25px; height: 100%; float: right"
                      >{{ get_real(one_data.today_pay_amount) }} 원/
                      {{ one_data.today_pay_count }} 건</a
                    >
                  </p>
                  <div class="contents_area-article">
                    <bar-chart
                      v-if="chartData_timesale.loaded"
                      :chart-data="chartData_timesale"
                      :chart-options="chartOptions"
                    ></bar-chart>
                  </div>
                </div>
                <div>
                  <p class="contents_area-title" style="width: 100%">
                    당월 매출 현황 {{ get_month() }}
                    <a style="font-size: 25px; height: 100%; float: right"
                      >{{ get_real(one_data.month_pay_amount) }} 원/
                      {{ one_data.month_pay_count }} 건</a
                    >
                  </p>
                  <div class="contents_area-article">
                    <bar-chart
                      v-if="chartData_daysale.loaded"
                      :chart-data="chartData_daysale"
                      :chart-options="chartOptions"
                    ></bar-chart>
                  </div>
                </div>
              </div>
              <div class="second">
                <div>
                  <p class="contents_area-title" style="width: 100%">
                    당일 이용 현황 {{ get_today() }}
                    <a style="font-size: 25px; height: 100%; float: right"
                      >{{ get_real(one_data.today_use_amount) }} 원/
                      {{ one_data.today_use_count }} 건</a
                    >
                  </p>
                  <div class="contents_area-article">
                    <bar-chart
                      v-if="chartData_timeuse.loaded"
                      :chart-data="chartData_timeuse"
                      :chart-options="chartOptions"
                    ></bar-chart>
                  </div>
                </div>
                <div>
                  <p class="contents_area-title">공지사항</p>
                  <div class="contents_area-article notice">
                    <a v-for="(info, index) in notice_data" :key="index">
                      <router-link to="/Customer06">
                        <p>{{ info.title }}</p>
                        <p>{{ info.wirte_date }}</p>
                      </router-link>
                    </a>
                  </div>
                  <router-link to="/Customer06"
                    ><button type="button" class="btn_more">
                      더보기
                    </button></router-link
                  >
                </div>
              </div> -->
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
// import BarChart from "./Bar.vue";
import Map from "../map/KakaoMap.vue";
export default {
  components: {
    // BarChart,
    Map,
  },
  data() {
    return {
      one_data: [],
      notice_data: [],
      chartData_timesale: {
        loaded: false,
        labels: [],
        datasets: [
          {
            label: "당일 매출 현황",
            backgroundColor: "#f87979",
            data: [],
          },
        ],
      },
      chartData_daysale: {
        loaded: false,
        labels: [],
        datasets: [
          {
            label: "당월 매출 현황",
            backgroundColor: "#f87979",
            data: [],
          },
        ],
      },
      chartData_timeuse: {
        loaded: false,
        labels: [],
        datasets: [
          {
            label: "당일 이용 현황",
            backgroundColor: "#f87979",
            data: [],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  mounted() {
    this.chartData_timesale.loaded = false;
    this.chartData_daysale.loaded = false;
    this.chartData_timeuse.loaded = false;
    // this.get_one();
    // this.get_notice();
    // this.get_timesale();
    // this.get_daysale();
    // this.get_timeuse();
  },
  methods: {
    get_timesale() {
      this.$http
        .post(
          this.$server + "/admin/getStaticsTimeSale",
          {},
          {
            headers: {
              auth_key: "c83b4631-ff58-43b9-8646-024b12193202",
            },
          }
        )
        .then((res) => {
          for (var i = 0; i < res.data.length; i++) {
            this.chartData_timesale.labels.push(res.data[i].time_hour + "시");
            this.chartData_timesale.datasets[0].data.push(
              res.data[i].time_amount
            );
          }
          this.chartData_timesale.loaded = true;
        });
    },
    get_daysale() {
      this.$http
        .post(
          this.$server + "/admin/getStaticsDaySale",
          {},
          {
            headers: {
              auth_key: "c83b4631-ff58-43b9-8646-024b12193202",
            },
          }
        )
        .then((res) => {
          for (var i = 0; i < res.data.length; i++) {
            this.chartData_daysale.labels.push(res.data[i].day_date);
            this.chartData_daysale.datasets[0].data.push(
              res.data[i].day_amount
            );
          }
          this.chartData_daysale.loaded = true;
        });
    },
    get_timeuse() {
      this.$http
        .post(
          this.$server + "/admin/getStaticsTimeUse",
          {},
          {
            headers: {
              auth_key: "c83b4631-ff58-43b9-8646-024b12193202",
            },
          }
        )
        .then((res) => {
          for (var i = 0; i < res.data.length; i++) {
            this.chartData_timeuse.labels.push(res.data[i].time_hour + "시");
            this.chartData_timeuse.datasets[0].data.push(res.data[i].time_use);
          }
          this.chartData_timeuse.loaded = true;
        });
    },
    get_real(on_num) {
      if (on_num != undefined) {
        const parts = on_num.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
      }
    },
    get_one() {
      this.$http
        .post(
          this.$server + "/admin/getStatic",
          {},
          {
            headers: {
              auth_key: "c83b4631-ff58-43b9-8646-024b12193202",
            },
          }
        )
        .then((res) => {
          this.one_data = res.data;
        });
    },
    get_notice() {
      this.$http
        .post(
          this.$server + "/admin/getNoticeMain",
          {
            list_count: "6",
          },
          {
            headers: {
              auth_key: "c83b4631-ff58-43b9-8646-024b12193202",
            },
          }
        )
        .then((res) => {
          this.notice_data = res.data;
        });
    },
    get_today() {
      const d = new Date();
      const year = d.getFullYear(); // 년
      const month = d.getMonth() + 1; // 월
      const day = d.getDate();
      return "(" + year + "년 " + month + "월 " + day + "일 현재)";
    },
    get_month() {
      const d = new Date();
      const year = d.getFullYear(); // 년
      const month = d.getMonth() + 1; // 월
      // const day = d.getDate();
      return "(" + year + "년 " + month + "월 현재)";
    },
  },
};
</script>
