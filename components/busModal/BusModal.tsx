import React from "react";
import "./BusModal.css";
import { AiOutlineClose, AiOutlineArrowRight } from "react-icons/ai";
import { GiSteeringWheel } from "react-icons/gi";
import { AnimatePresence, motion } from "framer-motion";

interface BusModalProps {
    setShowBus: React.Dispatch<React.SetStateAction<boolean>>;
    showBus: boolean;
}

const BusModal: React.FC<BusModalProps> = ({setShowBus, showBus}) => {
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
                    <div className="seatRow">
                      <div className="seat"></div>
                      <div className="seat"></div>
                      <div className="seat"></div>
                      <div className="seat"></div>
                      <div className="seat"></div>
                      <div className="seat"></div>
                      <div className="seat"></div>
                      <div className="seat"></div>
                    </div>
                    <div className="seatRow">
                      <div className="seat"></div>
                      <div className="seat"></div>
                      <div className="seat"></div>
                      <div className="seat"></div>
                      <div className="seat selected"></div>
                      <div className="seat"></div>
                      <div className="seat selected"></div>
                      <div className="seat"></div>
                    </div>
                  </div>
                  <div className="seatBtm">
                    <div className="seatRow">
                      <div className="seat"></div>
                      <div className="seat"></div>
                      <div className="seat"></div>
                      <div className="seat"></div>
                      <div className="seat"></div>
                      <div className="seat"></div>
                      <div className="seat"></div>
                      <div className="seat"></div>
                    </div>
                    <div className="seatRow">
                      <div className="seat"></div>
                      <div className="seat"></div>
                      <div className="seat"></div>
                      <div className="seat"></div>
                      <div className="seat selected"></div>
                      <div className="seat"></div>
                      <div className="seat selected"></div>
                      <div className="seat"></div>
                    </div>
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
              <div className="seats">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>
            </div>
            <div className="priceBusModal">
              Toplam Tutar:
              <p className="price">698</p>
              <span className="priceKüs" >.00TL</span>
            </div>
            <div className="continue">
              <button className="chooseTicketBtn">Onayla ve Devam Et
              <AiOutlineArrowRight />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BusModal;
