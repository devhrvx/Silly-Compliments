var button = document.querySelector('button');
var generatedText = document.querySelector('.generated-compliment');

button.addEventListener('click', async () => {
    const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer sk-proj-UoFbSenA4qUHTDnQosc8T3BlbkFJ2UXSqjruHDRzj9jpsxMT'
        },
        body: JSON.stringify({
            model: 'text-davinci-003',
            prompt: 'Give me a random silly compliment without introduction',
            max_tokens: 50
        })
        
    });
    const data = await response.json();
    const compliment = data.choices[0].text.trim();
    generatedText.textContent = compliment;
});