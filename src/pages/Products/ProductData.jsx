import coat1 from '../../assets/images/coat1.jpg';
import coat2 from '../../assets/images/coat2.jpg';
import coat3 from '../../assets/images/coat3.jpg';

let products = [
    {
      name: "Coat1",
      id: 1001,
      amount: "11,0000원",
      image: coat1,
    },
    {
      name: "Coat2",
      id: 1002,
      amount: "12,0000원",
      image: coat2,
    },
    {
      name: "Coat3",
      id: 1003,
      amount: "13,0000원",
      image: coat3,
    },
  ];
  
  export function getProducts() {
    return products;
  }
  
  /**
   * @param {id} id
   * @returns {Product}
   */
  export function getProduct(id) {
    return products.find((product) => product.id === id);
  }
  
  /**
   * @param {id} id
   * @returns {void}
   */
  export function deleteProduct(id) {
    products = products.filter((product) => product.id !== id);
  }
  
  /**
   * @typedef {{ name: string; id: number; amount: string; image: image }} Product
   *  
   */