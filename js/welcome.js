// this was test script file and was not used in final project
firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("login&signup.html")
    }else{
        document.getElementById("user").innerHTML = "Hello, "+user.email
    }
})


function logout(){
    firebase.auth().signOut()
}
