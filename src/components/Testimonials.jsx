import { IconQuote } from "@tabler/icons-react";
import Img2 from "../images/testimonials/user2.jpg";
import Img3 from "../images/testimonials/user3.jpg";

function Testimonials() {
  return (
    <>
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-content">
            <div className="testimonials-content__title">
              <h4>Бізге сіздің пікірің маңызды</h4>
              <h2>Клиенттің пікірлері</h2>
              <p>
              Біздің клиенттерімізге олардың пікірлерін оқу арқылы қандай оң әсер еткенімізді анықтаңыз. Біздің клиенттер біздің қызметіміз бен нәтижелерімізді бастан өткерді және олар сіздермен өздерінің оң тәжірибелерімен бөлісуге дайын.
              </p>
            </div>

            <div className="all-testimonials">
              <div className="all-testimonials__box">
                <span className="quotes-icon">
                  <IconQuote width={60} height={60} />
                </span>
                <p>
                "Біз осы веб-сайттан көлікті жалға алдық және керемет тәжірибе алдық! Брондау оңай болды және жалдау ақысы өте қолжетімді болды. "
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={Img2} alt="user_img" />
                    <span>
                      <h4>Мерей Ексанов</h4>
                      <p>Atyrau</p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="all-testimonials__box box-2">
                <span className="quotes-icon">
                  <IconQuote width={60} height={60} />
                </span>
                <p>
                "Көлік өте жақсы жағдайда болды және біздің сапарымызды одан да жақсартты. Бұл автокөлікті жалға алу дұрыс шешім деп білеміз"
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={Img3} alt="user_img" />
                    <span>
                      <h4>Altynbek Nurmukhammed</h4>
                      <p>Aktau</p>
                    </span>
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

export default Testimonials;
