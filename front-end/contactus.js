const scriptURL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeKCNMTURHm4NAS_sD3U2H0ZgJnfcLSYPaYPSGZrna2iwpKLA/formResponse'


const form = document.forms['contact-form']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
