<template>
<div>
    <div id="wrapper">
        <HeaderVue></HeaderVue>s
        <nav>
            <ul class="main_menu">
                <!-- 선택한 메뉴 li.is-current // 뎁스 공통 -->
                <!-- 서브메뉴 있으면 li.is-sub 추가해주세요 -->
                <li class="home">
                    <router-link to = "/Home">HOME</router-link>
                </li>
                <li class="sales is-sub">
                    <a href = "#">매출관리</a>
                    <ul class="sub_menu">
                        <li><router-link to = "/Sale01">매출관리</router-link></li>
                        <li><router-link to = "/Sale02">이용현황</router-link></li>
                    </ul>
                </li>
                <li class="customer is-sub">
                    <a href="javascript:void(0);">고객관리</a>
                    <ul class="sub_menu">
                        <li><router-link to = "/Customer01">회원조회</router-link></li>
                        <li><router-link to = "/Customer02">멤버쉽조회</router-link></li>
                        <li><router-link to = "/Customer03">공지사항</router-link></li>
                    </ul>
                </li>
                <li class="promotion is-sub">
                    <a href="javascript:void(0);">프로모션</a>
                    <ul class="sub_menu">
                        <li><router-link to = "/Promotion01">프로모션관리</router-link></li>
                        <li><router-link to = "/Promotion02">쿠폰관리</router-link></li>
                        <li><router-link to = "/Promotion03">쿠폰발행</router-link></li>
                        <li><router-link to = "/Promotion04">Gift Card 교환</router-link></li>
                    </ul>
                </li>
                <li class="product is-sub">
                    <a href="javascript:void(0);">상품관리</a>
                    <ul class="sub_menu">
                        <li><router-link to = "/Product01">상품조회</router-link></li>
                        <!-- <li><router-link to = "/Product02">진열관리(상품)</router-link></li>
                        <li><router-link to = "/Product03">진열관리(옵션)</router-link></li> -->
                    </ul>
                </li>
                <li class="equipment is-sub">
                    <a href="javascript:void(0);">장비제어</a>
                    <ul class="sub_menu">
                        <!-- <li><router-link to = "/Equ01">장비제어</router-link></li> -->
                        <li><router-link to = "/Equ02">세차순서</router-link></li>
                        <!-- <li><router-link to = "/Equ03">이용현황</router-link></li> -->
                    </ul>
                </li>
                <li class="basics is-sub is-current">
                    <a href="javascript:void(0);">기초관리</a>
                    <ul class="sub_menu">
                        <!-- <li><router-link to = "/Setting01">계정생성</router-link></li> -->
                        <li><router-link to = "/Setting02">근무자관리</router-link></li>
                        <!-- <li class="is-current"><router-link to = "/Setting03">장비/단말기 관리</router-link></li>
                        <li><router-link to = "/Setting04">기초코드관리</router-link></li> -->
                    </ul>
                </li>
            </ul>
            <div class="info">
                <p>(주)엔티아이</p>
                사업자등록번호 : 504-81-15358 ㅣ 대표이사 : 김도연<br>대구광역시 서구 와룡로 335 1층 스파크플러스
            </div>
        </nav>s
        <div id="container">
            <section class="sales">
                <div class="breadcrumb">
                    <router-link to = "/Home">HOME</router-link>
                    <p>기초관리</p>
                    <p>장비/단말기 관리</p>
                </div>
                <div class="contents">
                    <h2 class="title title_setting">장비/단말기 관리</h2>
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
                                        <input type="text" id="000" value="" placeholder="검색어 입력">
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
                                    
                                    

                                    <button type="button" class="btn_blue btn_search MR20">조회</button>
                                    <button type="button" class="btn_yellow btn_excel">엑셀 다운로드</button>

                                    
                                </div>
                            </div>
                        </form>
                        <div class="contents_area-table product_inquire">
                            <p class="contents_area-title">검색결과 <font class="fs14"><span>(</span>99,999<span>건)</span></font></p>
                            <p class="fl_right"><button type="button" class="btn_add btn_red" onclick="layerOpen('.layer_product_register');">상품등록</button></p>
                            <table>
                                <colgroup>
                                    <col width="4%"/>
                                    <col width=""/>
                                    <col width=""/>
                                    <col width=""/>
                                    <col width=""/>
                                    <col width=""/>
                                    <col width=""/>
                                    <col width=""/>
                                    <col width=""/>
                                    <col width=""/>
                                    <col width=""/>
                                    <col width=""/>
                                    <col width=""/>
                                    <col width=""/>
                                    <col width=""/>
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th class="h60">NO</th>
                                        <th>상품코드</th>
                                        <th>대분류명</th>
                                        <th>중분류명</th>
                                        <th>소분류명</th>
                                        <th>상품명</th>
                                        <th>영문상품명</th>
                                        <th>판매가</th>
                                        <th>원가</th>
                                        <th>마진율</th>
                                        <th>바코드</th>
                                        <th>상품정보</th>
                                        <th>재고여부</th>
                                        <th>쿠폰적용</th>
                                        <th>판매여부</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="grey">999</td>
                                        <td><a href="javascript:void(0)" onclick="layerOpen('.layer_product_modify');">123456</a></td>
                                        <td class="grey">WASHDAY</td>
                                        <td class="grey">BASIC</td>
                                        <td class="grey">1회권</td>
                                        <td>상품명상품명상품명상품명</td>
                                        <td>productproductproduct</td>
                                        <td class="right">999,999</td>
                                        <td class="right">999,999</td>
                                        <td class="right">3</td>
                                        <td>12345678999</td>
                                        <td>상품정보12345</td>
                                        <td>전체</td>
                                        <td>전체</td>
                                        <td>전체</td>
                                    </tr>
                                    <tr>
                                        <td class="grey">9</td>
                                        <td><a href="javascript:void(0)" onclick="layerOpen('.layer_product_modify');">123456</a></td>
                                        <td class="grey">WASHDAY</td>
                                        <td class="grey">BUBBLE</td>
                                        <td class="grey">무료쿠폰</td>
                                        <td>상품명</td>
                                        <td>product</td>
                                        <td class="right">999,999</td>
                                        <td class="right">999,999</td>
                                        <td class="right">3</td>
                                        <td>12345678999</td>
                                        <td>상품정보12345</td>
                                        <td>전체</td>
                                        <td>전체</td>
                                        <td>전체</td>
                                    </tr>
                                    <tr>
                                        <td class="grey">8</td>
                                        <td><a href="javascript:void(0)" onclick="layerOpen('.layer_product_modify');">123456</a></td>
                                        <td class="grey">WASHDAY</td>
                                        <td class="grey">PREMIUM</td>
                                        <td class="grey">1회권</td>
                                        <td>상품명</td>
                                        <td>product</td>
                                        <td class="right">999,999</td>
                                        <td class="right">999,999</td>
                                        <td class="right">3</td>
                                        <td>12345678999</td>
                                        <td>상품정보12345</td>
                                        <td>전체</td>
                                        <td>전체</td>
                                        <td>전체</td>
                                    </tr>
                                    <tr>
                                        <td class="grey">7</td>
                                        <td><a href="javascript:void(0)" onclick="layerOpen('.layer_product_modify');">123456</a></td>
                                        <td class="grey">WASHDAY</td>
                                        <td class="grey">PREMIUM</td>
                                        <td class="grey">1회권</td>
                                        <td>상품명</td>
                                        <td>product</td>
                                        <td class="right">999,999</td>
                                        <td class="right">999,999</td>
                                        <td class="right">3</td>
                                        <td>12345678999</td>
                                        <td>상품정보12345</td>
                                        <td>전체</td>
                                        <td>전체</td>
                                        <td>전체</td>
                                    </tr>
                                    <tr>
                                        <td class="grey">6</td>
                                        <td><a href="javascript:void(0)" onclick="layerOpen('.layer_product_modify');">123456</a></td>
                                        <td class="grey">WASHDAY</td>
                                        <td class="grey">PREMIUM</td>
                                        <td class="grey">1회권</td>
                                        <td>상품명</td>
                                        <td>product</td>
                                        <td class="right">999,999</td>
                                        <td class="right">999,999</td>
                                        <td class="right">3</td>
                                        <td>12345678999</td>
                                        <td>상품정보12345</td>
                                        <td>전체</td>
                                        <td>전체</td>
                                        <td>전체</td>
                                    </tr>
                                    <tr>
                                        <td class="grey">5</td>
                                        <td><a href="javascript:void(0)" onclick="layerOpen('.layer_product_modify');">123456</a></td>
                                        <td class="grey">WASHDAY</td>
                                        <td class="grey">PREMIUM</td>
                                        <td class="grey">1회권</td>
                                        <td>상품명</td>
                                        <td>product</td>
                                        <td class="right">999,999</td>
                                        <td class="right">999,999</td>
                                        <td class="right">3</td>
                                        <td>12345678999</td>
                                        <td>상품정보12345</td>
                                        <td>전체</td>
                                        <td>전체</td>
                                        <td>전체</td>
                                    </tr>
                                    <tr>
                                        <td class="grey">4</td>
                                        <td><a href="javascript:void(0)" onclick="layerOpen('.layer_product_modify');">123456</a></td>
                                        <td class="grey">WASHDAY</td>
                                        <td class="grey">PREMIUM</td>
                                        <td class="grey">1회권</td>
                                        <td>상품명</td>
                                        <td>product</td>
                                        <td class="right">999,999</td>
                                        <td class="right">999,999</td>
                                        <td class="right">3</td>
                                        <td>12345678999</td>
                                        <td>상품정보12345</td>
                                        <td>전체</td>
                                        <td>전체</td>
                                        <td>전체</td>
                                    </tr>
                                    <tr>
                                        <td class="grey">3</td>
                                        <td><a href="javascript:void(0)" onclick="layerOpen('.layer_product_modify');">123456</a></td>
                                        <td class="grey">WASHDAY</td>
                                        <td class="grey">PREMIUM</td>
                                        <td class="grey">1회권</td>
                                        <td>상품명</td>
                                        <td>product</td>
                                        <td class="right">999,999</td>
                                        <td class="right">999,999</td>
                                        <td class="right">3</td>
                                        <td>12345678999</td>
                                        <td>상품정보12345</td>
                                        <td>전체</td>
                                        <td>전체</td>
                                        <td>전체</td>
                                    </tr>
                                    <tr>
                                        <td class="grey">2</td>
                                        <td><a href="javascript:void(0)" onclick="layerOpen('.layer_product_modify');">123456</a></td>
                                        <td class="grey">WASHDAY</td>
                                        <td class="grey">PREMIUM</td>
                                        <td class="grey">1회권</td>
                                        <td>상품명</td>
                                        <td>product</td>
                                        <td class="right">999,999</td>
                                        <td class="right">999,999</td>
                                        <td class="right">3</td>
                                        <td>12345678999</td>
                                        <td>상품정보12345</td>
                                        <td>전체</td>
                                        <td>전체</td>
                                        <td>전체</td>
                                    </tr>
                                    <tr>
                                        <td class="grey">1</td>
                                        <td><a href="javascript:void(0)" onclick="layerOpen('.layer_product_modify');">123456</a></td>
                                        <td class="grey">WASHDAY</td>
                                        <td class="grey">PREMIUM</td>
                                        <td class="grey">1회권</td>
                                        <td>상품명</td>
                                        <td>product</td>
                                        <td class="right">999,999</td>
                                        <td class="right">999,999</td>
                                        <td class="right">3</td>
                                        <td>12345678999</td>
                                        <td>상품정보12345</td>
                                        <td>전체</td>
                                        <td>전체</td>
                                        <td>전체</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="pagination">
                        <!-- seleted : li.is-current -->
                        <!-- disable : li.disable -->
                        <ul>
                            <li class="page first disable"><a href="javascript:void(0)">first page</a></li>
                            <li class="page prev disable"><a href="javascript:void(0)">prev page</a></li>
                            <li class="num is-current"><a href="javascript:void(0)">1</a></li>
                            <li class="num"><a href="javascript:void(0)">2</a></li>
                            <li class="num"><a href="javascript:void(0)">3</a></li>
                            <li class="num"><a href="javascript:void(0)">4</a></li>
                            <li class="num"><a href="javascript:void(0)">5</a></li>
                            <li class="num"><a href="javascript:void(0)">6</a></li>
                            <li class="num"><a href="javascript:void(0)">7</a></li>
                            <li class="num"><a href="javascript:void(0)">8</a></li>
                            <li class="num"><a href="javascript:void(0)">9</a></li>
                            <li class="num"><a href="javascript:void(0)">10</a></li>
                            <li class="page next"><a href="javascript:void(0)">next page</a></li>
                            <li class="page last"><a href="javascript:void(0)">last page</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
    <!-- 상품 수정 -->
    <div class="layer layer_product_modify is-hidden">
        <form autocomplete="off">
            <div class="inner">
                <div class="top">
                    <p class="popup_title">상품 수정</p>
                </div>
                <div class="contents input MT20">
                    <div class="input_box fl_left WD150 MR10">
                        <label for="code">상품코드</label>
                        <input type="text" id="code" placeholder="상품코드 입력" value="1234567890">
                    </div>
                    <div class="select_box fl_left WD150 MR10">
                        <label for="select1">대분류명</label>
                        <select name="" id="select1">
                            <option value="WASHDAY">WASHDAY</option>
                            <option value="선택2">선택2</option>
                        </select>
                    </div>
                    <div class="select_box fl_left WD150 MR10">
                        <label for="select2">중분류명</label>
                        <select name="" id="select2">
                            <option value="세차">세차</option>
                            <option value="선택2">선택2</option>
                        </select>
                    </div>
                    <div class="select_box fl_left WD150 MB40">
                        <label for="select3">소분류명</label>
                        <select name="" id="select3">
                            <option value="1회권">1회권</option>
                            <option value="할인쿠폰">할인쿠폰</option>
                        </select>
                    </div>
                    <div class="input_box fl_left w310 MR10">
                        <label for="product_name">상품명</label>
                        <input type="text" id="product_name" placeholder="상품명 입력" value="베이직">
                    </div>
                    <div class="input_box fl_left w310 MB40">
                        <label for="english">영문 상품명</label>
                        <input type="text" id="english" placeholder="영문 상품명 입력" value="BASIC">
                    </div>
                    <div class="input_box fl_left WD150 MR10">
                        <label for="price1">판매가</label>
                        <input type="text" id="price1" value="96,800" class="red" placeholder="0">
                    </div>
                    <div class="input_box fl_left WD150 MR10">
                        <label for="price2">원가</label>
                        <input type="text" id="price2" value="9,000" class="red" placeholder="0">
                    </div>
                    <div class="input_box fl_left WD150 MR10">
                        <label for="percent">마진율</label>
                        <input type="text" id="percent" value="9" class="red" placeholder="0">
                    </div>
                    <div class="input_box fl_left WD150 MB40">
                        <label for="barcode">바코드</label>
                        <input type="text" id="barcode" placeholder="바코드 입력" value="1234567890">
                    </div>
                    <div class="input_box fl_left tableTypeB MB40">
                        <label for="info">상품정보</label>
                        <input type="text" id="info" placeholder="상품정보 입력" value="상품정보입니다">
                    </div>
                    <div class="select_box fl_left WD150 MR10">
                        <label for="select4">재고여부</label>
                        <select name="" id="select4">
                            <option value="전체">전체</option>
                            <option value="선택2">선택2</option>
                        </select>
                    </div>
                    <div class="select_box fl_left WD150 MR10">
                        <label for="select5">쿠폰적용</label>
                        <select name="" id="select5">
                            <option value="전체">전체</option>
                            <option value="선택2">선택2</option>
                        </select>
                    </div>
                    <div class="select_box fl_left WD150 MB40">
                        <label for="select5">판매여부</label>
                        <select name="" id="select6">
                            <option value="전체">전체</option>
                            <option value="선택2">선택2</option>
                        </select>
                    </div>
                </div>
                <div class="btn_group2" style="clear:both;">
                    <button type="button" class="btn_white" onclick="layerClose('.layer_product_modify')">취소</button>
                    <button type="button" class="btn_blue">저장</button>
                </div>
                <button type="button" class="btn_close" onclick="layerClose('.layer_product_modify')">닫기</button>
            </div>
        </form>
    </div>
    <!-- 상품 등록 -->
    <div class="layer layer_product_register is-hidden">
        <form autocomplete="off">
            <div class="inner">
                <div class="top">
                    <p class="popup_title">상품 등록</p>
                </div>
                <div class="contents input MT20">
                    <div class="input_box fl_left WD150 MR10">
                        <label for="code">상품코드</label>
                        <input type="text" id="code" placeholder="상품코드 입력" value="">
                    </div>
                    <div class="select_box fl_left WD150 MR10">
                        <label for="select1">대분류명</label>
                        <select name="" id="select1">
                            <option value="WASHDAY">WASHDAY</option>
                            <option value="선택2">선택2</option>
                        </select>
                    </div>
                    <div class="select_box fl_left WD150 MR10">
                        <label for="select2">중분류명</label>
                        <select name="" id="select2">
                            <option value="세차">세차</option>
                            <option value="선택2">선택2</option>
                        </select>
                    </div>
                    <div class="select_box fl_left WD150 MB40">
                        <label for="select3">소분류명</label>
                        <select name="" id="select3">
                            <option value="1회권">1회권</option>
                            <option value="할인쿠폰">할인쿠폰</option>
                        </select>
                    </div>
                    <div class="input_box fl_left w310 MR10">
                        <label for="product_name">상품명</label>
                        <input type="text" id="product_name" placeholder="상품명 입력" value="">
                    </div>
                    <div class="input_box fl_left w310 MB40">
                        <label for="english">영문 상품명</label>
                        <input type="text" id="english" placeholder="영문 상품명 입력" value="">
                    </div>
                    <div class="input_box fl_left WD150 MR10">
                        <label for="price1">판매가</label>
                        <input type="text" id="price1" value="" class="red" placeholder="0">
                    </div>
                    <div class="input_box fl_left WD150 MR10">
                        <label for="price2">원가</label>
                        <input type="text" id="price2" value="" class="red" placeholder="0">
                    </div>
                    <div class="input_box fl_left WD150 MR10">
                        <label for="percent">마진율</label>
                        <input type="text" id="percent" value="" class="red" placeholder="0">
                    </div>
                    <div class="input_box fl_left WD150 MB40">
                        <label for="barcode">바코드</label>
                        <input type="text" id="barcode" placeholder="바코드 입력" value="">
                    </div>
                    <div class="input_box fl_left tableTypeB MB40">
                        <label for="info">상품정보</label>
                        <input type="text" id="info" placeholder="상품정보 입력" value="">
                    </div>
                    <div class="select_box fl_left WD150 MR10">
                        <label for="select4">재고여부</label>
                        <select name="" id="select4">
                            <option value="전체">전체</option>
                            <option value="선택2">선택2</option>
                        </select>
                    </div>
                    <div class="select_box fl_left WD150 MR10">
                        <label for="select5">쿠폰적용</label>
                        <select name="" id="select5">
                            <option value="전체">전체</option>
                            <option value="선택2">선택2</option>
                        </select>
                    </div>
                    <div class="select_box fl_left WD150 MB40">
                        <label for="select5">판매여부</label>
                        <select name="" id="select6">
                            <option value="전체">전체</option>
                            <option value="선택2">선택2</option>
                        </select>
                    </div>
                </div>
                <div class="btn_group2" style="clear:both;">
                    <button type="button" class="btn_white" onclick="layerClose('.layer_product_register')">취소</button>
                    <button type="button" class="btn_blue">등록</button>
                </div>
                <button type="button" class="btn_close" onclick="layerClose('.layer_product_register')">닫기</button>
            </div>
        </form>
    </div>
</div>
</template>