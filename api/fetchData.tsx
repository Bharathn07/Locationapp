import axios from "axios";
import {API_KEY} from '@env';

async function fetchReverseGeolocation(lat: any, long:any) {
    console.log('did called', lat, long);    
    try {
        const response = await axios.get(`http://api.positionstack.com/v1/reverse?access_key=${API_KEY}&query=${lat},${long}&limit=1`);           
        // console.log("from res",response.data);
        return response.data;
        
    } catch (error) {
        if(axios.isAxiosError(error)){
            console.log("ERROR:check axios:", error.message);
            return '404';
        }else{
            console.log("ERROR: something else", error);
            return "404"
        }
    }
}

export default fetchReverseGeolocation;