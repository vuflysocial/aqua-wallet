import axios from 'axios';
import { binance } from '../models/Chain';



export class TransactionService {

  static API_URL =  'https://api.quicknode.com/graphql';
  static API_KEY =  'QN_752826c85d814943a1ba1755d76f6d5d';

  static async getTransactions(address: string) {
    const options = {
        method: 'GET',
        url: `${TransactionService.API_URL}/${address}`,
        params: {chain: binance.name.toLowerCase()},
        headers: {accept: 'application/json', 'X-API-Key': TransactionService.API_KEY}
      };

    const response = await axios.request(options);
    return response;
  }

}