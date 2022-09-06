import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
    const { data } = await axios.get(url, {  
     headers: {
        'X-RapidAPI-Key': '8c4fbdccd7mshdb997bfd669f499p181aefjsn31a95ad15bcd',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
      }
    });

    return data;
}
