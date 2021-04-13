//Destructure

//vidu
const buaAn = {
    buaSang:'xoi',
    buaTrua:'pho',
    buaToi:'com'
}
const traiCay = ['cam','quyt','mit']
//kieu cu
// console.log(`Sang nay toi an ${buaAn.buaSang}`)
// console.log(`Trua nay toi an ${buaAn.buaTrua}`)
// console.log(`Toi nay toi an ${buaAn.buaToi}`)

// console.log(`Qua so 0 la ${traiCay[0]}`)
// console.log(`Qua so 1 la ${traiCay[1]}`)
// console.log(`Qua so 2 la ${traiCay[2]}`)


//kieu ES6
const{buaSang,buaTrua,buaToi} = buaAn
console.log(`Bua sang ${buaSang}`)
console.log(`Bua trua ${buaTrua}`)
console.log(`Bua toi ${buaToi}`)

const [cam,quyt,mit] = traiCay
console.log(`Qua so 0 la ${cam}`)
console.log(`Qua so 0 la ${quyt}`)
console.log(`Qua so 0 la ${mit}`)
