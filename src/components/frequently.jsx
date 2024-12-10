import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Frequently() {
  const [showAnswers, setShowAnswers] = useState([true, false, false, false]);

  const toggleAnswer = (index) => {
    setShowAnswers((prevShowAnswers) => {
      const newShowAnswers = [...prevShowAnswers];
      newShowAnswers[index] = !newShowAnswers[index];
      return newShowAnswers;
    });
  };

  

  return (
    <div>
      <section className="content_sec">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-3">
              <h3 className="main_heading mb-lg-3 mb-md-3 mb-sm-3 mb-1">
                Frequently Asked Questions
              </h3>
            </div>
            <div className="offset-lg-1 col-lg-10">
              <ul className="faq_ul">
                <li className='active'>
                  <h6 onClick={() => toggleAnswer(0)}>
                    What vehicles do you have?{' '}
                    <i className={`fas ${showAnswers[0] ? 'fa-minus' : 'fa-plus'}`} />
                  </h6>
                  {showAnswers[0] && (
                    <p>
                      We have a range of vehicles to suit your needs. You can choose from
                      saloon (up to 4 passengers), estate (up to 4 passengers and extra
                      luggage space), MPV (up to 6 passengers), executive cars, Minivans,
                      Minibuses, and Coaches.
                    </p>
                  )}
                </li>
                <li>
                  <h6 onClick={() => toggleAnswer(1)}>
                    What areas do you cover?{' '}
                    <i className={`fas ${showAnswers[1] ? 'fa-minus' : 'fa-plus'}`} />
                  </h6>
                  {showAnswers[1] && (
                    <p>
                      We have a range of vehicles to suit your needs. You can choose from
                      saloon (up to 4 passengers), estate (up to 4 passengers and extra
                      luggage space), MPV (up to 6 passengers), executive cars, Minivans,
                      Minibuses, and Coaches.
                    </p>
                  )}
                </li>
                <li>
                  <h6 onClick={() => toggleAnswer(2)}>
                    How do you count passengers?{' '}
                    <i className={`fas ${showAnswers[2] ? 'fa-minus' : 'fa-plus'}`} />
                  </h6>
                  {showAnswers[2] && (
                    <p>
                      We have a range of vehicles to suit your needs. You can choose from
                      saloon (up to 4 passengers), estate (up to 4 passengers and extra
                      luggage space), MPV (up to 6 passengers), executive cars, Minivans,
                      Minibuses, and Coaches.
                    </p>
                  )}
                </li>
                <li>
                  <h6 onClick={() => toggleAnswer(3)}>
                    How do you count passengers?{' '}
                    <i className={`fas ${showAnswers[3] ? 'fa-minus' : 'fa-plus'}`} />
                  </h6>
                  {showAnswers[3] && (
                    <p>
                      We have a range of vehicles to suit your needs. You can choose from
                      saloon (up to 4 passengers), estate (up to 4 passengers and extra
                      luggage space), MPV (up to 6 passengers), executive cars, Minivans,
                      Minibuses, and Coaches.
                    </p>
                  )}
                </li>
              </ul>
            </div>
            <div className="col-12 text-center mt-lg-5 mt-4">
              <Link to={"/faq"} className="button_2">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Frequently;
