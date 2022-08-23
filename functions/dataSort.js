import orderData from '../functions/orderData';
import Bikes from '../data/Bikes.json';

export function dataSort(key, order){
        const data = Bikes.data;
        let sortData = data.sort(orderData(key, order));
    return sortData;
}