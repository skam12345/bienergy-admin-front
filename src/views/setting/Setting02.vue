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
                        <!-- <li><router-link to = "/Setting01">계정생성</router-link></li> -->
                        <li class="is-current"><router-link to = "/Setting02">근무자관리</router-link></li>
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
                    <p>근무자관리</p>
                </div>
                <div class="contents">
                    <h2 class="title title_setting">근무자관리</h2>
                    <div class="contents_area">
                        <form autocomplete="off" onSubmit="return false;">
                            <div class="contents_area-search">
                            
                                <div class="search MT20">
                                    <div class="input_box">
                                        <label for="number">근무자명</label>
                                        <input type="text" id="number" placeholder="근무자명 입력" v-model="search_info" v-on:keydown.enter.prevent="search_notice" >
                                    </div>
                                    <button type="button" class="btn_blue btn_search ML10 MR20" @click="search_notice">조회</button>
                                </div>
                            </div>
                        </form>
                        <div class="contents_area-table product_inquire">
                            <p class="contents_area-title">근무자 목록 <font class="fs14"><span>(</span>{{return_one(return_sum.account_fee)}}<span>명의 근무자가 등록되어 있습니다.)</span></font></p>
                            <p class="fl_right"><button type="button" class="btn_add btn_red"  onclick="layerOpen('.layer_worker_res');" @click="get_adminreg">근무자 등록</button></p>
                            <table>
                                <colgroup>
                                    <col width="4%"/>
                                    <col width=""/>
                                    <col width=""/>
                                    <col width=""/>
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th class="thht">No</th>
                                        <th>아이디</th>
                                        <th>이름</th>
                                        <th>전화번호</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(info,index) in return_result" v-show="setPaginate(index)" :key="index">
                                        <td>{{return_result.length - index}}</td>
                                        <td onclick="layerOpen('.layer_worker_edit');" @click="get_adminde(info.seq_no)"><a href="javascript:void(0)">{{info.admin_id}}</a></td>
                                        <td>{{info.admin_name}}</td>
                                        <td>{{info.admin_tel}}</td>
                                    </tr>
                                
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="pagination">
                        <!-- seleted : li.is-current -->
                        <!-- disable : li.disable -->
                        <ul>
                            <li class="page first" :class="{'disable' : current == 1}">
                                <a v-if="!(current==1)" href="javascript:void(0)" @click="updateCurrent(1)">first page</a>
                                <a v-else>first page</a>
                            </li>
                            <li class="page prev" :class="{'disable' : current == 1}">
                                <a v-if="!(current==1)" href="javascript:void(0)" @click="updateCurrent(current-1)">prev page</a>
                                <a v-else>prev page</a>
                            </li>

                            <div v-for="page_index in paginate_total_unit" :key="page_index">
                                <li class="num" @click.prevent="updateCurrent(page_index)" 
                                :class="{'num is-current': page_index == current}" :key="page_index"> 
                                    <a href="">{{ page_index }}</a> 
                                </li>
                            </div>
                            



                            <li class="page next" :class="{'disable' : current == paginate_total}">
                                <a v-if="!(current==paginate_total)" href="javascript:void(0)" @click="updateCurrent(current+1)">next page</a>
                                <a v-else>next page</a>
                            </li>
                            <li class="page last" :class="{'disable' : current == paginate_total}">
                                <a v-if="!(current==paginate_total)" href="javascript:void(0)" @click="updateCurrent(paginate_total)">last page</a>
                                <a v-else>last page</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
    <!-- 근무자 수정 또는 등록 -->
    <div class="layer layer_worker_res is-hidden" id="layer">
        <form autocomplete="off">
            <div class="inner">
                <div class="top">
                    <p class="popup_title">근무자 등록</p>
                </div>
                <div class="contents input">
                    <div class="input_box MT40">
                        <label for="name">근무자 아이디</label>
                        <input type="text" id="name1" v-model="res_id" placeholder="근무자 아이디 입력">
                        <!-- <span class="MT40">*에러메시지</span> -->
                    </div>
                    <div class="input_box MT40">
                        <label for="phone">비밀번호</label>
                        <input type="password" id="phone1" v-model="res_pas" placeholder="비밀번호 입력">
                        <!-- <span class="MT40">*에러메시지</span> -->
                    </div>
                    <div class="input_box MT40">
                        <label for="pin">근무자명</label>
                        <input type="text" id="pin1" v-model="res_name" placeholder="근무자명 입력">
                        <!-- <span class="MT40">*에러메시지</span> -->
                    </div>
                    <div class="input_box MT40">
                        <label for="pin_confirm">근무자 상태</label>
                        <select name="" id="approve1" v-model="res_sel">
                            <option disabled value="">근무자 상태 선택</option>
                            <option v-for="(info, index) in get_memnow" :key="`o-${index}`" :value="info.code">
                                {{info.code_name}}
                            </option>
                        </select>
                    </div>
                    <div class="input_box MT40">
                        <label for="pin">전화번호</label>
                        <input type="text" id="pin3" v-model="res_phone" placeholder="010-0000-0000">
                        <!-- <span class="MT40">*에러메시지</span> -->
                    </div>
                </div>
                <div class="btn_group2">
                    <button type="button" class="btn_white" onclick="layerClose('.layer_worker_res')">취소</button>
                    <button type="button" class="btn_blue" @click="reg_admin">확인</button>
                </div>
                <button type="button" class="btn_close" onclick="layerClose('.layer_worker_res')">닫기</button>
            </div>
        </form>
    </div>
    <div class="layer layer_worker_edit is-hidden" id="layer">
        <form autocomplete="off">
            <div class="inner">
                <div class="top">
                    <p class="popup_title">근무자 수정</p>
                </div>
                <div class="contents input">
                    <div class="input_box MT40">
                        <label for="name">근무자 아이디</label>
                        <input type="text" id="name2" v-model="res_id" placeholder="근무자 아이디 입력" readonly>
                        <!-- <span class="MT40">*에러메시지</span> -->
                    </div>
                    <div class="input_box MT40">
                        <label for="phone">비밀번호</label>
                        <input type="password" id="phone2" v-model="res_pas" placeholder="비밀번호 입력">
                        <!-- <span class="MT40">*에러메시지</span> -->
                    </div>
                    <div class="input_box MT40">
                        <label for="pin">근무자명</label>
                        <input type="text" id="pin2" v-model="res_name" placeholder="근무자명 입력">
                        <!-- <span class="MT40">*에러메시지</span> -->
                    </div>
                    <div class="input_box MT40">
                        <label for="pin_confirm">근무자 상태</label>
                        <select name="" id="approve2" v-model="res_sel">
                            <option disabled value="">근무자 상태 선택</option>
                            <option v-for="(info, index) in get_memnow" :key="`o-${index}`" :value="info.code">
                                {{info.code_name}}
                            </option>
                        </select>
                    </div>
                    <div class="input_box MT40">
                        <label for="pin">전화번호</label>
                        <input type="text" id="pin4" v-model="res_phone" placeholder="010-0000-0000">
                        <!-- <span class="MT40">*에러메시지</span> -->
                    </div>
                </div>
                <div class="btn_group2">
                    <button type="button" class="btn_white" onclick="layerClose('.layer_worker_edit')">취소</button>
                    <button type="button" class="btn_blue" @click="set_adminadd">저장</button>
                </div>
                <button type="button" class="btn_close" onclick="layerClose('.layer_worker_edit')">닫기</button>
            </div>
        </form>
    </div>
    <!-- 퇴직 -->
    <div class="layer layer_retire is-hidden" id="layer"> 
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
                <button type="button" class="btn_white" onclick="layerClose('.layer_retire')">취소</button>
                <button type="button" class="btn_blue" onclick="layerClose('.layer_retire')">확인</button>
            </div>
            <button type="button" class="btn_close" onclick="layerClose('.layer_retire')">닫기</button>
        </div>
    </div>
