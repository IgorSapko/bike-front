import React, {createContext, useState} from 'react';

const DataContext = createContext();

export const DataProvider =({children})=>{
    const [data, setData] = useState([]);
    return(
        <DataContext.Provider value ={data}>
            {children}
            </DataContext.Provider>     
    )
}