"use client"
import React, {useState} from "react";
import "./Header.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useTravelContext } from "@/context/TravelContext";
import { useRouter } from "next/navigation";

const today = new Date().toISOString().split('T')[0];

const Header = () => {
  const router= useRouter();
   const {
    selectedFromCity,
    setSelectedFromCity,
    selectedToCity,
    setSelectedToCity,
    selectedDate,
    setSelectedDate,
   } = useTravelContext();

    const [values, setValues] = useState({
      from: selectedFromCity,
      to: selectedToCity,
      date: selectedDate,
    });
    
    const handleChangeFrom = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setValues({ ...values, from: e.target.value });
      setSelectedFromCity(e.target.value);
    };
    
    const handleChangeTo = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setValues({ ...values, to: e.target.value });
      setSelectedToCity(e.target.value);
    };

    const handleChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, date: e.target.value });
      setSelectedDate(e.target.value);
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if(!values.from || !values.to || !values.date) {
        alert("Lütfen tüm alanları doldurunuz.");
        return;
      }
      if(values.from === values.to) {
        alert("Lütfen farklı şehirler seçiniz.");
        return;
      }
      router.push("/searchList");
    }

  return (
      <div className="container"> 
      <div className="headerContainer">
        <form onSubmit={handleSubmit}  className="search-form" >
          <div className="searchItem">
            <span>Nereden</span>
            <select 
            onChange={handleChangeFrom}
            value={values.from}
            name="from"
            className="select" 
              >
                <option value="">Nereden</option>
                <option value="istanbul">İstanbul</option>
                <option value="ankara">Ankara</option>
                <option value="izmir">İzmir</option>
                <option value="antalya">Antalya</option>
                <option value="adana">Adana</option>
                <option value="adıyaman">Adıyaman</option>
              </select>
          </div>
          <div className="searchItem">
              <span>Nereye</span>
              <select 
                className="select" 
                onChange={handleChangeTo}
                value={values.to}
                name="to" 
              >
                <option value="">Nereye</option>
                <option value="istanbul">İstanbul</option>
                <option value="ankara">Ankara</option>
                <option value="izmir">İzmir</option>
                <option value="antalya">Antalya</option>
                <option value="adana">Adana</option>
                <option value="adıyaman">Adıyaman</option>
              </select>
          </div>
          <div className="searchItem">
              <div>Gidiş Tarihi</div>
              <input 
                type="date"
                name="date"
                value={values.date}
                onChange={handleChangeDate}
                className="inputDate"
                min={today} 
                defaultValue={today}
              />
          </div>
          <div className="searchItem">
            <button 
            type="submit"
            className="searchButton" 
            >
              <AiOutlineArrowRight />
              <span>Otobüs Bileti Bul</span>
            </button>
          </div>
        </form>
        <article className="article">
          <h1 className="title">Ucuz Otobüs Bileti Bulun</h1>
          <p className="subtitle">
            En uygun fiyatlarla bilet almak için hemen ara!
          </p>
        </article>
        </div>
      </div>
  );
};

export default Header;
