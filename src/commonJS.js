
//TODO change the other pages to use this function instead of their own
//
function generateRandomNumber (length) {
    if (length === 0){
        return -1;
    }
    else{
        return Math.floor(Math.random() * length);      
    }
}

function generateRandomNumberForXNumberOfValues(length) {
    if (length === 0){
        return -1;
    }
    else{
        return Math.floor(Math.random() * length) + 1;      
    }
}

//take as argument as base 1,
//take the max for the square matrix and return an array with the coordenates of the cells for the path
//ex
//c c c
//c c c
//c c c
//start will be on the top left and end on the bottom right
//the path will aways go right or down so no need to check other directions
function generatePathForMatrixFromStartToEnd (whatByWhat) {
    let path = [];
    let obj = null;

    if (whatByWhat < 3)
        return null;

    //do first cell
    path.push({i:0, j:0});

    //get whether we start on column or row
    let number = generateRandomNumberForXNumberOfValues(2);  

    if (number === 1){
        obj ={i:0, j:1};
    } else{
        obj ={i:1, j:0};
    }       
     
    path.push(obj);

    let loops = 0;
    while (obj.i !== (whatByWhat-1) || obj.j !== (whatByWhat-1)){

        loops ++;
        if (loops === 100){
            return [];
        }
        number = generateRandomNumberForXNumberOfValues(2);
        if (number === 1 && obj.j !== (whatByWhat-1)){
            obj = {i:obj.i, j: (obj.j + 1)}
        }else{            
            if (obj.i !== (whatByWhat-1)){ //if got random 2 or cannot go to the right, come down if possible                
                obj = {i:(obj.i + 1), j:obj.j}
            }else{ //before trying again if we got here with the random number and can't keep going, try moving to the right instead
                if (obj.j !== (whatByWhat-1)){ //if got random 2 or cannot go to the right, come down if possible                
                    obj = {i:obj.i, j: (obj.j + 1)}
                }
            }
        }       
        path.push(obj);      
    }
    //add the last one
    path.push({i:whatByWhat-1, j:whatByWhat-1});    
    return path;
}
export {generateRandomNumber, generatePathForMatrixFromStartToEnd};