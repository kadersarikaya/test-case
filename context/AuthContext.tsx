"use client"
import React, { useEffect, createContext, useContext, useState, ReactNode } from 'react';

interface User {
    email: string;
    password: string;
    gender: string;
    name: string;
}

interface AuthContextProps {
    currentUser: User | null;
    register: (email: string, password: string, gender: string, name: string) => void;
    login: (email: string, password: string) => User | null;
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuth = (): AuthContextProps => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [registeredUsers, setRegisteredUsers] = useState<User[]>([]);
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    // localStorage'dan kayıtlı kullanıcıları alma
    useEffect(() => {
        const storedUsersString = localStorage.getItem('users');
        const storedUsers: User[] = storedUsersString ? JSON.parse(storedUsersString) : [];
        setRegisteredUsers(storedUsers);
    }, []);

    const register = (email: string, password: string, name: string, gender: string): void => {
        // Yeni kullanıcı kaydı oluştur
        const newUser: User = { email, password, gender, name };
        setRegisteredUsers(prevUsers => [...prevUsers, newUser]);
        // localStorage'a kullanıcıları kaydetme
        localStorage.setItem('users', JSON.stringify([...registeredUsers, newUser]));
    };

    const login = (email: string, password: string): User | null => {
        // Kullanıcı girişi gerçekleştirme işlemleri
        const storedUsersString = localStorage.getItem('users');
        const storedUsers: User[] = storedUsersString ? JSON.parse(storedUsersString) : [];
        const user = storedUsers.find(user => user.email === email && user.password === password);
        if (user) {
            setCurrentUser(user);
        }
        return user || null;
    };

    const logout = (): void => {
        // Kullanıcı oturumu kapatma işlemleri
        setCurrentUser(null);
    };

    const contextValue: AuthContextProps = {
        currentUser,
        register,
        login,
        logout,
    };

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
