import "./Doyouknow.css";

const Doyouknow = () => {
  const tex = [
    "세계에서 가장 많이 방문하는 웹사이트는 구글로, 한 달에 900억 페이지 이상의 조회수를 기록하고 있다.",
    "세계 최초의 웹캠은 1991년 캠브리지 대학의 커피포트를 감시하기 위해 만들어졌습니다.",

    "첫 번째 유튜브 영상은 2005년에 업로드되었고, Me at the zoo 라는 제목이었습니다",

    "지금까지 판매된 도메인 중 가장 비싼 이름은 Voice.com 으로, 2019년에 3천만 달러에 구입되었습니다.",
    "세종대학교의 랜드마크 애지헌 시계탑의 정체는 주차타워입니다.",
    "세종대학교 애지헌 시계탑에는 기린이 살고있다는 소문이 있습니다.",
  ];

  return (
    <div>
      <div className="you">
        알고 계셨나요?<br></br>
        {tex[Math.floor(Math.random() * 6)]}
      </div>
    </div>
  );
};
export default Doyouknow;
