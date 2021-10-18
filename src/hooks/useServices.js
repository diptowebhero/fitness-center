import { useEffect, useState } from "react";


const useServices = () => {
    const [services, setService] = useState([]);

    useEffect(() => {
        fetch('/fakeData.json')
            .then(response => response.json())
            .then(data => setService(data))
    }, [])
    return{services,setService}
}
export default useServices