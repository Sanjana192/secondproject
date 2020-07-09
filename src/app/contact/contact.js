var firebaseConfig = {
  apiKey: "AIzaSyAP817LAbQM9YVRI38mXkKccIKGx0_oZ3o",
  authDomain: "secondproject-b0609.firebaseapp.com",
  databaseURL: "https://secondproject-b0609.firebaseio.com",
  projectId: "secondproject-b0609",
  storageBucket: "secondproject-b0609.appspot.com",
  messagingSenderId: "1023794930162",
  appId: "1:1023794930162:web:9e255b6af31a0d3eb20b6b",
  measurementId: "G-FDX1ECKC6G"
};

firebase.initializeApp(firebaseConfig);
var firestore =firebase.firestore();
const submitBtn = document.querySelector('#submit');

let userName=document.querySelector('#name');
let userEmail=document.querySelector('#mail');
let userMessage=document.querySelector('#msg');

const db=firestore.collection("contactData");

submitBtn.addEventListener('click',function(){
  let userNameInput = Name.value;
  let userEmailInput = Email.value;
  let userMessageInput = Message.value;

  db.doc()
   .set({
     name: userNameInput,
     mail: userEmailInput,
     message: userMessageInput
   })
   .then(function(){
      console.log("Data saved");
   })
   .catch(function(error){
     console.log(error);
   })


});
