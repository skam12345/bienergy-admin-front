<template>
  <div>
    <div id="wrapper">
      <div id="container">
        <section class="sales">
          <div class="breadcrumb">
            <router-link to="/Home">HOME</router-link>
            <p>장비제어</p>
            <p>장비제어</p>
          </div>
          <div class="contents">
            <h2 class="title title_equ">장비제어</h2>
            <span class="title_exp"
              >화면에서 차단기 설정을 변경하신 후 [ 처리 ] 버튼을 누르셔야 완료
              됩니다.</span
            >
            <div class="contents_area">
              <div class="contents_area-table product_inquire">
                <p class="fl_right">
                  <button type="button" class="btn_red btn_red_mid">
                    처리
                  </button>
                </p>
                <div class="contents_area-remote MT20">
                  <div class="MB40">
                    <img src="../../assets/images/arrow_diagonal.png" alt="" />
                    <ul>
                      <li>
                        <img
                          src="../../assets/images/carcam.png"
                          class="carcam"
                          alt=""
                        />
                      </li>
                      <li>
                        <input type="text" value="1234" />
                        <input type="text" value="1234" />
                        <input type="text" value="1234" />
                        <input type="text" value="1234" />
                      </li>
                      <li>
                        <button type="button" class="btn_blue">수정</button>
                      </li>
                    </ul>
                    <img
                      src="../../assets/images/arrow_diagonal.png"
                      alt=""
                      class="arrow_flip"
                    />
                  </div>
                  <div>
                    <div class="MR40">
                      <div>
                        <img
                          src="../../assets/images/camera_control_4.png"
                          class="camequ"
                          alt="camera panel"
                        />
                      </div>
                      <ul>
                        <li><p>1번(좌측) 차단기</p></li>
                        <li><hr class="remote_status remote_open" /></li>
                        <li>
                          <button type="button" class="remote_btn btn_up MR10">
                            UP</button
                          ><button type="button" class="remote_btn btn_down">
                            DOWN
                          </button>
                        </li>
                        <li>
                          <img
                            src="../../assets/images/carcam.png"
                            class="carcam"
                            alt="car"
                          />
                        </li>
                        <li>
                          <input type="text" value="1234" />
                          <input type="text" value="1234" />
                          <input type="text" value="1234" />
                          <input type="text" value="1234" />
                        </li>
                        <li>
                          <button type="button" class="btn_blue">수정</button>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div>
                        <img
                          src="../../assets/images/camera_control_4.png"
                          class="camequ"
                          alt="camera panel"
                        />
                      </div>
                      <ul>
                        <li><p>2번(우측) 차단기</p></li>
                        <li><hr class="remote_status" /></li>
                        <li>
                          <button type="button" class="remote_btn btn_up MR10">
                            UP</button
                          ><button type="button" class="remote_btn btn_down">
                            DOWN
                          </button>
                        </li>
                        <li>
                          <img
                            src="../../assets/images/carcam.png"
                            class="carcam"
                            alt="car"
                          />
                        </li>
                        <li>
                          <input type="text" value="1234" />
                          <input type="text" value="1234" />
                          <input type="text" value="1234" />
                          <input type="text" value="1234" />
                        </li>
                        <li>
                          <button type="button" class="btn_blue">수정</button>
                        </li>
                      </ul>
                    </div>
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
