//buat dict pecahan uang
//buat variabel hasilconvert assign array kosong
//lakukan perulangan 
//saat pecahan ke i < uang push pecahan i ke hasilconvert
//kurangi uang dengan pecahan ke i
//return hasilconvert

function convertToCoin(uang){
    const pecahan = [10000,5000,2000,1000,500,200,100,50,20,10,1]
    let hasilConvert = []
    // let jumlah = 0;
    for(let i=0; i<pecahan.length;i++){
        if(pecahan[i] <= uang){
            hasilConvert.push(pecahan[i])
            // jumlah+=pecahan[i]
            uang-= pecahan[i]
            i = i-1
        }
    }
    // console.log(jumlah)
    return hasilConvert
}
console.log(convertToCoin(543))//[500,20,20,1,1,1]
console.log(convertToCoin(7752))//[5000,2000,500,200,50,1,1]
console.log(convertToCoin(37454))//[10000,10000,10000,5000,2000,200,200,50,1,1,1,1]