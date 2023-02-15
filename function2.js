// we can write this function into a varibale also:-
// var getUserRole = function (name, role){}   access of any information remains the same.
// var getUserRole = (name, role) => {}   arrow function


function getUserRole(name, role){
    switch (role) {
        case "admin":
            return `${name} is admin with all access`
            // break;   //this is not necessary 
        case "subadmin":
            return `${name} is sub-admin with all access to crerate and delete courses.`
            
        case "testprep":
            return `${name} is testprep with all access to create and delete test`
            
        case "user":
            return `${name} is user to consume content`
           
          
            
    
        default:
            return `${name} is a trail user.`
        
    }
}

getUserRole("Rishabh", "testprep");
// getUserRole("Rishabh", "testprep"); this is just calling a functionn and holding the returned valuecan't print
// console.log(getUserRole("Rishabh", "testprep"));
// now by crerating a variable
// let getRole = getUserRole("Raman", "user");
// console.log(getRole);
let getRole = getUserRole("Rishabh", "admin");
console.log(getRole);


