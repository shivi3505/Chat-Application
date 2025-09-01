const signupForm= document.getElementById('signup-form');
const apiURL= "http://localhost:3000/user/signup"
signupForm.addEventListener('submit',async (e)=>{
    e.preventDefault();
    document.getElementById('name-error').textContent=' ';
    document.getElementById('email-error').textContent=' ';
    document.getElementById('password-error').textContent=' ';
    document.getElementById('phone-error').textContent=' ';
    const name= document.getElementById('name').value;
    const email= document.getElementById('email').value;
    const password= document.getElementById('password').value;
    const phoneNumber= document.getElementById('phone-number').value;
    if(!name){
      document.getElementById('name-error').textContent="name is required";
    }
    if(!email){
      document.getElementById('email-error').textContent="email is required";
    }
    if(!password){
      document.getElementById('password-error').textContent="password is required";
    }
    if(!phoneNumber){
      document.getElementById('phone-error').textContent="phone number is required";
    }
const user={
     name,
    email,
    phoneNumber,
    password
}
console.log(user);
try{
    const addUser= await axios.post(apiURL,user);
    if(addUser.status==201){
        alert('user register successfully');
        window.location='../views/login.html'
        signupForm.reset();
        
    }
 
    

}catch(err){
   
if(err.status===409){
    alert(`${err.response.data.message}`)
}    
console.log(err);
}

}
)
