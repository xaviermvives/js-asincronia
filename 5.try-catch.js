const datos = [
    {
        id: 1,
        title: "Iron Man",
        year: 2008
    },
        {
        id: 2,
        title: "Spiderman: Homecoming",
        year: 2017
    },

        {
        id: 3,
        title: "Avengers: Endgame",
        year: 2019
    },

];

const getDatos = () => {
    return new Promise((resolve, reject) => {
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

fetchingData()