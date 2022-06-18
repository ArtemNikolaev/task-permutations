export function clear() {
    document.querySelector('#input').value = '';
    document.querySelector('#main-word').textContent = '';
    document.querySelector('#word-amount').textContent = '';
    document.querySelector('#word').textContent = '';
    document.querySelector('#letter').textContent = '';
    document.querySelector('#word-list').textContent = '';
    document.querySelector('#result').textContent = '';
}