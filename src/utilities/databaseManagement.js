const getStoredBook = () => {
    const storedBookStringfy = localStorage.getItem('watchList');

    if (storedBookStringfy) {
        const storedBookData = JSON.parse(storedBookStringfy);
        return storedBookData;
    }
    else {
        return [];
    }
}

const addToStoredDatabase = (id) => {
    const storedBookData = getStoredBook();

    if(storedBookData.includes(id)) {
        alert("This book already exists in the watchlist.")
    }
    else {
        storedBookData.push(id);
        const setBookData = JSON.stringify(storedBookData);
        localStorage.setItem('watchList', setBookData);
    }
}

export { addToStoredDatabase };