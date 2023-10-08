"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TravelContextProps {
    selectedFromCity: string;
    setSelectedFromCity: React.Dispatch<React.SetStateAction<string>>;
    selectedToCity: string;
    setSelectedToCity: React.Dispatch<React.SetStateAction<string>>;
    selectedDate: string;
    setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
}

const TravelContext = createContext<TravelContextProps | undefined>(undefined);

export const useTravelContext = (): TravelContextProps => {
    const context = useContext(TravelContext);
    if (!context) {
        throw new Error('useTravelContext must be used within a TravelProvider');
    }
    return context;
};

interface TravelProviderProps {
    children: ReactNode;
}

export const TravelProvider: React.FC<TravelProviderProps> = ({ children }) => {
    const [selectedFromCity, setSelectedFromCity] = useState<string>('');
    const [selectedToCity, setSelectedToCity] = useState<string>('');
    const [selectedDate, setSelectedDate] = useState<string>('');
    

    const values: TravelContextProps = {
        selectedFromCity,
        setSelectedFromCity,
        selectedToCity,
        setSelectedToCity,
        selectedDate,
        setSelectedDate,
        
    };

    return <TravelContext.Provider value={values}>{children}</TravelContext.Provider>;
};
