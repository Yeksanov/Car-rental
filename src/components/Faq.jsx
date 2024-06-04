import { IconChevronDown } from "@tabler/icons-react";
import { useState } from "react";

function Faq() {
  const [activeQ, setActiveQ] = useState("q1");

  const openQ = (id) => {
    setActiveQ(activeQ === id ? "" : id);
  };

  const getClassAnswer = (id) => {
    return activeQ === id ? "active-answer" : "";
  };

  const getClassQuestion = (id) => {
    return activeQ === id ? "active-question" : "";
  };

  return (
    <>
      <section className="faq-section">
        <div className="container">
          <div className="faq-content">
            <div className="faq-content__title">
              <h2>ЖИІ ҚОЙЫЛАТЫН СҰРАҚТАР</h2>
              <p>
              Біздің Веб-Сайтта автокөлікті жалға алуды брондау процесі туралы жиі қойылатын сұрақтар: жалпы мәселелер мен сұрауларға жауаптар.
              </p>
            </div>

            <div className="all-questions">
              <div className="faq-box">
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__question  ${getClassQuestion("q1")}`}
                >
                  <p>1. Автокөлік жалдау мәмілелерін салыстырудың ерекшелігі неде?</p>
                  <IconChevronDown />
                </div>
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__answer ${getClassAnswer("q1")}`}
                >
Автокөлікті жалға алу бойынша ұсыныстарды салыстыру өте маңызды, себебі ол сіздің бюджетіңізге және талаптарыңызға сәйкес келетін ең жақсы мәмілені табуға көмектеседі, бұл сіздің ақшаңыздың ең жоғары құнын алуға кепілдік береді. Әртүрлі опцияларды салыстыра отырып, сіз төмен бағаларды, қосымша қызметтерді немесе жақсырақ автомобиль үлгілерін ұсынатын мәмілелерді таба аласыз. Интернетте зерттеу жүргізу және әртүрлі жалға беруші компаниялардың бағаларын салыстыру арқылы автокөлік жалдау мәмілелерін таба аласыз.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__question ${getClassQuestion("q2")}`}
                >
                  <p>2. Автокөлікті жалға алу бойынша ұсыныстарды қалай табуға болады?</p>
                  <IconChevronDown />{" "}
                </div>
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__answer ${getClassAnswer("q2")}`}
                >
                 Интернетте зерттеу жүргізу және әртүрлі жалға беруші компаниялардың бағаларын салыстыру арқылы автокөлік жалдау мәмілелерін таба аласыз. Expedia, Kayak және Travelocity сияқты веб-сайттар бағаларды салыстыруға және жалға алудың қолжетімді нұсқаларын көруге мүмкіндік береді. Сондай-ақ, кез келген арнайы мәмілелер немесе жарнамалық акциялар туралы хабардар болу үшін электрондық пошта ақпараттық бюллетеньдеріне жазылу және әлеуметтік желілерде автокөлік жалдау компанияларын қадағалау ұсынылады.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__question ${getClassQuestion("q3")}`}
                >
                  <p>3. Автокөлікті жалға алудың  төмен бағасын қалай табуға болады?</p>
                  <IconChevronDown />
                </div>
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__answer ${getClassAnswer("q3")}`}
                >
                 Алдын ала тапсырыс беріңіз: жалға берілетін көлікті алдын ала Брондау көбінесе бағаның төмендеуіне әкелуі мүмкін. Бірнеше компаниялардың бағаларын салыстырыңыз: бірнеше автокөлік жалдау компанияларының бағаларын салыстыру үшін Kayak, Expedia немесе Travelocity сияқты веб-сайттарды пайдаланыңыз. Жеңілдік кодтары мен купондарды іздеңіз: жалдау бағасын төмендету үшін пайдалануға болатын жеңілдік кодтары мен купондарды Іздеңіз. Әуежайдан тыс жерде жалға алу кейде бағаның төмендеуіне әкелуі мүмкін.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
