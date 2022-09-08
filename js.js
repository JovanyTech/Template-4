let section = document.querySelector(".skills")
let spans = document.querySelectorAll(".the-progress span")
window.onscroll = function(){
    if(window.scrollY >= section.offsetTop - 500){
    spans.forEach((span) => {
        span.style.width = span.dataset.width
		})
		}
}

let days = document.querySelector(".days");
let hours = document.querySelector(".hours");
let mins = document.querySelector(".minutes");
let secs = document.querySelector(".seconds");

let count = new Date("Dec 10,2022 22:58:58").getTime()

let counter = setInterval(() => {
    let Datenow = new Date().getTime()
    let dateDiff = count - Datenow;

    let daysF =Math.floor(dateDiff / (1000 * 60 * 60 * 24))
    let hoursF = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    let MinF = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60))
    let SecF = Math.floor(dateDiff % (1000 * 60) / 1000)

    days.innerHTML = daysF
    hours.innerHTML = hoursF
    mins.innerHTML = MinF < 10 ? `0${MinF}`:MinF;
    secs.innerHTML = SecF < 10 ? `0${SecF}`:SecF;
if(dateDiff < 0){
clearInterval(counter);
days.innerHTML = "P"
hours.innerHTML = "L"
mins.innerHTML = "A"
secs.innerHTML = "Y"
}
}, 1000);
let v1 = document.querySelector(".vl-one")
let v2 = document.querySelector(".vl-two")
let video = document.querySelector(".v")
let info = document.querySelector(".preview .info")
v2.onclick = function(){
	video.setAttribute("src","vm.mp4")
	info.textContent = "Hello"
}
v1.onclick = function(){
	video.setAttribute("src","v.mp4")
	info.textContent = "What We can do"
}

let nums = document.querySelectorAll(".box .n")
let section2 = document.querySelector(".stats")
if(window.scrollY >= section.offsetTop - 500){
	nums.forEach((num) => startCount(num))
}

function startCount(el){
	let goal = el.dataset.goal
	let count2 = setInterval(() => {
		el.textContent++;
		if(el.textContent == goal){
			clearInterval(count2)
		}
},2000 / goal)}