</div>
</template>
<script>
// import { TypedChainedSet } from 'webpack-chain'

export default{
    computed:{
        maxPage() {  // 총 페이지 수(and 최대 페이지 번호)
            return this.paginate_total
        },
        startPage() { // 페이지 시작 번호
            return (Math.trunc((this.current - 1) / this.pageCount) * this.pageCount) + 1
        },
        endPage() { // 페이지 끝 번호
            let end = this.startPage + this.pageCount - 1
            return end < this.maxPage ? end : this.maxPage
        },
        paginate_total_unit(){
            let units = [];
            for(let num = this.startPage;num <=this.endPage;num++){
                units.push(num);
            }
            return units;
        }
    },
    data(){
        return{
            search_info: '',
            return_sum : '',
            return_result: '',
            paginate_total: 0,
            current: 1,
            pageCount : 10,
            paginate : 25,
            get_memnow : '',
            res_sel : '',
            res_phone: '',
            res_name: '',
            res_pas: '',
            res_id: '',
            result_code : '',
            admin_detail : '',
            res_seq_no: '',
        }
    },
    mounted(){
        this.search_notice();
    },
    methods: {
        search_notice : function(){
            this.$http.post(this.$server+'/admin/getAdminSum',
            {
                admin_name : this.search_info
            }
            ,{headers : {
                auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
                }
            }).then((res) => {
                this.return_sum = res.data
                console.log(this.return_sum)
            })
            this.$http.post(this.$server+'/admin/getAdminList',
            {
                admin_name : this.search_info
            }
            ,{headers : {
                auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
                }
            }).then((res) => {
                this.return_result = res.data
                console.log(this.return_result)
                this.paginate_total = Math.ceil(this.return_result.length/this.paginate)
                console.log(this.paginate_total)
            })

        },
        setPaginate: function (i) {
            if (this.current == 1) {
                return i < this.paginate;
            }
            else {
                return (i >= (this.paginate * (this.current - 1)) && i < (this.current * this.paginate));
            }
        },
        updateCurrent: function (i) {
            this.current = i;

        },
        return_one: function(on_num){
            if(on_num != undefined){
                const parts = on_num.toString().split('.');
                parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                return parts.join('.');
            }  
        },
        get_mem_now : function(){
            this.$http.post(this.$server+'/admin/getCodeSubList',
            {
                code_type : 'AAS'
            }
            ,{headers : {
                auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
                }
            }).then((res) => {
                
                this.get_memnow = res.data

            })
        },
        reg_admin : function(){
            this.$http.post(this.$server+'/admin/setAdminInsert',
            {
                admin_id : this.res_id,
                admin_pwd : this.res_pas,
                admin_name : this.res_name, 
                admin_status : this.res_sel,
                admin_tel : this.res_phone,
            }
            ,{headers : {
                auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
                }
            }).then((res) => {
                this.result_code = res.data
                if(this.result_code == 'Y'){
                    this.$router.push('Setting02')
                }else if(this.result_code == 'N'){
                    alert('오류가 발생하였습니다.')
                }
            })
        },
        get_adminreg: function(){
            this.get_mem_now()
            this.admin_detail = ''
            this.res_id = ''
            this.res_pas = ''
            this.res_name = ''
            this.res_sel = ''
            this.res_phone = ''

        }
        ,
        get_adminde: function(i){
            this.get_mem_now()
            this.res_seq_no = i;
            this.$http.post(this.$server+'/admin/getAdminDetail',
            {
                seq_no : i
            }
            ,{headers : {
                auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
                }
            }).then((res) => {
                this.admin_detail = res.data
                this.res_id = this.admin_detail.admin_id
                this.res_pas = this.admin_detail.admin_pwd
                this.res_name = this.admin_detail.admin_name
                this.res_sel = this.admin_detail.admin_status
                this.res_phone = this.admin_detail.admin_tel
            })
        },
        set_adminadd: function(){
            if(this.res_sel == "AAS"){
                alert("근무자 상태를 선택해주세요.");
                return false;
            }
            if(!this.res_pas){
                alert("비밀번호를 입력해주세요.");
                return false;
            }
            if(!this.res_phone){
                alert("전화번호를 입력해주세요");
                return false;
            }
            this.$http.post(this.$server+'/admin/setAdminUpdate',
            {
                admin_pwd : this.res_pas,
                admin_name : this.res_name, 
                admin_status : this.res_sel,
                admin_tel : this.res_phone,
                seq_no : this.res_seq_no,
            }
            ,{headers : {
                auth_key :'c83b4631-ff58-43b9-8646-024b12193202'
                }
            }).then((res) => {
                if(res.data.result_code == 'Y'){{
                    alert("수정되었습니다.");
                    location.reload();
                }
                }else if(this.result_code == 'N'){
                    alert('오류가 발생하였습니다.')
                }
            })
        }
    }
}
</script>