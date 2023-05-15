import axios from 'axios';
import { useQuery } from 'react-query';

const cryptoApiUrl = process.env.REACT_APP_CRYPTO_API_URL;
const cryptoApiHeaders = {
  'x-rapidapi-host': process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
  'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
};

const createRequest = (url) => axios.get(url, { headers: cryptoApiHeaders });

export const useGetCryptosQuery = (count) => useQuery(['cryptos', count], () => createRequest(`${cryptoApiUrl}/coins?limit=${count}`), {
    refetchOnWindowFocus: false,
  });

export const useGetCryptoDetailsQuery = (coinId) => useQuery(['cryptoDetails', coinId], () => createRequest(`${cryptoApiUrl}/coin/${coinId}`), {
    refetchOnWindowFocus: false,
  });

export const useGetCryptoHistoryQuery = ({ coinId, timeperiod }) => useQuery(['cryptoHistory', coinId, timeperiod], () => createRequest(`${cryptoApiUrl}/coin/${coinId}/history?timeperiod=${timeperiod}`), {
    refetchOnWindowFocus: false,
  });

export const useGetExchangesQuery = () => useQuery('exchanges', () => createRequest(`${cryptoApiUrl}/exchanges`), {
    refetchOnWindowFocus: false,
  });
