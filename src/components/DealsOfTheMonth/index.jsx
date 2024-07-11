import React from 'react';
import './styles.css';

function DealsOfTheMonth() {
  return (
    <div className="deals-of-the-month">
      <div className="container-deals">
        <div className="deals">
          <h2>Deals Of The Month</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin</p>
          <button>Buy Now</button>
        </div>

        <div className="hurry">
          <h2>Hurry, Before It’s Too Late!</h2>
          <div className="timer">
            <div className="Days">
              <div className="rectangle">
                <p>02</p>
              </div>
              <p className="mins">Days</p>
            </div>

            <div className="Hr">
              <div className="rectangle">
                <p>06</p>
              </div>
              <p className="mins">Hr</p>
            </div>

            <div className="Mins">
              <div className="rectangle">
                <p>05</p>
              </div>
              <p className="mins">Mins</p>
            </div>

            <div className="Sec">
              <div className="rectangle">
                <p>30</p>
              </div>
              <p className="mins">Sec</p>
            </div>
          </div>
        </div>
      </div>

      <div className="products">
        <div className="elipse">
          <div className="elipse1"> &lt; </div>
          <div className="elipse1"> &gt; </div>
        </div>

        <div className="gorgeous">
          <img src=".\assets\gorgeous.png" alt="" />
          <div className="offert-sale">
            <p className="p-1">01 ----- Spring Sale</p>
            <p className="p-2">30% OFF</p>
          </div>
        </div>

        <div className="beautiful">
          <div className="beautiful-image">
            <img src=".\assets\beautiful.png" alt="" />
          </div>

          <div className="slider">
            <div className="elipse2"> </div>
            <div className="elipse2"> </div>
            <div className="elipse2"> </div>
            <div className="elipse2"> </div>
          </div>
        </div>

        <div className="cute">
          <img src=".\assets\cute.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default DealsOfTheMonth;

