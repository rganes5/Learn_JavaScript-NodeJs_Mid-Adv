var user="subAdmin";

switch(user){

    case "admin":
        console.log("You get full access.");
        break;
    case "subAdmin":
        console.log("You get partial access.");
        break;
    case "testprep":
        console.log("You get to create and delete preps");
        break;

    default:
        console.log("You are a trial user");
        break;

}

