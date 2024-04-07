import * as fs from 'fs';

export function getData() {
    let data = fs.readFileSync('product.json', 'utf-8');
    return data;
}
