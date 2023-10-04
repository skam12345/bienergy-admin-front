<!-- eslint-disable no-undef -->
<template>
  <div style="width: 100%; height: 88%" class="kakakakakakaakakak">
    <div
      id="map"
      style="
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        top: 3%;
      "
    ></div>
    <PopupMap v-if="PopupMap" @closePopup="closePopup()" />
  </div>
</template>

<script>
import PopupMap from "../popup/PopupMap.vue";
export default {
  components: {
    PopupMap,
  },
  computed: {
    filteredSearchList() {
      if (this.mapSearchText) {
        return this.searchList.filter((search) => {
          return search.title.includes(this.mapSearchText);
        });
      }
      return this.searchList;
    },
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.loadMap();
    } else {
      this.loadScript();
    }
  },
  data() {
    return {
      myBottomSheet: null,
      mapSearchText: "",
      searchList: [
        {
          id: 0,
          title: "카카오a",
          lat: 33.450705,
          lng: 126.570677,
          //latlng: new window.kakao.maps.LatLng(33.450705, 126.570677)
        },
        {
          id: 1,
          title: "카생태연못",
          lat: 33.450936,
          lng: 126.569477,
          //latlng: new window.kakao.maps.LatLng(33.450936, 126.569477)
        },
        {
          id: 2,
          title: "텃밭",
          lat: 33.450879,
          lng: 126.56994,
          //latlng: new window.kakao.maps.LatLng(33.450879, 126.569940)
        },
        {
          id: 3,
          title: "근린공원",
          lat: 33.451393,
          lng: 126.570738,
          //latlng: new window.kakao.maps.LatLng(33.451393, 126.570738)
        },
      ],
      currentPosition: {},
      distance: "",
      map: null,
      positions: [],
      PopupMap: false,
    };
  },
  methods: {
    // const router = useRouter();
    // goUrl (path) {
    //   router.push({ path: path });
    // },
    // 현재 내위치 좌표
    getCurrentPosition() {
      if (!navigator.geolocation) {
        this.setAlert("위치 정보를 찾을 수 없습니다.1");
      } else {
        navigator.geolocation.getCurrentPosition(
          this.getPositionValue,
          this.geolocationError
        );
      }
    },
    getPositionValue(val) {
      this.currentPosition.latitude = val.coords.latitude;
      this.currentPosition.longitude = val.coords.longitude;
      // isPositionReady = true;
    },
    geolocationError() {
      this.setAlert("위치 정보를 찾을 수 없습니다.2");
    },
    setAlert(text) {
      alert(text);
    },

    // 바텀시트 오픈
    open() {
      this.myBottomSheet.open();
    },
    openPopup() {
      console.log("마커 눌렀을때 팝업");
      this.PopupMap = true;
    },
    // const close = () => {
    //   myBottomSheet.value.close();
    // };
    // 나와의 거리계산 함수
    getDistanceFromLatLonInKm(lat1, lng1, lat2, lng2) {
      function deg2rad(deg) {
        return deg * (Math.PI / 180);
      }
      let R = 6371; // Radius of the earth in km
      let dLat = deg2rad(lat2 - lat1); // deg2rad below
      let dLon = deg2rad(lng2 - lng1);
      let a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) *
          Math.cos(deg2rad(lat2)) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      let d = R * c; // Distance in km
      return d;
    },
    // 지도 중심좌표 이동시키기
    setCenterSearch(search) {
      const moveLatLon = new window.kakao.maps.LatLng(
        search.lat - 0.0017,
        search.lng
      );
      this.map.panTo(moveLatLon);
      this.mapSearchText = "";
      open();
      this.distance = this.getDistanceFromLatLonInKm(
        this.currentPosition.latitude,
        this.currentPosition.longitude,
        search.lat,
        search.lng
      );
      // console.log(this.distance);
    },
    setCenterMarker(lat, lng) {
      const moveLatLon = new window.kakao.maps.LatLng(lat - 0.0017, lng);
      this.map.panTo(moveLatLon);
      this.mapSearchText = "";
    },
    // 한글 키보드 입력
    changeKeyword(e) {
      this.mapSearchText = e.target.value;
      console.log(focus);
    },
    loadScript() {
      const script = document.createElement("script");
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?appkey=646e3428d939076d50f033635d46cea4&autoload=false&libraries=services";
      script.onload = () => window.kakao.maps.load(this.loadMap);

      document.head.appendChild(script);
    },
    // 맵 출력하기
    loadMap() {
      const container = document.getElementById("map");
      const options = {
        center: new window.kakao.maps.LatLng(
          37.557139454476,
          126.9186944275807
        ),
        // 현재 나의 위치로 할라면 아랫것
        // center: new window.kakao.maps.LatLng(
        //   this.currentPosition.latitude,
        //   this.currentPosition.longitude
        // ),
        level: 4,
      };
      // 여기다가 마커, 커스텀 오버레이 정보
      this.positions = [
        {
          id: 0,
          title: "아만티호텔 전기차충전소",
          latlng: new window.kakao.maps.LatLng(
            37.557139454476,
            126.9186944275807
          ),
        },
        {
          id: 1,
          title: "서교동 주민센터 전기차충전소",
          latlng: new window.kakao.maps.LatLng(
            37.5551025542786,
            126.9145884677376
          ),
        },
        {
          id: 2,
          title: "운복빌딩 전기차충전소",
          latlng: new window.kakao.maps.LatLng(
            37.5541025542786,
            126.9185884977376
          ),
        },
        {
          id: 3,
          title: "오마빌 전기차충전소",
          latlng: new window.kakao.maps.LatLng(
            37.5591025542786,
            126.9185884977376
          ),
        },
        {
          id: 4,
          title: "온세 빌딩 전기차충전소",
          latlng: new window.kakao.maps.LatLng(
            37.5561025542786,
            126.9155884977376
          ),
        },
        {
          id: 5,
          title: "네비게이토 출판사 전기차충전소",
          latlng: new window.kakao.maps.LatLng(
            37.5589025542786,
            126.9141884977376
          ),
        },
        {
          id: 6,
          title: "신부빌라 전기차충전소",
          latlng: new window.kakao.maps.LatLng(
            37.5589025542786,
            126.9055884977376
          ),
        },
        {
          id: 7,
          title: "노블캐슬 전기차충전소",
          latlng: new window.kakao.maps.LatLng(
            37.5570025542786,
            126.9051994977376
          ),
        },
        {
          id: 8,
          title: "한울타리 소공원 전기차충전소",
          latlng: new window.kakao.maps.LatLng(
            37.5589025542786,
            126.9300884977376
          ),
        },
        {
          id: 8,
          title: "신촌 태영 데시앙아파트 전기차충전소",
          latlng: new window.kakao.maps.LatLng(
            37.5535025542786,
            126.9310884977376
          ),
        },
      ];
      let customOverlay;

      this.map = new window.kakao.maps.Map(container, options);
      this.loadCustomOverlay(this.positions, customOverlay);
      this.loadMaker(this.positions, customOverlay);
      // this.loadZoomControl();
    },
    // 커스텀 오버레이
    loadCustomOverlay(positions, customOverlay) {
      for (let i = 0; i < positions.length; i++) {
        // eslint-disable-next-line no-unused-vars, no-undef
        customOverlay = new kakao.maps.CustomOverlay({
          map: this.map,
          clickable: true, // 커스텀 오버레이 클릭 시 지도에 이벤트를 전파하지 않도록 설정한다
          content: `
                    <div>
                        <div id = "${positions[i].id}" class = "ovr"
                            style="padding:0 5px;background:#fff; display: none;">${positions[i].id}${positions[i].title}

                        </div>
                    </div>`,
          position: positions[i].latlng, // 커스텀 오버레이를 표시할 좌표
          xAnchor: 0.5, // 컨텐츠의 x 위치
          yAnchor: 0, // 컨텐츠의 y 위치
        });
      }
      // 커스텀 오버레이를 지도에 표시합니다
      //customOverlay.setMap(map);
    },
    // 지도 우측 확대 축소 컨트롤러
    loadZoomControl() {
      // 지도에 확대 축소 컨트롤을 생성한다
      // eslint-disable-next-line no-undef
      const zoomControl = new kakao.maps.ZoomControl();
      // 지도의 우측에 확대 축소 컨트롤을 추가한다
      // eslint-disable-next-line no-undef
      map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
    },
    // 지정한 위치에 마커 불러오기
    loadMaker(positions) {
      // 마커 이미지의 주소
      const markerImageUrl =
          "https://t1.daumcdn.net/localimg/localimages/07/2012/img/marker_p.png",
        // eslint-disable-next-line no-undef
        markerImageSize = new kakao.maps.Size(40, 42), // 마커 이미지의 크기
        markerImageOptions = {
          // eslint-disable-next-line no-undef
          offset: new kakao.maps.Point(20, 42), // 마커 좌표에 일치시킬 이미지 안의 좌표
        };

      // 마커 이미지를 생성한다
      // eslint-disable-next-line no-undef
      let markerImage = new kakao.maps.MarkerImage(
        markerImageUrl,
        markerImageSize,
        markerImageOptions
      );

      for (let i = 0; i < positions.length; i++) {
        const marker = new window.kakao.maps.Marker({
          position: positions[i].latlng, // 마커의 좌표
          image: markerImage, // 마커의 이미지
          map: this.map, // 마커를 표시할 지도 객체
          title: positions[i].id.toString(), // 마커의 아이디
        });

        window.kakao.maps.event.addListener(marker, "click", () => {
          console.log("마커 클릭");
          this.openPopup();
          // distance = marker.getPosition().then(getDistanceFromLatLonInKm(currentPosition.latitude, currentPosition.longitude, marker.getPosition().Ma, marker.getPosition().La))
          this.distance = this.getDistanceFromLatLonInKm(
            this.currentPosition.latitude,
            this.currentPosition.longitude,
            marker.getPosition().Ma,
            marker.getPosition().La
          );
          console.log(this.currentPosition);
          console.log(this.distance);
          this.setCenterMarker(
            marker.getPosition().Ma,
            marker.getPosition().La
          );
        });

        marker.setMap(this.map);
      }
    },
    closePopup() {
      this.PopupMap = false;
    },

    // return {
    //   map: null,
    //   mapSearchText,
    //   filteredSearchList,
    //   changeKeyword,
    //   setCenterSearch,
    //   open,
    //   myBottomSheet,
    //   focusSetTimeout,
    //   goUrl,
    //   currentPosition,
    //   setCenterMarker,
    // };
  },
};
</script>
<style scoped>
.setMyPosition-cont {
  width: 45px;
  height: 45px;
  z-index: 1002;
  position: absolute;
  bottom: 15%;
  background-color: white;
  left: 3%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  box-shadow: 0px 0px 10px 3px #00000050;
}
.setMyPosition {
  background-image: url("../../assets/css/icon/Position.png");
  position: absolute;
  z-index: 1003;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  /* top: 34%;
  left: 91%; */
}
.bottom-sheet {
  padding-left: 5%;
  padding-bottom: 5%;
}
.coordinate {
  background-image: url("../../assets/css/icon/map.png");
  width: 3%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.charger-icon {
  padding-top: 3%;
  width: 24%;
  align-items: center;
  text-align: center;
}
.charger-icon1 {
  background-image: url(../../assets/css/icon/charge_01.png);
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
.phone-icon {
  background-image: url(../../assets/css/icon/phone.png);
  height: 20px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  vertical-align: middle;
}
.time-icon {
  background-image: url(../../assets/css/icon/time.png);
  height: 20px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  vertical-align: middle;
  padding-left: 9%;
}
.station-icon {
  background-image: url(../../assets/css/icon/station.png);
  height: 20px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  vertical-align: middle;
  padding-left: 10%;
}
.payment-btn {
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
</style>
