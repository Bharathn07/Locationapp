import React, { useState, createContext, useEffect } from "react";
import { tostMessage } from '../api/toastMessage';
import uuid from 'react-native-uuid';
import fetchReverseGeolocation from '../api/fetchData';

const LocationContext = createContext<any|null>(null);

const LocationProvider = ({children}:any)=>{
    const [locationStamp, setLocationStamp] = useState([])
    
    const [useCords, setUserCords] = useState({
        latitude: '',
        longitude: ''
    });

    return(
        <LocationContext.Provider value={{locationStamp, setLocationStamp, useCords, setUserCords}}>
            {children}
        </LocationContext.Provider>
    )
};

export {LocationContext, LocationProvider}