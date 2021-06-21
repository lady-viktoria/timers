const message = document.querySelector('.message');
const messageTimer = document.querySelector('.messageTimer');

export default function renderMessage(text) {
    message.textContent = text;
}

export function renderDates (result) {
    message.innerHTML = `
        <span>Годы: ${result.years}</span>
        <span>Месяцы: ${result.months}</span>
        <span>Дни: ${result.days}</span>
    `
}

export function renderTimer (result) {
    messageTimer.innerHTML = `
        <span>Осталось: ${result} секунд</span>
    `
}

