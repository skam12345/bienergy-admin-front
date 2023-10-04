<template>
<div>
    <div id="wrapper">
        <HeaderVue></HeaderVue>
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
                        <!-- <li class="is-current"><router-link to = "/Setting01">계정생성</router-link></li> -->
                        <li><router-link to = "/Setting02">근무자관리</router-link></li>
                        <!-- <li><router-link to = "/Setting03">장비/단말기 관리</router-link></li>
                        <li><router-link to = "/Setting04">기초코드관리</router-link></li> -->
                    </ul>
                </li>
            </ul>
            <div class="info">
                <p>(주)엔티아이</p>
                사업자등록번호 : 504-81-15358 ㅣ 대표이사 : 김도연<br>대구광역시 서구 와룡로 335 1층 스파크플러스
            </div>
        </nav>
        <div id="container">
            <section class="sales">
                <div class="breadcrumb">
                    <router-link to = "/Home">HOME</router-link>
                    <p>기초관리</p>
                    <p>계정생성</p>
                </div>
                <div class="contents">
                    <h2 class="title title_setting">계정생성</h2>
                    <div class="contents_area">
                        <div class="contents_area-box MT40">
                                <table class="tableTypeB MB35">
                                    <tr>
                                        <td class="tLeft">성명</td>
                                        <td class="tRight">
                                        <input type="text" id="" placeholder="성명을 입력하세요" class="WD180 MT04">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="tLeft">아이디</td>
                                        <td class="tRight">
                                        <input type="text" id="" placeholder="이메일 아이디를 입력하세요" class="WD180 MT04">
                                        <button class="btn_blue MT04 ML10 poAb" href="javascript:void(0)">아이디 확인</button>
                                        <span class="stip ML120">이메일 아이디를 입력하세요.</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="tLeft">비밀번호 등록</td>
                                        <td class="tRight">
                                        <input type="text" id="" placeholder="비밀번호를 입력하세요" class="WD180 MT04">
                                        <span class="stip">영문, 숫자, 특수문자를 혼용하여 10-12자리로만 작성</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="tLeft">새 비밀번호</td>
                                        <td class="tRight">
                                        <input type="password" id="" placeholder="비밀번호를 입력하세요" class="WD180 MT04">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="tLeft">새 비밀번호 확인</td>
                                        <td class="tRight">
                                        <input type="password" id="" placeholder="비밀번호를 입력하세요" class="WD180 MT04">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="tLeft">이메일</td>
                                        <td class="tRight">
                                            <div class="select_box dispB">
                                            
                                            <input type="text" id="" placeholder="이메일" class="WD180 MT04">
                                                @
                                            <input type="text" id="" placeholder="이메일" class="WD180 MT04">
                                            <select name="" id="" class="WD250 MR20 MT04">
                                                <option value="전체">직접입력</option>
                                            </select>
                                            <span class="stip">비밀번호 분실시, 임시번호가 발급되는 정보입니다.</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="tLeft">발송 제목</td>
                                        <td class="tRight"><input type="text" id="" placeholder="제목을 입력하세요" class="WD100-20 MT04"></td>
                                    </tr>
                                    <tr>
                                        <td class="tLeft">수신자 선택</td>
                                        <td class="tRight">
                                            
                                            <div class="checksRadio MT08">
                                                <input type="radio" id="ex_rd3" name="radiobtn" checked>
                                                <label for="ex_rd3">회원 선택</label>
                                                <span class="Add-btn">
                                                    <button type="button" class="btn_blue btn_add WD150">선택하기</button> <div class="number">(선택회원 : 00명)</div>
                                                </span>
                                                <input type="radio" id="ex_rd4" name="radiobtn">
                                                <label for="ex_rd4">회원번호 직접입력</label>
                                                <div class="MT-37 ML160"><input type="text" id="" placeholder="010-1234-5678"  class="WD150 MR20"></div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="tLeft">발송 내용</td>
                                        <td class="tRight"><textarea class="TextBox"></textarea></td>
                                    </tr>
                                    <tr>
                                        <td class="tLeft">문자 내용</td>
                                        <td class="tRight"><textarea class="TextBox"></textarea></td>
                                    </tr>
                                </table>
                                
                                <p class="MB20 fl_left">
                                <button type="button" class="btn_yellow WD150 ML20">알림톡 발송</button>
                                </p>
                                
                                <p class="MB20 ta_right">
                                <button type="button" class="btn_white WD104 MR8">삭제</button>
                                <button type="button" class="btn_blue WD104 MR20">저장</button>
                                </p>
                            
                            </div>                    
                        
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