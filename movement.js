
// key detection
function keydown(e) {
        // W
        if(e.keyCode == 65) {
            isLeft = true;
            keys.left = true;
        }
        // D
        if(e.keyCode == 68) {
            isLeft = false;
            keys.right = true;
        }
        if(e.keyCode == 32) {
            move();
        }
}

function keyup(e) {
        // W
        if(e.keyCode == 65) {
            keys.left = false;
        }
        // D
        if(e.keyCode == 68) {
            keys.right = false;
        }
        if(e.keyCode == 32) {
            move();
        }
}

// character movement
function moveLeft() {
    isLeft = true;
    x -= 5;
}
function moveRight() {
    isLeft = false;
    x += 5;
}