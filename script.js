const size=document.getElementById('size'),qty=document.getElementById('qty'),total=document.getElementById('total');
function calc(){total.textContent=(Number(size.value)*Math.max(1,Number(qty.value)||1)).toFixed(0)}
size.addEventListener('change',calc);qty.addEventListener('input',calc);

document.getElementById('send').addEventListener('click',()=>{
  const name=document.getElementById('name').value.trim()||'a customer';
  const q=Math.max(1,Number(qty.value)||1);
  const label=size.options[size.selectedIndex].text.split(' –')[0];
  const note=document.getElementById('msg').value.trim();
  const text=`Hello Mr Rans, I'm ${name}. I'd like to order ${q} x ${label} of Tasty Shito (Total GH₵ ${total.textContent}).${note?' Note: '+note:''}`;
  window.open('https://wa.me/233553623954?text='+encodeURIComponent(text),'_blank');
});

document.getElementById('year').textContent=new Date().getFullYear();

const themeBtn=document.getElementById('theme');
themeBtn.addEventListener('click',()=>{
  const dark=document.documentElement.getAttribute('data-theme')==='dark'
    || (!document.documentElement.getAttribute('data-theme') && matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.setAttribute('data-theme',dark?'light':'dark');
  themeBtn.textContent=dark?'🌙':'☀️';
});