
document.addEventListener('DOMContentLoaded',()=>{
 const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');
 if(toggle&&nav)toggle.addEventListener('click',()=>{nav.style.display=nav.style.display==='flex'?'none':'flex'});
 const more=document.getElementById('showMore'),grid=document.getElementById('brandGrid');
 if(more&&grid)more.addEventListener('click',()=>{grid.classList.toggle('expanded');more.textContent=grid.classList.contains('expanded')?'عرض عدد أقل':'عرض المزيد من الماركات'});
});
