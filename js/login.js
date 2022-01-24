var loginButtonEl = document.getElementById('loginBtn');

loginButtonEl.addEventListener('click', openLoginForm);


function openLoginForm(){
    document.body.classList.add("showLoginForm");
  }
  function closeLoginForm(){
    document.body.classList.remove("showLoginForm");
  }