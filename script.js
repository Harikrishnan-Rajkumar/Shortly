const url = "https://web.whatsapp.com/";
fetch('https://cleanuri.com/api/v1/shorten', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ url: url }),
})
.then(() => console.log('URL shortened successfully'))
.catch(error => console.error('Error:', error));
