



const Authfunction = async (user) => {
    try{
        const response = await fetch("de1.localto.net:3956/auth", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
      console.log("user", user);
      console.log("response", response);
    }
    catch(error){
        console.log(error)
    }
    

}

export default Authfunction;