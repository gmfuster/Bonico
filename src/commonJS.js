
//TODO change the other pages to use this function instead of their own
function generateRandomNumber (length) {
    if (length === 0){
        return -1;
    }
    else{
        return Math.floor(Math.random() * length);      
    }
}

export {generateRandomNumber};