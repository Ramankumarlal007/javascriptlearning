function getUserRole(name, role){
    switch (role) {
        case "admin":
            return `${name} is admin with all access`
            // break;   //this is not necessary 
        case "subadmin":
            return `${name} is sub-admin with all access to crerate and delete courses.`
            break;    
        case "testprep":
            return `${name} is testprep with all access to create and delete test`
            break;    
        case "user":
            return `${name} is user to consume content`
            break;    
          
            
    
        default:
            return `${name} is a trail user.`
            break;
    }
}

getUserRole("Rishabh", "testprep");
// getUserRole("Rishabh", "testprep"); this is just calling a functionn and holding the returned valuecan't print
// console.log(getUserRole("Rishabh", "testprep"));
// now by crerating a variable
let getRole = getUserRole("Raman", "user");
console.log(getRole);

