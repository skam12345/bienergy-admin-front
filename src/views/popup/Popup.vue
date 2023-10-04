<template>
  <div id="layer-opens">
    <div id="wrapper">
      <div style="width: 100%"></div>
    </div>
    <!-- layer에 is-hidden 클래스 지우고 is-open 클래스 추가 -->
    <!-- QR코드 생성하기 -->
    <div class="layer layer_qr is-hidden" id="layer">
      <form autocomplete="off">
        <div class="inner">
          <div class="top">
            <p class="popup_title">QR코드 생성하기</p>
          </div>
          <div class="contents">
            <div class="input_box">
              <input type="text" id="qr" placeholder="" />
            </div>
          </div>
          <div class="btn_group">
            <button type="button" class="btn_blue">자동생성</button>
          </div>
          <button type="button" class="btn_close">닫기</button>
        </div>
      </form>
    </div>
    <!-- 쿠폰 보유 내역 -->
    <div class="layer layer_coupon is-hidden" id="layer">
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
        <button type="button" class="btn_close">닫기</button>
      </div>
    </div>
    <!-- 삭제 -->
    <div class="layer layer_delete is-hidden" id="layer">
      <div class="inner">
        <div class="top">
          <p class="popup_title">삭제</p>
        </div>
        <div class="contents">
          <div class="text_area">
            <p>정말삭제하시겠습니까?</p>
            <p>정말삭제하시겠습니까?</p>
            <p>정말삭제하시겠습니까?</p>
          </div>
        </div>
        <div class="btn_group">
          <button type="button" class="btn_blue">확인</button>
        </div>
        <button type="button" class="btn_close">닫기</button>
      </div>
    </div>
    <!-- 퇴직 설정 -->
    <!-- <div class="layer layer_retire is-hidden" id="layer"> 
        <div class="inner">
            <div class="top">
                <p class="popup_title">퇴직 설정</p>
            </div>
            <div class="contents">
                <div class="text_area">
                    <p>퇴직자로 설정하시겠습니까?</p>
                    <p>해당 근무자를 퇴직처리 합니다.</p>
                </div>
            </div>
            <div class="btn_group2">
                <button type="button" class="btn_white">취소</button>
                <button type="button" class="btn_blue">확인</button>
            </div>
            <button type="button" class="btn_close">닫기</button>
        </div>
    </div> -->
    <!-- 근무자 수정 -->
    <div class="layer layer_worker is-open" id="layer">
      <form autocomplete="off">
        <div class="inner">
          <div class="top">
            <p class="popup_title">근무자 수정</p>
          </div>
          <div class="contents input">
            <div class="select_box MT20">
              <label for="worker">근무자분류</label>
              <select name="worker" id="worker">
                <option value="관리자">관리자</option>
                <option value="관리자2">관리자2</option>
                <option value="관리자3">관리자3</option>
              </select>
              <span class="MT40">*에러메시지</span>
            </div>
            <div class="input_box MT40">
              <label for="name">이름</label>
              <input type="text" id="name" placeholder="이름 입력" />
              <span class="MT40">*에러메시지</span>
            </div>
            <div class="input_box MT40">
              <label for="phone">연락처</label>
              <input type="text" id="phone" placeholder="010-0000-0000" />
              <span class="MT40">*에러메시지</span>
            </div>
            <div class="input_box MT40">
              <label for="pin">핀번호</label>
              <input type="text" id="pin" placeholder="핀번호 4자리입력" />
              <span class="MT40">*에러메시지</span>
            </div>
            <div class="input_box MT40">
              <label for="pin_confirm">핀번호 확인</label>
              <input
                type="text"
                id="pin_confirm"
                placeholder="핀번호 4자리 확인 입력"
              />
              <span class="MT40">*에러메시지</span>
            </div>
          </div>
          <div class="btn_group2">
            <button type="button" class="btn_white">취소</button>
            <button type="button" class="btn_blue">확인</button>
          </div>
          <button type="button" class="btn_close">닫기</button>
        </div>
      </form>
    </div>
    <!-- 단말기 정보 수정 -->
    <div class="layer layer_equipment is-hidden" id="layer">
      <form autocomplete="off">
        <div class="inner">
          <div class="top">
            <p class="popup_title">단말기 정보 수정</p>
          </div>
          <div class="contents input">
            <div class="input_box">
              <label for="equipment_name">장비명</label>
              <input type="text" id="equipment_name" placeholder="장비명" />
              <span>*에러메시지</span>
            </div>
            <div class="input_box">
              <label for="maker">제조사</label>
              <input type="text" id="maker" placeholder="제조사 입력" />
              <span>*에러메시지</span>
            </div>
            <div class="input_box">
              <label for="as">AS담당자</label>
              <input type="text" id="as" placeholder="AS 담당자 입력" />
              <span>*에러메시지</span>
            </div>
            <div class="input_box">
              <label for="ip">할당 IP</label>
              <input type="text" id="ip" placeholder="할당 IP 주소 입력" />
              <span>*에러메시지</span>
            </div>
          </div>
          <div class="btn_group2">
            <button type="button" class="btn_white">취소</button>
            <button type="button" class="btn_blue">확인</button>
          </div>
          <button type="button" class="btn_close">닫기</button>
        </div>
      </form>
    </div>
    <!-- 기초코드 수정 -->
    <div class="layer layer_code is-hidden" id="layer">
      <form autocomplete="off">
        <div class="inner">
          <div class="top">
            <p class="popup_title">기초코드 수정</p>
          </div>
          <div class="contents input">
            <div class="input_box">
              <label for="code">코드명</label>
              <input type="text" id="code" placeholder="코드명 입력" />
              <span>*에러메시지</span>
            </div>
            <div class="input_box">
              <label for="sort">구분명</label>
              <input type="text" id="sort" placeholder="구분명 입력" />
              <span>*에러메시지</span>
            </div>
            <div class="input_box">
              <label for="code2">코드채번</label>
              <input type="text" id="code2" placeholder="코드채번입력" />
              <span>*에러메시지</span>
            </div>
            <div class="input_box">
              <label for="etc">비고</label>
              <input type="text" id="etc" placeholder="기타사항을 입력하세요" />
              <span>*에러메시지</span>
            </div>
          </div>
          <div class="btn_group2">
            <button type="button" class="btn_white">취소</button>
            <button type="button" class="btn_blue">확인</button>
          </div>
          <button type="button" class="btn_close">닫기</button>
        </div>
      </form>
    </div>
  </div>
</template>
