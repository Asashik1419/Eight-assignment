const getStoredCard = () =>{
    const storedCardSTR = localStorage.getItem('CardList');
    
    if (storedCardSTR) {
        const storedCardData = JSON.parse(storedCardSTR);
        return storedCardData;
    }
    else {
        return [];
    }
}

const addToStoredDB = (id) => {

    const storedCardData = getStoredCard();
    
    if(storedCardData.includes(id)) {
        console.log('hello')
    
        alert('app already install')
    
    }
    
    else {
    
        storedCardData.push(id);
        const data = JSON.stringify(storedCardData);
        localStorage.setItem('CardList',data)

    }
}


export {addToStoredDB, getStoredCard};