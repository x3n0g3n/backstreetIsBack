const loginFormHandler = async (event) => {

    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    
    if (email && password) {
      // Send the e-mail and password to the server
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        
        const imgElement = document.createElement('img');
      
        imgElement.src = 'https://media0.giphy.com/media/3ohzdQ1IynzclJldUQ/giphy.gif?cid=ecf05e47jdam80vcbsxqq42lhwh71ehttsh4jl7jbi90yr70&ep=v1_gifs_search&rid=giphy.gif&ct=g';
        document.body.appendChild(imgElement);
      }
    }
  };

  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);

