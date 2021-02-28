let x, y;
let a = 0;
// let heart = createVector(300, 300);
let heartx = [];
let hearty = [];
function setup()
{
    createCanvas(720, 480);
}
function draw()
{
    background(0);
    translate(width/2, height/2);
    // fill(255, 255,0);
    drawHeart();
    // translate(width/2, height-100);
    // drawHeart();
    // drawHeart();
    // setTimeout(drawHeart, 1000);
    
    // console.log(heartx, hearty);
}

function drawHeart()
{
    let r = 10;
    x = r *  16 * pow(sin(a), 3);
    y = -r * (15 * cos(a) - 5 * cos(2 * a) - 2 * cos(3 * a) - cos(4 * a));
    heartx.push(x);
    hearty.push(y);
    fill(150, 0, 255);
    stroke(255);
    beginShape();
    for(let i =0;i<=heartx.length; i+=1)
    {
        ellipse(heartx[i], hearty[i], 3);
    }
    endShape();
    a += 0.03;
}