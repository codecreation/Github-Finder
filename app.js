//init github
const github = new GitHub();

//searh input
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {

  const userText = e.target.value;

  if(userText !== ''){
    //make HTTP call


    github.getUser(userText)
    .then((data) => {
      console.log(data);
    })
  }

});
