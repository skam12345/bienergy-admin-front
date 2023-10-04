<template>
  <div class="popup_cont" @click="close()">
    <div class="popup_contents_cont">
      <div class="close_btn" @click="close()"></div>
      <!-- <div class="popup_contents_img_cont">
        <div class="popup_contents_img"></div>
      </div>
      <div class="popup_contents_text">{{ message }}</div>
      <div class="popup_contents_btn_cont">
        <div class="popup_contents_btn" @click="close()">확인</div>
      </div> -->
      <div style="width: 100%; height: 100%">
        <div>
          <div id="bottomSheet" style="height: 55rem; bottom: 10%">
            <div class="bottom-sheet">
              <h3
                style="
                  color: rgb(2, 100, 253);
                  padding-bottom: 2%;
                  font-size: 170%;
                "
              >
                충전가능
              </h3>
              <h1 style="font-size: 230%">서교동 주민센터 전기차충전소</h1>
              <div style="display: flex">
                <div class="coordinate"></div>
                <p
                  style="
                    display: flex;
                    padding-left: 2%;
                    font-size: 130%;
                    margin-bottom: 5%;
                  "
                >
                  서울 서초구 사임당로 89 서초1동주민센터 <br />지번: 서초동
                  1649-5
                </p>
              </div>
              <div
                style="
                  display: flex;
                  border-style: solid;
                  width: 95%;
                  height: 7rem;
                  border-radius: 1rem;
                  border-color: rgb(235, 236, 240);
                "
              >
                <div class="charger-icon">
                  <div class="charger-icon1"></div>
                  <div>DC콤보</div>
                </div>
                <div class="charger-icon">
                  <div class="charger-icon2-1"></div>
                  <div>DC 차 데모</div>
                </div>
                <div class="charger-icon">
                  <div class="charger-icon3-1"></div>
                  <div>AC3상</div>
                </div>
                <div class="charger-icon">
                  <div class="charger-icon4-1"></div>
                  <div>완속</div>
                </div>
              </div>
            </div>
            <div
              style="
                background-color: rgb(235, 236, 240);
                /* border: 1px solid; */
                width: 100%;
                /* height: 1rem; */
                margin-top: 4%;
              "
            ></div>
            <div class="bottom-sheet">
              <h2 style="padding-top: 5%">충전기 정보</h2>
              <div
                style="
                  background-color: rgb(235, 236, 240);
                  width: 95%;
                  height: 0.2rem;
                  margin-top: 4%;
                  padding-left: 5%;
                "
              ></div>
              <div style="display: flex; padding-top: 3%; text-align: center">
                <h5 style="width: 22%">상태</h5>
                <h5 style="width: 50%">종류</h5>
                <h5 style="width: 23%">이용시간</h5>
              </div>
              <div
                style="
                  background-color: rgb(235, 236, 240);
                  width: 95%;
                  height: 0.2rem;
                  margin-top: 2%;
                  padding-left: 5%;
                "
              ></div>
              <div>
                <div
                  style="
                    padding-top: 3%;
                    padding-bottom: 3%;
                    display: flex;
                    border-color: rgb(235, 236, 240);
                    border-bottom-style: solid;
                    width: 95%;
                    border-width: 0.2rem;
                    vertical-align: middle;
                    text-align: center;
                  "
                >
                  <div
                    style="
                      font-size: 150%;
                      color: rgb(85, 166, 7);
                      font-weight: bold;
                      width: 24%;
                    "
                  >
                    충전가능
                  </div>
                  <div style="display: flex; width: 52%; padding-left: 10%">
                    <div class="charger-icon2" style="width: 30px"></div>
                    <div style="font-size: 150%; padding-left: 3%">
                      DC 차 데모
                    </div>
                  </div>
                  <div
                    style="font-size: 150%; color: rgb(85, 166, 7); width: 23%"
                  >
                    1시간전
                  </div>
                </div>
              </div>
              <div>
                <div
                  style="
                    padding-top: 3%;
                    padding-bottom: 3%;
                    display: flex;
                    border-color: rgb(235, 236, 240);
                    border-bottom-style: solid;
                    width: 95%;
                    border-width: 0.2rem;
                    vertical-align: middle;
                    text-align: center;
                  "
                >
                  <div
                    style="
                      font-size: 150%;
                      color: rgb(85, 166, 7);
                      font-weight: bold;
                      width: 24%;
                    "
                  >
                    충전가능
                  </div>
                  <div style="display: flex; width: 52%; padding-left: 10%">
                    <div class="charger-icon4" style="width: 30px"></div>
                    <div style="font-size: 150%; padding-left: 3%">완속</div>
                  </div>
                  <div
                    style="font-size: 150%; color: rgb(85, 166, 7); width: 23%"
                  >
                    2시간전
                  </div>
                </div>
              </div>
              <div>
                <div
                  style="
                    padding-top: 3%;
                    padding-bottom: 3%;
                    display: flex;
                    border-color: rgb(235, 236, 240);
                    border-bottom-style: solid;
                    width: 95%;
                    border-width: 0.2rem;
                    vertical-align: middle;
                    text-align: center;
                  "
                >
                  <div
                    style="
                      font-size: 150%;
                      color: rgb(2 100 253);
                      font-weight: bold;
                      width: 24%;
                    "
                  >
                    충전중
                  </div>
                  <div style="display: flex; width: 52%; padding-left: 10%">
                    <div class="charger-icon1" style="width: 30px"></div>
                    <div style="font-size: 150%; padding-left: 3%">DC콤보</div>
                  </div>
                  <div
                    style="font-size: 150%; color: rgb(2 100 253); width: 23%"
                  >
                    2시간전
                  </div>
                </div>
              </div>
              <h2 style="padding-top: 10%; padding-bottom: 4%">충전 요금</h2>
              <div
                style="
                  border-style: solid;
                  width: 95%;
                  height: auto;
                  border-radius: 1rem;
                  border-color: rgb(235, 236, 240);
                "
              >
                <div style="display: flex; padding-top: 3%; text-align: center">
                  <h5 style="width: 50%; height: 10%">종류</h5>
                  <h5 style="width: 50%; height: 10%">가격(kWh)</h5>
                </div>
                <div
                  style="
                    padding-bottom: 3%;
                    display: flex;
                    border-color: rgb(235, 236, 240);
                    border-bottom-style: solid;
                    width: 100%;
                    border-width: 0.2rem;
                    vertical-align: middle;
                    text-align: center;
                  "
                ></div>
                <div style="display: flex; padding-top: 3%; text-align: center">
                  <h5 style="width: 50%; height: 10%">급속</h5>
                  <h5 style="width: 50%; height: 10%">336원</h5>
                </div>
                <div style="display: flex; padding: 3% 0%; text-align: center">
                  <h5 style="width: 50%; height: 10%">완속</h5>
                  <h5 style="width: 50%; height: 10%">246원</h5>
                </div>
              </div>
            </div>
            <div style="height: 5rem; background-color: #fff">
              <!-- <div
                style="padding-left: 5%; font-size: 1.5rem; padding-bottom: 5%"
              >
                <h2 style="padding-top: 5%">충전소 정보</h2>
                <div style="padding-top: 3%; display: flex">
                  <div class="station-icon"></div>
                  <div>바이에너지</div>
                </div>
                <div style="padding-top: 1%; display: flex">
                  <div class="time-icon"></div>
                  <div style="padding-left: 1%">평일 09:00 ~ 18:00</div>
                </div>
                <div style="padding-top: 1%; display: flex">
                  <div class="phone-icon"></div>
                  <div style="padding-left: 2%">02-2568-7878</div>
                </div>
              </div> -->
              <!-- <div
                style="
                  display: flex;
                  justify-content: center;
                  align-content: center;
                  width: 100%;
                  height: 30%;
                "
              >
                <div class="payment-btn" @click="goUrl('/pay')">결제하기</div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { ref } from "vue";
