"use client"
import React, {useState} from "react";
import "./BusModal.css";
import { AiOutlineClose, AiOutlineArrowRight, AiOutlineWoman, AiOutlineMan } from "react-icons/ai";
import { GiSteeringWheel } from "react-icons/gi";
import { AnimatePresence, motion } from "framer-motion";
import { useTravelContext } from "@/context/TravelContext";
import Link from "next/link";

interface BusModalProps {
    setShowBus: React.Dispatch<React.SetStateAction<boolean>>;
    showBus: boolean;
    price: number;
}

const BusModal: React.FC<BusModalProps> = ({price, setShowBus, showBus}) => {
  const [selectedGender, setSelectedGender] = useState(''); // Seçili cinsiyet bilgisi
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]); // Seçili koltuk numaraları
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedSeatNumber, setSelectedSeatNumber] = useState<number | null>(null); // Seçili koltuk numarası

  const handleSeatClick = (seatNumber: number) => {
    if(selectedSeats.length === 5) return; // Eğer seçili koltuk sayısı 5 ise fonksiyondan çık
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((num) => num !== seatNumber));
      setSelectedSeatNumber(null);
    } else {
      // Koltuk seçili değilse seçimi yap
      setSelectedSeats([...selectedSeats, seatNumber]);
      setSelectedSeatNumber(seatNumber);
      setIsModalVisible(true);
    }
  };

  const calculateSeatNumber = (rowIndex: number, seatIndex:number) => {
    const totalColumns = 8; // Her sırada toplam 8 koltuk var
    const seatNumber = rowIndex * totalColumns + (7 - seatIndex) + 1;
    return seatNumber;
  };

  return (
    <AnimatePresence>
      {showBus && (
        <motion.div
          className="modalBus"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div className="modalHeader">
              <p>Sefer Detayları</p>
              <button className="closeButton" onClick={() => setShowBus(false)}>
                  <AiOutlineClose />
              </button>
          </div>
          <div className="busModal">
            <div className="modalContent">
              <div className="modalSymbols">
                <div className="symbol">
                  <div className="symbolSquare manSelected"></div>
                  <p>Erkek - Dolu</p>
                </div>
                <div className="symbol">
                  <div className="symbolSquare womanSelected"></div>
                  <p>Kadın - Dolu</p>
                </div>
                <div className="symbol">
                  <div className="symbolSquare empty"></div>
                  <p>Boş Koltuk</p>
                </div>
                <div className="symbol">
                  <div className="symbolSquare selected"></div>
                  <p>Seçili Koltuk</p>
                </div>
              </div>
              <div className="bus">
                <div className="modalSeats">
                  <div className="seatTop">
                    {Array.from({ length: 2 }, (_, rowIndex) => (
                      <div className="seatRow" key={rowIndex}>
                        {Array.from({ length: 8 }, (_, seatIndex) => {
                          const seatNumber = calculateSeatNumber(rowIndex, seatIndex);
                          const isSelected = selectedSeats.includes(seatNumber); // selectedSeats, seçili koltuk numaralarını içeren bir dizi olsun
                          return (
                            <div className="btnComp">
                              {isModalVisible && selectedSeatNumber === seatNumber && (
                              <div className="genderModal">
                                <button className="womanBtn">
                                  <AiOutlineWoman/>
                                  <span>Kadın</span>
                                </button>
                                <button className="manBtn" >
                                  <AiOutlineMan/>
                                  <span>Erkek</span>
                                </button>
                              </div>
                              )}
                              <button
                                key={seatIndex}
                                className={`seat  ${isSelected ? 'selected' : ''}`}
                                onClick={() => handleSeatClick(seatNumber)}
                              >
                                {seatNumber}
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                  <div className="seatBtm">
                    {Array.from({ length: 2 }, (_, rowIndex) => (
                      <div className="seatRow" key={rowIndex}>
                        {Array.from({ length: 8 }, (_, seatIndex) => {
                          const seatNumber = calculateSeatNumber(rowIndex + 4, seatIndex);
                          const isSelected = selectedSeats.includes(seatNumber);
                          return (
                            <button
                              key={seatIndex}
                              className={`seat ${isSelected ? 'selected' : ''}`}
                              onClick={() => handleSeatClick(seatNumber)}
                            >
                              {seatNumber}
                            </button>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="driver">
                  <GiSteeringWheel style={{
                    fontSize: "2rem",
                    transform: "rotate(90deg)",
                    marginTop: "1rem",
                    color:"gray",
                    marginLeft: "1rem"
                  }} />
                </div>
              </div>
            </div>
          </div>
          <div className="busModalProcess">
            <div className="restSeats">
              <p>En fazla 5 koltuk seçebilirsiniz</p>
              <div className="seats" >
                {selectedSeats.map((seatNumber) => (
                  <div className="seat" key={seatNumber}>
                     {seatNumber}
                  </div>
                ))}
              </div>
            </div>
            <div className="continue">
              <div className="priceBusModal">
                Toplam Tutar:
                <p className="price">
                  {selectedSeats.length * price}
                </p>
                <span className="priceKüs" >.00TL</span>
              </div>
              <>
                <Link href="/payment">
                  <button className="chooseTicketBtn">Onayla ve Devam Et
                    <AiOutlineArrowRight />
                  </button>
                </Link>
              </>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BusModal;
