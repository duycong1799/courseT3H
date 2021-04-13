const buaAn = {
    buaSang:'xoi',
    buaTrua:'pho',
    buaToi:'com'
}
const bangChuCai = ['a','b','c'];
//ES cu
/* for(let moiBuaAn in buaAn) console.log(moiBuaAn) // chi in ra property
for(let moiChuCai in bangChuCai) console.log(moiChuCai) // chi in ra index */

// ES6 

// for(let moiBuaAn in buaAn) console.log(moiBuaAn) // loi vi for of khong ho tro cho object nen dung cach duoi
for(let moiBuaAn in buaAn) console.log(buaAn[moiBuaAn])
for(let moiChuCai of bangChuCai) console.log(moiChuCai) // in ra value