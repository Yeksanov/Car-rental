import MainImg from "../images/chooseUs/main.png";
import Box1 from "../images/chooseUs/icon1.png";
import Box2 from "../images/chooseUs/icon2.png";
import Box3 from "../images/chooseUs/icon3.png";
import { IconChevronRight } from "@tabler/icons-react";

function ChooseUs() {
  return (
    <>
      <section className="choose-section">
        <div className="container">
          <div className="choose-container">
            <img
              className="choose-container__img"
              src={MainImg}
              alt="car_img"
            />
            <div className="text-container">
              <div className="text-container__left">
                <h4>Не үшің бізді таңдау керек</h4>
                <h2>Сіз таба алатын ең жақсы құнды ұсыныстар</h2>
                <p>
                Біздің теңдесі жоқ ұсыныстарымызбен сіз таба алатын ең жақсы мәмілелерді табыңыз. Біз сізге ақшаңыздың ең жақсы құнын ұсынуға тырысамыз, осылайша сіз банкті бұзбай жоғары сапалы қызметтер мен өнімдерді пайдалана аласыз. Біздің ұсыныстарымыз сізге жалға алудың ең жақсы тәжірибесін ұсынуға арналған, сондықтан үлкен үнемдеу мүмкіндігін жіберіп алмаңыз.
                </p>
                <a href="#home">
                  Find Details &nbsp;
                  <IconChevronRight />
                </a>
              </div>
              <div className="text-container__right">
                <div className="text-container__right__box">
                  <img src={Box1} alt="car-img" />
                  <div className="text-container__right__box__text">
                    <h4>Кросс-шытырман оқиғаларға саяхат</h4>
                    <p>
                    Кросс-шытырман оқиғаларыңыз үшін біздің жоғары деңгейлі көліктерімізбен жүргізу тәжірибеңізді келесі деңгейге көтеріңіз.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box2} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>Барлық инклюзивті бағалар</h4>
                    <p>
                    Біздің барлығын қамтитын баға саясатымыздың арқасында сізге қажет нәрсенің барлығын бір ыңғайлы, ашық бағамен сатып алыңыз.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box3} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>Жасырын төлемдер жоқ</h4>
                    <p>
                    Біздің "жасырын төлемдерсіз" саясатымызбен жан тыныштығынан ләззат алыңыз. Біз ашық және адал баға белгілейміз.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
