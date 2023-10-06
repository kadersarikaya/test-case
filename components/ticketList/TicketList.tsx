import React from "react";
import "./TicketList.css";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

const TicketList = () => {
  return (
    <div className="ticketList">
     <div className="ticketListContainer">
      <div className="title"></div>
      <div className="listItem">
        <div className="">
          <h3>{"Adana > Esenler"}</h3>
        </div>
        <div className="">
          <MdAirlineSeatReclineNormal />
          <span>2+1</span>
        </div>
        <div className="">
          <p>
            20:00
          </p>
          <span>
            <AiOutlineClockCircle />
            13 sa 45 dk
          </span>
          <span>
            5 boş koltuk
          </span>
        </div>
        <div className="">
          <p>698</p>
          <span>.00TL</span>
        </div>
        <div className="">
          <button>
              Seç
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
     </div>
    </div>
  );
};

export default TicketList;
