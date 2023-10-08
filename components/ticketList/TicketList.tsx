"use client"
import React, {useState, useEffect} from "react";
import "./TicketList.css";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import BusModal from "../busModal/BusModal";
import { useTravelContext } from "@/context/TravelContext";
import Link from "next/link";
import Spinner from "../spinner/Spinner";

const TicketList = () => {
const [showBus, setShowBus] = useState<boolean>(false);
const [journys, setJourneys] = useState<any>([]); 
const [loading, setLoading] = useState(true);

const {
    selectedFromCity,
    selectedToCity,
    selectedDate,
  } = useTravelContext();

useEffect(() => {
  const fetchJourneys = async () => {
    try {
      const res = await fetch("https://kadersarikaya.github.io/Data/seferler.json");
      const data = await res.json();
      setJourneys(data);
      setLoading(false);
    }
    catch(err) {
      console.log(err);
    }
  };
  fetchJourneys();
}, []);

const availableJourneyList = () => {
  if (loading) {
    return [];
  }
  const filteredJourneys = journys.filter((journey: any) => {
    return journey.from === selectedFromCity && journey.to === selectedToCity;
  });
  return filteredJourneys.length > 0 ? filteredJourneys : null; // Uygun yolculuk varsa döndür, yoksa null döndür
}

const handleSelectTicket = () => {
  setShowBus(true);
};

  return (
    <div className="ticketList">
      {loading && <Spinner />}
     <div className="ticketListContainer">
      {availableJourneyList() !== null ? (
      availableJourneyList().map((journey: any) => (
      <div className="listSefer">
        <div className="title">Öne Çıkan Seferler</div>
        <div className="listItem">
          <div className="Item column">
              <Image 
              alt="Picture of the author"
              width={80}
              height={40} 
              src={journey.image}/>
            <h4>
                {journey.from.toUpperCase()} - {journey.to.toUpperCase()}
            </h4>
          </div>
          <div className="Item">
            <MdAirlineSeatReclineNormal />
            <span>2+1</span>
          </div>
          <div className="Item">
            <b>{journey.departureTime}</b>
          </div>
          <div className="Item">
            <span>
              {journey.availableSeats} boş koltuk
            </span>
          </div>
          <div className="Item">
            <AiOutlineClockCircle />
            {journey.duration}
          </div>
          <div className="Item">
            <p className="price">{journey.price}</p>
            <span className="priceKüs" >.00TL</span>
          </div>
          <div className="Item">
            <button className="chooseTicketBtn" onClick={handleSelectTicket} >
              Seç
            <AiOutlineArrowRight />
            </button>
          </div>
        </div>
          {showBus && <BusModal price={journey.price} showBus={showBus} setShowBus={setShowBus} />}
      </div>
      ))
      ) : (
        <div className="notFound">
          <h1>Uygun yolculuk bulunamadı!</h1>
          <Link href="/home">
            <button className="backToHome"  >
              Aramaya Dön
            </button>
          </Link>
        </div>
      )}
      </div>
    </div>
  );
};

export default TicketList;

 