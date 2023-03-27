function getUserRole(name,role){
    switch(role){
        case "admin":
            return `${name } is admin with all the access`;
            // break;
        case "subAdmin":
            return `${name} is subadmin with all necessary`;
            // break;
        case "member":
            return`${name} is member with partial access`;
            // break;

            default:
                return`${name} is a trial user`;
                // break;

    }
}

console.log(getUserRole("Ganesh","subn"));