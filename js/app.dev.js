const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext('2d');
const w = document.body.clientWidth;
const h =  document.body.clientHeight;

canvas.width = w;
canvas.height = h;

const position =  Array(300).join(0).split('');

console.log(ctx);

const initMatrix = () => {
    ctx.fillStyle = 'rgba(0, 15, 2, 0.3)';
    ctx.fillRect(0,0,w,h);

    ctx.fillStyle = '#4CAF50';
    ctx.font = '12pt';

    position.map(
        (y, index) => {
            const text = String.fromCharCode(1e7 + Math.random() * 30);
            const x = index * 15 + 15;

            canvas.getContext('2d').fillText(text,x,y);

            y > 100 + Math.random() * 1e5 ? position[index] = 0 : position[index] = y + 15;
        }
    )

}

setInterval(initMatrix, 100);