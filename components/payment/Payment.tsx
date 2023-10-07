import React from "react";
import "./Payment.css";

const Payment = () => {
  return (
    <div className="payment" >
      <div className="paymentContainer">
        <form>
          <div className="titlePayment">
            <h1>{"Adana > Esenler"}</h1>
            <span>Gidiş</span>
          </div>
          <div className="form-group">
            <label htmlFor="card-number">Kart Numarası</label>
            <input type="text" id="card-number" name="card-number" placeholder="1234 5678 9012 3456" required/>
          </div>
          <div className="form-group">
            <label htmlFor="expiration-date">Son Kullanma Tarihi</label>
            <input type="text" id="expiration-date" name="expiration-date" placeholder="MM / YY" required/>
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input type="text" id="cvv" name="cvv" placeholder="123" required/>
          </div>
          <div className="submit">
            <div className="totalPrice">
              <span>Toplam Tutar: </span>
              <span> 750 TL</span>
            </div>
            <button type="submit">Ödeme Yap</button>
          </div>
        </form>
        <div className="passengerInfo">
          <div className="info">
            <div className="passenger">
              <h3>Sefer Bilgileri</h3>
              <div className="departure">
                <span>Kalkış: </span>
                <span> Adana</span>
              </div>
              <div className="arrival">
                <span>Varış: </span>
                <span> Esenler</span>
              </div>
              <div className="date">
                <span>Tarih: </span>
                <span> 12.12.2021</span>
              </div>
              <div className="time">
                <span>Saat: </span>
                <span> 12:00</span>
              </div>
              <div className="firm">
                <span>Firma: </span>
                <span> Ulusoy</span>
              </div>
            </div>
          </div>
          <div className="info">
            <div className="passenger">
              <h3>Yolcu ve Koltuk Bilgileri</h3>
              <div className="name">
                <span>1.Yetişkin: </span>
                <span> Ali Veli</span>
              </div>
              <div className="seat">
                <span>Koltuk No: </span>
                <span> 12</span>
              </div>
            </div>
            <div className="passenger">
              <div className="name">
                <span>1.Yetişkin: </span>
                <span> Ali Veli</span>
              </div>
              <div className="seat">
                <span>Koltuk No: </span>
                <span> 12</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
