<template>
  <div>
    <div id="wrapper">
      <div id="container">
        <section class="sales">
          <div class="breadcrumb">
            <router-link to="/Home">HOME</router-link>
            <p>프로모션</p>
            <p>프로모션 관리</p>
          </div>
          <div class="contents">
            <h2 class="title title_prom">프로모션 관리</h2>
            <div class="contents_area">
              <form
                autocomplete="off"
                v-on:keydown.enter.prevent="search_notice"
              >
                <div class="contents_area-search">
                  <select v-model="search_for">
                    <option value="1" selected>제목</option>
                  </select>
                  <input
                    type="text"
                    id=""
                    v-model="search_info"
                    placeholder="검색어 입력"
                    class="WD250 MR10"
                  />

                  <button
                    type="button"
                    @click="search_notice"
                    class="btn_blue btn_search"
                  >
                    조회
                  </button>
                </div>
              </form>
              <div class="contents_area-table">
                <p class="contents_area-title">
                  검색결과
                  <font class="fs14"
                    ><span>(</span>{{ return_sum.account_fee
                    }}<span>건)</span></font
                  >
                </p>

                <!-- <p class="btnRight">
                            <button type="button" class="btn_blue">삭제</button>
                            <button type="button" class="btn_add btn_red" onclick="layerOpen('.layer_member_signup')">프로모션 등록</button>
                            </p>
                             -->
                <table>
                  <colgroup>
                    <col width="4%" />
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
                      <th>제목</th>
                      <th>시작일자</th>
                      <th>종료일자</th>
                      <th>서비스상태</th>
                      <th>프로모션구분</th>
                      <th>등록일</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(info, index) in return_result"
                      v-show="setPaginate(index)"
                      :key="index"
                    >
                      <td>{{ return_result.length - index }}</td>
                      <td>
                        <a
                          style="color: inherit"
                          href="javascript:void(0)"
                          onclick="layerOpen('.layer_member_modify')"
                          @click="get_promotionDetail(info.seq_no)"
                          >{{ info.prom_title }}</a
                        >
                      </td>
                      <td>{{ info.start_date }}</td>
                      <td>{{ info.end_date }}</td>
                      <td>{{ info.is_use }}</td>
                      <td>{{ info.prom_type_name }}</td>
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

    <!-- 프로모션 등록 -->
    <div class="layer layer_member_signup is-hidden">
      <form autocomplete="off">
        <div class="inner">
          <div class="top">
            <p class="popup_title">프로모션 등록</p>
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

    <!-- 프로모션 수정 -->
    <div class="layer layer_member_modify is-hidden">
      <form autocomplete="off">
        <div class="inner WD600">
          <div class="top">
            <p class="popup_title">프로모션 수정</p>
          </div>
          <div class="contents input MT20">
            <div class="input_box MR10">
              <label for="name">프로모션명</label>
              <input
                type="text"
                id="name"
                placeholder="프로모션 명 입력"
                v-model="mod_prom_name"
              />
            </div>
            <div class="input_box fl_left w200 MB40 MT40">
              <label for="number2">시작일자</label>
              <input type="date" id="startDate" v-model="mod_prom_startDate" />
            </div>
            <div class="input_box fl_left w200 MR10 MB40 MT40">
              <label for="number2">종료일자</label>
              <input type="date" id="endDate" v-model="mod_prom_endDate" />
            </div>
            <div class="input_box fl_left w200 MB40">
              <label for="service">서비스상태</label>
              <select name="" id="service" v-model="mod_prom_is_use">
                <option value="Y">사용</option>
                <option value="N">미사용</option>
              </select>
            </div>
            <div class="input_box fl_left w200 MB40">
              <label for="id">프로모션구분</label>
              <select name="" id="select1" v-model="mod_prom_type">
                <option
                  v-for="(info, index) in get_type"
                  :value="info.code"
                  :key="index"
                >
                  {{ info.code_name }}
                </option>
              </select>
            </div>
            <div class="textarea clear MB40">
              <label for="content">프로모션 내용</label>
              <textarea
                style="width: 400px; height: 120px"
                name=""
                id="content"
                v-model="mod_prom_content"
                placeholder="내용 입력"
              ></textarea>
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
            <button type="button" class="btn_blue" @click="set_promotionUpdate">
              등록
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
      search_for: 1,
      search_info: "",
      return_sum: "",
      return_result: "",
      paginate_total: 0,
      current: 1,
      pageCount: 10,
      paginate: 25,
      mod_prom_name: "",
      mod_prom_startDate: "",
      mod_prom_endDate: "",
      mod_prom_is_use: "",
      mod_prom_type: "",
      mod_prom_content: "",
      mod_seq_no: "",
      get_isuse: "",
      get_type: "",
    };
  },
  mounted() {
    this.search_notice();
    this.get_select();
  },
  methods: {
    get_select() {
      this.$http
        .post(
          this.$server + "/admin/getCodeSubList",
          {
            code_type: "PMT",
          },
          {
            headers: {
              auth_key: "c83b4631-ff58-43b9-8646-024b12193202",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          this.get_type = res.data;
        });
    },
    search_notice: function () {
      if (this.search_for == 1) {
        this.$http
          .post(
            this.$server + "/admin/getPromotionSum",
            {
              title: this.search_info,
            },
            {
              headers: {
                auth_key: "c83b4631-ff58-43b9-8646-024b12193202",
              },
            }
          )
          .then((res) => {
            this.return_sum = res.data;
            console.log(this.return_sum);
          });

        this.$http
          .post(
            this.$server + "/admin/getPromotionList",
            {
              title: this.search_info,
            },
            {
              headers: {
                auth_key: "c83b4631-ff58-43b9-8646-024b12193202",
              },
            }
          )
          .then((res) => {
            console.log(res.data);
            this.return_result = res.data;
            this.paginate_total = Math.ceil(
              this.return_result.length / this.paginate
            );
          });
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
    return_one: function (on_num) {
      if (on_num != undefined) {
        const parts = on_num.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
      }
    },
    get_promotionDetail(seq_no) {
      this.mod_seq_no = seq_no;
      this.$http
        .post(
          this.$server + "/admin/getPromotionDetail",
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
          this.mod_prom_name = res.data.prom_title;
          this.mod_prom_startDate = res.data.start_date;
          this.mod_prom_endDate = res.data.end_date;
          this.mod_prom_is_use = res.data.is_use;
          this.mod_prom_type = res.data.prom_type;
          this.mod_prom_content = String(res.data.prom_contents).replace(
            /,+/g,
            "\n"
          );
        });
    },
    set_promotionUpdate() {
      if (!this.mod_prom_name) {
        alert("제목을 입력하세요.");
        return false;
      }
      if (!this.mod_prom_content) {
        alert("내용을 입력하세요.");
        return false;
      }
      console.log(this.mod_prom_name);
      console.log(this.mod_prom_startDate);
      console.log(this.mod_prom_endDate);
      console.log(this.mod_prom_is_use);
      console.log(this.mod_prom_type);
      console.log(this.mod_prom_content);
      console.log(this.mod_seq_no);
      var result = confirm("프로모션을 수정하시겠습니까?");
      if (result) {
        this.$http
          .post(
            this.$server + "/admin/setPromotionUpdate",
            {
              prom_title: this.mod_prom_name,
              start_date: this.mod_prom_startDate,
              end_date: this.mod_prom_endDate,
              is_use: this.mod_prom_is_use,
              prom_type: this.mod_prom_type,
              prom_contents: this.mod_prom_content,
              seq_no: this.mod_seq_no,
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
              alert("수정되었습니다.");
              location.reload();
              // $('.layer_member_modify').removeClass('is-open').addClass('is-hidden');
              // $('body').removeClass('layer-opens');
              return false;
            }
          });
      }
    },
  },
};
</script>
<style>
input[type="date"]::-webkit-calendar-picker-indicator {
  content: "";
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: 10px;
  width: 22px;
  height: 22px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ4OCwgMjAyMC8wNy8xMC0yMjowNjo1MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjcyNjIyMTA0QzVGRjExRUM4RUE4RTVCNEQ0QTY5NDlGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjcyNjIyMTA1QzVGRjExRUM4RUE4RTVCNEQ0QTY5NDlGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzI2MjIxMDJDNUZGMTFFQzhFQThFNUI0RDRBNjk0OUYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzI2MjIxMDNDNUZGMTFFQzhFQThFNUI0RDRBNjk0OUYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4ye1d3AAAA3UlEQVR42mL8//9/AwMNABMDjQBOg6cv2pGPTyMheZwG//j5WwCfRkLyjKAwPnv5nsqJczf9f/36w0Ou19nYWL5YGKlvNNZVugPis4AIkKEOljqrtdVkH5Fr8NVbj+UOHL8SCjS4Fx4UIJdSYigIgPQj+5hmqYIFxuifvbmeJgYXpvo2UmoYsuPon0HwuWZAszQLKS6FsYmJD4IGwwwBGUpKBA985JGaHGnrYlDJBCpEKDEIqF+WjZXlC0rkAYu7TQeOXQnddfAC2cUmOxvrZwtj9U0o5fGQqvMAAgwAH2xcHlOBD2QAAAAASUVORK5CYII=)
    no-repeat center/100% auto;
}
</style>
