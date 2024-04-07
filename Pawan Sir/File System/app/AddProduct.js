import * as fs from 'fs';
import { getData } from './GetProduct.js';

export function addProduct(product) {
    let data = JSON.parse(getData());
    data.push(product);
    
    fs.writeFileSync('product.json', JSON.stringify(data));
}