export default {
  props: {
    contents: {
      type: String,
      default: "",
    },
  },
  methods: {
    close() {
      this.$emit("closePopup");
    },
  },
};
</script>

<style scoped>
.popup_cont {
  width: 100%;
  height: 100%;
  background-color: #000000b8;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5000;
}
.popup_contents_cont {
  background-color: #fff;
  height: 55%;
  width: 50%;
  bottom: 30%;
  position: absolute;
  border: none;
  border-radius: 20px;
  overflow: scroll;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2% 5%;
}
.popup_contents_img_cont {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  padding-top: 10%;
}
.popup_contents_img {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70%;
  /* background-image: url(../assets/icons/img_01.png); */
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.popup_contents_text {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 20%;
  font-size: 1.6rem;
  font-weight: bold;
}
.popup_contents_btn_cont {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 30%;
}
.popup_contents_btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  background-color: rgb(2 100 253);
  height: 50%;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-weight: 400;
  font-size: 1.6rem;
}

.charger-icon {
  padding-top: 3%;
  width: 24%;
  align-items: center;
  text-align: center;
}
.charger-icon1 {
  background-image: url("../../assets/css/icon/charge_01.png");
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.charger-icon2 {
  background-image: url(../../assets/css/icon/charge_02.png);
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.charger-icon3 {
  background-image: url(../../assets/css/icon/charge_03.png);
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.charger-icon4 {
  background-image: url(../../assets/css/icon/charge_04.png);
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.charger-icon1-1 {
  background-image: url(../../assets/css/icon/charge_01_1.png);
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.charger-icon2-1 {
  background-image: url(../../assets/css/icon/charge_02_1.png);
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.charger-icon3-1 {
  background-image: url(../../assets/css/icon/charge_03_1.png);
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.charger-icon4-1 {
  background-image: url(../../assets/css/icon/charge_04_1.png);
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.close_btn {
  position: absolute;
  width: 2.5%;
  height: 2.5%;
  /* background-color: black; */
  top: 3%;
  right: 2%;
  background-image: url(../../assets/css/icon/close.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
</style>
