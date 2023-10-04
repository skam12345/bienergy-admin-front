<template>
  <div>
    <div id="wrapper">
      <div id="container">
        <section class="sales">
          <div class="breadcrumb">
            <router-link to="/Home">HOME</router-link>
            <p>상품관리</p>
            <p>진열관리(옵션)</p>
          </div>
          <div class="contents">
            <h2 class="title title_product">진열관리(옵션)</h2>
            <div class="contents_area">
              <form autocomplete="off">
                <div class="contents_area-search">
                  <div class="select MT20">
                    <div class="select_box">
                      <label for="">상품분류</label>
                      <select name="" id="product2" class="MR05">
                        <option value="전체">대분류 전체</option>
                        <option value="선택1">WASHDAY</option>
                      </select>
                    </div>
                    <div class="select_box">
                      <label for=""></label>
                      <select name="" id="product3" class="MR05">
                        <option value="">중분류 전체</option>
                        <option value="">세차</option>
                        <option value="">상품</option>
                        <option value="">서비스</option>
                        <option value="">추가</option>
                      </select>
                    </div>
                    <div class="select_box">
                      <label for="approve"></label>
                      <select name="" id="" class="MR30">
                        <option value="">소분류 전체</option>
                        <option value="">1회권</option>
                        <option value="">세차옵션</option>
                        <option value="">멤버쉽</option>
                        <option value="">Gift 쿠폰</option>
                        <option value="">무료 쿠폰</option>
                        <option value="">할인 쿠폰</option>
                        <option value="">선불권</option>
                      </select>
                    </div>
                    <div class="select_box">
                      <label for="">상품별</label>
                      <select name="" id="" class="MR05">
                        <option value="">상품명 선택</option>
                        <option value="BASIC">BASIC</option>
                        <option value="BUBBLE">BUBBLE</option>
                        <option value="BEST">BEST</option>
                        <option value="PREMIUM">PREMIUM</option>
                      </select>
                    </div>

                    <div class="select_box">
                      <label for=""></label>
                      <input
                        type="text"
                        id="000"
                        value=""
                        placeholder="검색어 입력"
                      />
                    </div>
                  </div>
                  <div class="select MT40">
                    <div class="select_box">
                      <label for="device">쿠폰적용</label>
                      <select name="" id="" class="MR30">
                        <option value="전체">전체</option>
                        <option value="선택1">쿠폰 적용</option>
                        <option value="선택2">쿠폰 미적용</option>
                      </select>
                    </div>

                    <div class="select_box">
                      <label for="device">재고여부</label>
                      <select name="" id="" class="MR30">
                        <option value="전체">전체</option>
                        <option value="선택1">재고 있음</option>
                        <option value="선택2">재고 없음</option>
                      </select>
                    </div>

                    <div class="select_box">
                      <label for="device">판매여부</label>
                      <select name="" id="" class="MR30">
                        <option value="전체">전체</option>
                        <option value="선택1">판매</option>
                        <option value="선택2">판매 보류</option>
                      </select>
                    </div>

                    <button type="button" class="btn_blue btn_search MR20">
                      조회
                    </button>
                    <button type="button" class="btn_yellow btn_excel">
                      엑셀 다운로드
                    </button>
                  </div>
                </div>
              </form>
              <div class="contents_area-table">
                <p class="contents_area-title">
                  검색결과
                  <font class="fs14"><span>(</span>99,999<span>건)</span></font>
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
                    <col width="" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th class="thht">NO</th>
                      <th>회원번호</th>
                      <th>차량번호</th>
                      <th>회원유무</th>
                      <th>회원유형</th>
                      <th>회원등급</th>
                      <th>FLEET 승인</th>
                      <th>FLEET ID</th>
                      <th>휴대폰번호</th>
                      <th>보유쿠폰</th>
                      <th>회원가입일</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>999</td>
                      <td>
                        <a href="javascript:void(0)">YGP22021600000001</a>
                      </td>
                      <td>서울 123가 1234</td>
                      <td>회원</td>
                      <td>FLEET선불전용</td>
                      <td>일반</td>
                      <td>승인완료</td>
                      <td>porche</td>
                      <td>010-1234-5678</td>
                      <td><a href="javascript:void(0)">33</a></td>
                      <td>2022/04/22</td>
                    </tr>
                    <tr>
                      <td>999</td>
                      <td>
                        <a href="javascript:void(0)">YGP22021600000001</a>
                      </td>
                      <td>서울 123가 1234</td>
                      <td><span class="f-lightgrey">비회원</span></td>
                      <td>FLEET선불전용</td>
                      <td><span class="f-purple">멤버쉽</span></td>
                      <td><span class="f-yellow">승인대기</span></td>
                      <td>porche</td>
                      <td>010-1234-5678</td>
                      <td><a href="javascript:void(0)">33</a></td>
                      <td>2022/04/22</td>
                    </tr>
                    <tr>
                      <td>999</td>
                      <td>
                        <a href="javascript:void(0)">YGP22021600000001</a>
                      </td>
                      <td>서울 123가 1234</td>
                      <td>회원</td>
                      <td>FLEET선불전용</td>
                      <td>일반</td>
                      <td>승인완료</td>
                      <td>porche</td>
                      <td>010-1234-5678</td>
                      <td><a href="javascript:void(0)">33</a></td>
                      <td>2022/04/22</td>
                    </tr>
                    <tr>
                      <td>999</td>
                      <td>
                        <a href="javascript:void(0)">YGP22021600000001</a>
                      </td>
                      <td>서울 123가 1234</td>
                      <td>회원</td>
                      <td>FLEET선불전용</td>
                      <td>일반</td>
                      <td>승인완료</td>
                      <td>porche</td>
                      <td>010-1234-5678</td>
                      <td><a href="javascript:void(0)">33</a></td>
                      <td>2022/04/22</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="pagination">
              <!-- seleted : li.is-current -->
              <!-- disable : li.disable -->
              <ul>
                <li class="page first disable">
                  <a href="javascript:void(0)">first page</a>
                </li>
                <li class="page prev disable">
                  <a href="javascript:void(0)">prev page</a>
                </li>
                <li class="num is-current">
                  <a href="javascript:void(0)">1</a>
                </li>
                <li class="num"><a href="javascript:void(0)">2</a></li>
                <li class="num"><a href="javascript:void(0)">3</a></li>
                <li class="num"><a href="javascript:void(0)">4</a></li>
                <li class="num"><a href="javascript:void(0)">5</a></li>
                <li class="num"><a href="javascript:void(0)">6</a></li>
                <li class="num"><a href="javascript:void(0)">7</a></li>
                <li class="num"><a href="javascript:void(0)">8</a></li>
                <li class="num"><a href="javascript:void(0)">9</a></li>
                <li class="num"><a href="javascript:void(0)">10</a></li>
                <li class="page next">
                  <a href="javascript:void(0)">next page</a>
                </li>
                <li class="page last">
                  <a href="javascript:void(0)">last page</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
