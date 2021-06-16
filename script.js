/*======================================================

=====================================================*/
var cursor = document.querySelector(".cursor");
document.onmousemove = (e)=>{
  cursor.setAttribute('style', 'top: ' + (e.pageY - 10) + 'px; left:' + (e.pageX - 10)+ 'px;');
}
document.onclick = ()=>{
  cursor.classList.toggle("animate");
}

/*======================================================

=====================================================*/
const days = document.querySelector("#day");
const hours = document.querySelector("#hour");
const minutes = document.querySelector("#minute");
const second = document.querySelector("#second");

const current_year = new Date().getFullYear();
const new_year_time = new Date(`january 1 ${current_year + 1} 00:00:00`);

//update countdown time
function update_countdown_time(){
  const current_time = new Date();
  const diff = new_year_time - current_time;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  days.innerText = d;
  hours.innerText = h < 10 ? '0' + h : h;
  minutes.innerText = m < 10 ? '0' + m : m;
  second.innerText = s < 10 ? '0' + s : s;

  document.querySelector("hr").style.display = "block";

}
// refresh date after every 1 second
setInterval(update_countdown_time, 1000);
