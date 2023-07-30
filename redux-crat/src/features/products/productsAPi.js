import axios from 'axios';

export function fetchdata(){
  // return axios.get('https://fakestoreapi.com/products');
   return axios.get('https://dummyjson.com/products');
}