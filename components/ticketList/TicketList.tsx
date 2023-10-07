"use client"
import React, {useState} from "react";
import "./TicketList.css";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import BusModal from "../busModal/BusModal";


const TicketList = () => {
const [showBus, setShowBus] = useState<boolean>(false);
  const handleSelectTicket = () => {
    setShowBus(true);
  };
  return (
    <div className="ticketList">
     <div className="ticketListContainer">
      <div className="title">Öne Çıkan Seferler</div>
      <div className="listItem">
        <div className="Item column">
            <Image 
            alt="Picture of the author"
            width={80}
            height={40} 
            src="https://cdn2.enuygun.com/img/company_logos_bus/metro-turizm.png"/>
          <h3>{"Adana > Esenler"}</h3>
        </div>
        <div className="Item">
          <MdAirlineSeatReclineNormal />
          <span>2+1</span>
        </div>
        <div className="Item">
          <b>20:00</b>
        </div>
        <div className="Item">
          <span>
            5 boş koltuk
          </span>
        </div>
        <div className="Item">
          <AiOutlineClockCircle />
          13 sa 45 dk
        </div>
        <div className="Item">
          <p className="price">698</p>
          <span className="priceKüs" >.00TL</span>
        </div>
        <div className="Item">
          <button className="chooseTicketBtn" onClick={handleSelectTicket} >
            Seç
          <AiOutlineArrowRight />
          </button>
        </div>
      </div>
        {showBus && <BusModal showBus={showBus} setShowBus={setShowBus} />}
      <div className="listItem">
        <div className="Item column">
          <Image src={"https://cdn2.enuygun.com/img/company_logos_bus/can-diyarbakir-turizm.png"}
            alt="Picture of the author"
            width={80}
            height={40} 
          />
          <h3>{"Adana > Esenler"}</h3>
        </div>
        <div className="Item">
          <MdAirlineSeatReclineNormal />
          <span>2+1</span>
        </div>
        <div className="Item">
          <b>20:00</b>
        </div>
        <div className="Item">
          <span>
            5 boş koltuk
          </span>
        </div>
        <div className="Item">
          <AiOutlineClockCircle />
          13 sa 45 dk
        </div>
        <div className="Item">
          <p className="price">698</p>
          <span className="priceKüs" >.00TL</span>
        </div>
        <div className="Item">
          <button className="chooseTicketBtn" >
            Seç
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
      <div className="listItem">
        <div className="Item column">
          <Image src={"https://cdn2.enuygun.com/img/company_logos_bus/sec-turizm.png"} 
            alt="Picture of the author"
            width={80}
            height={40}
          />
          <h3>{"Adana > Esenler"}</h3>
        </div>
        <div className="Item">
          <MdAirlineSeatReclineNormal />
          <span>2+1</span>
        </div>
        <div className="Item">
          <b>20:00</b>
        </div>
        <div className="Item">
          <span>
            5 boş koltuk
          </span>
        </div>
        <div className="Item">
          <AiOutlineClockCircle />
          13 sa 45 dk
        </div>
        <div className="Item">
          <p className="price">698</p>
          <span className="priceKüs" >.00TL</span>
        </div>
        <div className="Item">
          <button className="chooseTicketBtn" >
            Seç
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
      <div className="listItem">
        <div className="Item">
          <h3>{"Adana > Esenler"}</h3>
        </div>
        <div className="Item">
          <MdAirlineSeatReclineNormal />
          <span>2+1</span>
        </div>
        <div className="Item">
          <b>20:00</b>
        </div>
        <div className="Item">
          <span>
            5 boş koltuk
          </span>
        </div>
        <div className="Item">
          <AiOutlineClockCircle />
          13 sa 45 dk
        </div>
        <div className="Item">
          <p className="price">698</p>
          <span className="priceKüs" >.00TL</span>
        </div>
        <div className="Item">
          <button className="chooseTicketBtn" >
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
