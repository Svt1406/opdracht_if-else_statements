const myAge = 18; 
const isFemale = true;
const driverStatus = 'bob'; 

if (myAge >= 18 ){
    if (isFemale) {
        console.log("Welcome to our club!");
        console.log("welcome to our ladiesnight")
        if (driverStatus == 'bob') {
            console.log("Your status is bob and you may drive")
        }
        else {
            console.log("Your are not the bob so you may not drive")
        }
    }
    else{
        console.log("Sorry it's Ladies night you are not allowed");
    }
}
else {
    console.log("Sorry you are too young and not allowed to enter our club!");
} 