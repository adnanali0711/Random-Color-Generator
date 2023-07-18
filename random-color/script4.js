const body=document.body;
const he=document.querySelector("h1");
const btn=document.querySelector('button');
function randomColorGenerator(){
    const red=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);
    const randomColor=`rgb(${red},${green},${blue})`;
    return randomColor;
}
btn.addEventListener('click',(e)=>{
    he.innerText="Current Color:"+randomColorGenerator();
    body.style.backgroundColor=randomColorGenerator();
    btn.style.color=randomColorGenerator();
})



