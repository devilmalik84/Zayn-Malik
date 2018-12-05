let x = document.getElementById("myaudio1");
let y = document.getElementById("myaudio2");
let z = document.getElementById("myaudio3");
let a = document.getElementById("myaudio4");
let b = document.getElementById("myaudio5");

function play() {
	y.pause();
	z.pause();
	a.pause();
	b.pause();
	x.play();
}
function playy() {
	// body...
		x.pause();
		z.pause();
		a.pause();
		b.pause();
		y.play();
}
function playyy() {
	// body...
	a.pause();
	b.pause();
	x.pause();
    y.pause();
    z.play();
}
function playyyy() {
	// body...
	x.pause();
	y.pause();
	z.pause();
	b.pause();
	a.play();
}
function playyyyy() {
	// body...
	x.pause();
	y.pause();
	z.pause();
	a.pause();
	b.play();
}