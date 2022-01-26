                        
                        const signUpButton = document.getElementById('signUp');
                        const signInButton = document.getElementById('signIn');
                        const container = document.getElementById('container');
                        
                        signUpButton.addEventListener('click', () => {
                            container.classList.add("right-panel-active");
                        });
                        signInButton.addEventListener('click', () => {
                            container.classList.remove("right-panel-active");
                        });



                        //create account
                        var createAccountDivEl = document.getElementById('create-account-div');
                        var createAccountEl = document.getElementById('create-account-btn');
                        createAccountEl.addEventListener('click', createAccountButton);

                        function createAccountButton() {
                            createAccountDivEl.classList.remove("display-none");

                        }
                                  
                        function closeCreateAccountPopUp() {
                            createAccountDivEl.classList.add("display-none");
                            console.log('clicked');
                        }
                        

                        // 1st right close out button
                        var blackXbuttonRight = document.getElementById('x-btn-right-1').addEventListener('click', closeCreateAccountPopUp);
                        // 2nd page left close out button
                        var leftXButton = document.getElementById('x-btn-left-1').addEventListener('click', closeCreateAccountPopUp);


                        // http://devingine.com/post/how-to-make-login-and-registration-form-html-css-and-javascript-with-source-code