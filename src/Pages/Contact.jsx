import { IconMail, IconMailOpened, IconPhone } from "@tabler/icons-react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import { IconLocation } from "@tabler/icons-react";

function Contact() {
  return (
    <>
      <section className="contact-page">
        <HeroPages name="Байланыс телефоны" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Қосымша ақпарат қажет пе?</h2>
              <p>
              Ғылыми-зерттеу, тәжірибелік-конструкторлық жұмыстардың көптеген салаларында білікті, сонымен қатар оқыту маманы болып табылатын көп қырлы маман. 15 жылдан астам тәжірибесі.
              </p>
              <a href="/">
                <IconPhone /> &nbsp; +7(702) 303-3385
              </a>
              <a href="/">
                <IconMail /> &nbsp; carrental@carmail.com
              </a>
              <a href="/">
                <IconLocation />
                &nbsp; Belgrade, Serbia
              </a>
            </div>
            <div className="contact-div__form">
              <form>
                <label>
                  Толық аты-жөні <b>*</b>
                </label>
                <input type="text" placeholder='Мерей Ексанов'></input>

                <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="youremail@example.com"></input>

                <label>
                  Қандай ақпарат керек жазыңыз <b>*</b>
                </label>
                <textarea placeholder="Осы жерге.."></textarea>

                <button type="submit">
                  <IconMailOpened />
                  &nbsp; Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
            <h2>Бізбен байланысып, көлікке тапсырыс беріңіз</h2>
            <span>
              <IconPhone width={40} height={40} />
              <h3>+7(702) 303-3385</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Contact;
