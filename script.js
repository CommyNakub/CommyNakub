const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const gif = document.querySelector('.gif');
const yesBtn = document.querySelector('.btn-yes');
const noBtn = document.querySelector('.btn-no');

yesBtn.addEventListener('click', ()=>{
    question.innerHTML = "I miss you too!"
    gif.src =
    "https://i.pinimg.com/originals/9c/37/35/9c3735a5f81a1f913e8d973eb1371155.gif"
});

noBtn.addEventListener('mouseover', ()=> {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const MaxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * MaxY);

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
})