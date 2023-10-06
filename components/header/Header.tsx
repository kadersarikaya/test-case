"use client"
import React, {useState} from "react";
import "./Header.css";
import Select from 'react-select'
import { AiOutlineArrowRight } from "react-icons/ai";

const options = [
    { value: 'istanbul', label: 'İstanbul' },
    { value: 'ankara', label: 'Ankara' },
    { value: 'izmir', label: 'İzmir' },
    { value: 'antalya', label: 'Antalya' },
    { value: 'adana', label: 'Adana' },
    { value: 'adıyaman', label: 'Adıyaman' },
]

const today = new Date().toISOString().split('T')[0];

const Header:React.FC = () => {
    const [value, setValue] = useState<null>();
   
  return (
      <div className="container"> 
      <div className="headerContainer">
          <form className="search-form" >
            <div className="searchItem">
              <span>Nereden</span>
              <Select className="select" options={options} />
            </div>
            <div className="searchItem">
                <span>Nereye</span>
                <Select className="select" options={options} />
            </div>
            <div className="searchItem">
                <div>Gidiş Tarihi</div>
                <input 
                    type="date" 
                    className="inputDate"
                    min={today} 
                    defaultValue={today}
                />
            </div>
            <div className="searchItem">
              <button className="button" type="submit">
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
