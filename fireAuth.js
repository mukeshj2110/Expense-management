// const auth = firebase.auth();

// auth.onAuthStateChanged((firebaseUser)=>{
//     if(firebaseUser){
//         window.location="./index.html"
//     }
// })

// const inp_emailEl = document.getElementById("email")
// const inp_passEl = document.getElementById("paswd")
// const signIn_Elmemnt = document.getElementById("btn_signIn")
// const google_Element = document.getElementById("btn_google_auth")
// const register_Element = document.getElementById("btn_register")

// signIn_Elmemnt.addEventListener("click", signIn)
// google_Element.addEventListener("click", signInGoogle)
// register_Element.addEventListener("click", register)


// async function register(e){
//     e.preventDefault()
//     const email = inp_emailEl.value;
//     const pass = inp_passEl.value;
//     try{
//         await auth.createUserWithEmailAndPassword(email,pass)
//         .then((user)=> console.log(user))
//     }catch(err){
//         alert(err.message);
//     }

// }

// async function signInGoogle(e){
//     e.preventDefault()
//     let provider = new firebase.auth.GoogleAuthProvider();
//     try{
//         await auth.signInWithPopup(provider).then((res)=>console.log(res.user))
//       }catch(err){
//         alert(err.message);
//     }

// }
// async function signIn(e){
//     e.preventDefault()
//     const email = inp_emailEl.value;
//     const pass = inp_passEl.value;
//     try{
//         await auth.signInWithEmailAndPassword(email,pass)
//         .then((user)=> console.log(user))
//     }catch(err){
//         alert(err.message);
//     }

// }