const buaAn = {
    buaSang:'xoi',
    buaTrua:'pho',
    buaToi:'com'
}

//spread
// be tat ca phan tu trong bua an bo vao mang buaAn1 và them bua chieu la che
const buaAn1 = {...buaAn,buaChieu:'Che'}

console.log(buaAn1);

// be tat ca phan tu trong bua an bo vao mang buaAn1 và thay doi buaTrua la bun , buaToi la chao
const buaAn2 = {...buaAn, buaTrua:'bun', buaToi:'chao'}

console.log(buaAn2);

const tapHopso = [1,2,3]

const tapHopsomoi = [...tapHopso,4];

console.log(tapHopsomoi);