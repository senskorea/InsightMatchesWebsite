import React,{createContext,useContext,useEffect,useState} from 'react';
import {money,validCurrency} from './currency.mjs';
const CurrencyContext=createContext('USD');
export function CurrencyProvider({children}){
 const [currency,setCurrency]=useState(()=>validCurrency(new URLSearchParams(window.location.search).get('currency')));
 useEffect(()=>{const update=e=>setCurrency(validCurrency(e.detail));window.addEventListener('deck-currency',update);return()=>window.removeEventListener('deck-currency',update)},[]);
 return <CurrencyContext.Provider value={currency}>{children}</CurrencyContext.Provider>;
}
export function useCurrency(){const currency=useContext(CurrencyContext);return {currency,format:(value,from='USD',compact=false)=>money(value,from,currency,compact)};}
