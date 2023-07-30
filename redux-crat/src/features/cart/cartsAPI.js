import axios from 'axios';

export function fetchItem(){
  // return axios.get('https://fakestoreapi.com/products');
   return axios.get('http://localhost:4000/cart');
}
export function addItem(item){
  // return axios.get('https://fakestoreapi.com/products');
   return axios.post('http://localhost:4000/cart',item);
}
export function updateItem(id,itemUpdate){
  // return axios.get('https://fakestoreapi.com/products');
   return axios.patch(`http://localhost:4000/cart/${id}`,itemUpdate);
}
export function deleteItem(id){
  // return axios.get('https://fakestoreapi.com/products');
   return axios.delete(`http://localhost:4000/cart/${id}`);
}