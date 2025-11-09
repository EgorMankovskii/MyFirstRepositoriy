document.addEventListener('DOMContentLoaded', function(){
const btns = document.querySelectorAll('.btn-copy');
btns.forEach(btn => {
btn.addEventListener('click', () => {
// находим ближайший кодовый блок перед кнопкой
const card = btn.closest('.card');
const code = card.querySelector('pre code');
if(!code) return;
const text = code.innerText;
navigator.clipboard.writeText(text).then(() => {
btn.textContent = 'Скопировано!';
setTimeout(()=> btn.textContent = 'Скопировать', 1200);
}).catch(()=>{
btn.textContent = 'Ошибка';
setTimeout(()=> btn.textContent = 'Скопировать', 1200);
})
});
});
});