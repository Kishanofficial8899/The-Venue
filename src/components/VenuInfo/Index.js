import React from "react";
import CalenderImage from "../../resources/Images/Icons/calendar.png";
import Location from "../../resources/Images/Icons/location.png";
import Zoom from "react-reveal/Zoom";

const Index = () => {
  return (
    <div className="bg_black">
      <div className="center-wrapper">
        <div className="venue_wrapper">
          <Zoom duration={500}>
            <div className="venue_item">
              <div className="venue_outer">
                <div className="venue_inner">
                  <div className="venue_icon_square bg_red"></div>
                  <div
                    className="venue_icon"
                    style={{
                      background: `url(${CalenderImage})`
                    }}></div>
                  <div className="venue_title">Event Date & Time</div>
                  <div className="venue_decs">March 28 | 7 PM</div>
                </div>
              </div>
            </div>
          </Zoom>

          {/* second */}
          <Zoom duration={500} delay={500}>
            <div className="venue_item">
              <div className="venue_outer">
                <div className="venue_inner">
                  <div className="venue_icon_square bg-purpule"></div>
                  <div
                    className="venue_icon"
                    style={{
                      background: `url(${Location})`
                    }}></div>
                  <div className="venue_title">Event Location</div>
                  <div className="venue_decs sm-text">
                    JLN Stadium, New Delhi
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default Index;
