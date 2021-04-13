const computedPropertyName = 'buaToi'

//gan 1 bien computedPropertyName vao buaAn , cai kho [com..] la 1 computedProperty
const buaAn = {
    buaSang: 'xoi',
    buaTrua: 'pho',
    [computedPropertyName]: 'bun'
}

const buaAnKhac = {
    buaSang: 'xoi',
    buaTrua: 'pho',
    [computedPropertyName + 'Homnay']: 'bun'
}

console.log(buaAnKhac )