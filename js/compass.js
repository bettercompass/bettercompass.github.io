let Compass = {
	'config': {
		'scale': 40
	},
	'render': (id, pos=false) => {
		let c = document.getElementById(id);
		let ctx = c.getContext("2d");

		// CLEAR
		ctx.clearRect(0, 0, 400, 400);

		// BG SQUARES
		// top-left
		ctx.fillStyle="#E06868";
		ctx.fillRect(  0,   0, 200, 200);

		// bottom-left
		ctx.fillStyle="#65C865";
		ctx.fillRect(  0, 200, 200, 200);

		// top-right
		ctx.fillStyle="#48B0EE";
		ctx.fillRect(200,   0, 200, 200);

		// bottom-right
		ctx.fillStyle="#996AA7";
		ctx.fillRect(200, 200, 200, 200);

		// LINES
		// grey lines (for scale)
		ctx.beginPath();

		for (let i=0; i<=400; i+=Compass.config.scale) {
			ctx.moveTo(i, 0);
			ctx.lineTo(i, 400);
		}

		for (let i=0; i<=400; i+=Compass.config.scale) {
			ctx.moveTo(0, i);
			ctx.lineTo(400, i);
		}

		ctx.strokeStyle="#D7D7D7";
		ctx.lineWidth=1;
		ctx.stroke();

		// black lines (axes)
		ctx.beginPath();
		ctx.moveTo(200, 0);
		ctx.lineTo(200, 400);
		ctx.moveTo(0, 200);
		ctx.lineTo(400, 200);
		ctx.strokeStyle="#000";
		ctx.lineWidth=2;
		ctx.stroke();

		// POSITION
		if (pos) {
			let rPos = [(pos[0]+10)/20, (10-pos[1])/20];
			ctx.beginPath();
			ctx.arc(400*rPos[0], 400*rPos[1], 5, 0, 2*Math.PI);
			ctx.fillStyle="#000";
			ctx.fill();
		}
	},
	'test': (id) => {
		for (let i=-10; i<=10; i+=0.1) {
			setTimeout(()=>{Compass.render(id, [i,-i]);}, 50*(i+10))
		}
	}
}