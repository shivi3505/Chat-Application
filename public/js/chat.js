const apiURL= 'http://localhost:3000'
const token = localStorage.getItem('token');
const username= localStorage.getItem('name');
async function sendMessage(){

    const message= document.getElementById('msgInput').value;
    console.log(message)
    try{
   await  axios.post(apiURL+'/message',{message
   },{
    headers:{
        token:token
    }
   });
   getMessages(username,message);
    }catch(err){
        console.log(err);
    }

}

 function getMessages(username,message){
   try{
   const messageList= document.getElementById('users-message');
    const li = document.createElement('li');
    li.textContent = `${username}: ${message}`;
    messageList.appendChild(li);
  
      
    }catch(err){
        console.log(err);
    }
}

async function getAllMessages(username){
    try{
     const response=   await axios.get(apiURL+'/message');
     const messageList= document.getElementById('users-message');
     const userList= document.getElementById('users-list');
     messageList.innerHTML = "";
    userList.innerHTML = "";
     console.log(response.data);
     
    response.data.data.forEach((user) => {
  const name = (user.name===username)?'you':user.name.split(' ')[0];
  const list= document.createElement('li');
  list.textContent= `${name} joined`;
  userList.appendChild(list);
  // loop through each message for this user
  user.messages.forEach((msgObj) => {
    const li = document.createElement('li');
    li.textContent = `${name}: ${msgObj.message}`;
    messageList.appendChild(li);
  });
});
      
    }catch(err){
        console.log(err);
    }
}
setInterval(()=>getAllMessages(username),2000);
// getAllMessages(username);