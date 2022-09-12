const button = document.querySelector('.generate-advice');
const adviceId = document.querySelector('.advice-id');
const adviceDescription = document.querySelector('.advice-description')


async function buscarAPI(){
    const response = await fetch('https://api.adviceslip.com/advice')
    const adviceContent = await response.json()
    const adviceNumber = `Advice #${adviceContent.slip.id}`
    const adviceText = `"${adviceContent.slip.advice}"`
    
    adviceId.innerHTML = adviceNumber
    adviceDescription.innerHTML = adviceText
}


button.addEventListener('click', buscarAPI)

























































