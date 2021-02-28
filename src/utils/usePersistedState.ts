import {useEffect, useState} from 'react'

function usePersistedState(key: string, initialState: any){
    const [state, setState] = useState(initialState)

    useEffect(() => {
        const storageValue = localStorage.getItem(key);

        if(storageValue){
            return setState(JSON.parse(storageValue))
        } else{
            return initialState
        }
    }, [key])
    
    useEffect(() =>{
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state])

    return [state, setState];
}

export default usePersistedState;