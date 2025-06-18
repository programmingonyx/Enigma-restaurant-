let body = document.getElementById('body');
let close = document.getElementById('close');
let moodToggler = document.querySelector('.mood-toggler')
let reasonContent = document.querySelectorAll('.reason-content')
let feedbackContainer = document.querySelectorAll('.feedback-container');
let link = document.querySelectorAll('.link')
let orderContainer = document.querySelector('.order');
close.addEventListener('click',()=>{
  orderContainer.style.display = 'none';
})
link.forEach(link => {
  link.addEventListener('click',(e)=>{
    orderContainer.style.display ='block';
  });
});
moodToggler.addEventListener('click',()=>{
  moodToggler.classList.toggle('white');
  body.classList.toggle('dark');
  reasonContent.forEach(reasonContent =>{
    reasonContent.classList.toggle('dark');
  })
  feedbackContainer.forEach(feedbackContainer=>{
    feedbackContainer.classList.toggle('dark');
  })
})