import { IconMail, IconPhoneCall } from "@tabler/icons-react";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>Автопрокат</span>
              </li>
              <li>
              Біз сіздің барлық жүргізу қажеттіліктеріңізге арналған көліктердің үлкен ассортиментін ұсынамыз. Бізде сіздің қажеттіліктеріңізді қанағаттандыру үшін тамаша көлік бар.
              </li>
              <li>
                <a href="tel:123456789">
                  <IconPhoneCall /> &nbsp; +7(702)303 3385
                </a>
              </li>

              <li>
                <a
                  href="mailto: 
                carrental@gmail.com"
                >
                  <IconMail />
                  &nbsp; автопрокат@gmail.com
                </a>
              </li>

              <li>
                <a
                  style={{ fontSize: "14px" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://xpeedstudio.com/"
                >
                  Xpeedstudio дизайны
                </a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Компания</li>
              <li>
                <a href="#home">Атырау</a>
              </li>
              <li>
                <a href="#home">Астана</a>
              </li>
              <li>
                <a href="#home">Ақтөбе</a>
              </li>
              <li>
                <a href="#home">Ақтау</a>
              </li>
              <li>
                <a href="#home">Орал</a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>ЖҰМЫС УАҚЫТЫ</li>
              <li>Дүй - Жұм: 9:00AM - 9:00PM</li>
              <li>Сенбі : 9:00AM - 19:00PM</li>
              <li>Жек : Демалыс</li>
            </ul>

            <ul className="footer-content__2">
              <li>Жазылу</li>
              <li>
                <p>Соңғы жаңалықтар мен жаңартулар үшін электрондық пошта мекенжайыңызға жазылыңыз.</p>
              </li>
              <li>
                <input type="email" placeholder="Email Address"></input>
              </li>
              <li>
                <button className="submit-email">Жіберіңіз</button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
