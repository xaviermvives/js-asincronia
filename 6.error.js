const datos = [];

const getDatos = () => {
    return new Promise((resolve, reject) => {
        if(datos.length == 0){
            reject(new Error('No existen datos'))
        }
        setTimeout(() => {
            resolve(datos)
        }, 1500)
    })
    
}

async function fetchingData () {
    try{
        const data = await getDatos();
        console.log(data);
    } catch (err) {
        console.log(err)
    }
}

fetchingData() //Error: No existen datos