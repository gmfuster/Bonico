
//TODO change the other pages to use this function instead of their own
function generateRandomNumber (length) {
    return Math.floor(Math.random() * length);      
}

export {generateRandomNumber};