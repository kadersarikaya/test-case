"use client"
import React, {useState} from "react";
import "./Payment.css";
import Spinner from "../spinner/Spinner";
import { useRouter } from "next/navigation";

const Payment: React.FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
  const [cardNumber, setCardNumber] = useState(''); // Kredi kartı numarası
  const [expirationDate, setExpirationDate] = useState(''); // Son kullanma tarihi
  const [cvv, setCvv] = useState(''); // CVV numarası
  const handlePaymentSubmit: any = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!cardNumber || !expirationDate || !cvv) {
      alert("Lütfen tüm alanları doldurunuz!");
      setIsPaymentSuccessful(false);
      return; // Eğer gerekli alanlar eksikse fonksiyondan çık
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsPaymentSuccessful(true);
    }, 1000);
  };

  if (isPaymentSuccessful) {
    return (
      <div className="successMsg">
        <div className="tick">
          ✅
        </div>
        <p>Ödeme Başarılı!</p>
        <button onClick={() => router.push("/home")}>Ana Sayfaya Dön</button>
      </div>
    );
  }

  if (isLoading) {
    return (
      <Spinner />
    );
  }

  
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
            <input 
             type="text" id="card-number"
             value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
             name="card-number" placeholder="1234 5678 9012 3456" required/>
          </div>
          <div className="form-group">
            <label htmlFor="expiration-date">Son Kullanma Tarihi</label>
            <input 
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
            type="text" id="expiration-date" name="expiration-date"
             placeholder="MM / YY" required/>
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input 
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            type="text" id="cvv" name="cvv" placeholder="123" required/>
          </div>
          <div className="submit">
            <div className="totalPrice">
              <span>Toplam Tutar: </span>
              <span> 750 TL</span>
            </div>
            <button onClick={handlePaymentSubmit} type="submit">Ödeme Yap</button>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
