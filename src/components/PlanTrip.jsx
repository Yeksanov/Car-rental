import SelectCar from "../images/plan/icon1.png";
import Contact from "../images/plan/icon2.png";
import Drive from "../images/plan/icon3.png";

function PlanTrip() {
  return (
    <>
      <section className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
              <h3>Сапарыңызды қазір жоспарлаңыз</h3>
              <h2>Автокөлікті жылдам & оңай жалға алу</h2>
            </div>

            <div className="plan-container__boxes">
              <div className="plan-container__boxes__box">
                <img src={SelectCar} alt="icon_img" />
                <h3>Көлікті таңдаңыз</h3>
                <p>
                Бізде сіздің қажеттіліктеріңізді қанағаттандыру үшін тамаша көлік бар.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Contact} alt="icon_img" />
                <h3>Байланыс операторы</h3>
                <p>
                Біздің білімді және мейірімді операторларымыз кез келген сұрақтарға немесе алаңдаушылықтарға көмектесуге әрқашан дайын
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Drive} alt="icon_img" />
                <h3>Көлік жүргізейік</h3>
                <p>
                Сіз ашық жолға шықсаңыз да, 
                біз сізді көптеген көліктерімізбен қамтыдық
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;
