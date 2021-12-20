
var orient = 0;

// key detection
function keydown(e) {
        // A
        if(e.keyCode == 65) {
            isLeft = true;
            keys.left = true;
            orient = 0;
        }
        // D
        if(e.keyCode == 68) {
            isLeft = false;
            keys.right = true;
            orient = 1;
        }
        // S
        if(e.keyCode == 83) {
            keys.down = true;
            orient = 2;
        }
        // W
        if(e.keyCode == 87) {
            keys.up = true;
            orient = 3;
        }
}

function keyup(e) {
        // A
        if(e.keyCode == 65) {
            keys.left = false;
        }
        // D
        if(e.keyCode == 68) {
            keys.right = false;
        }
        if(e.keyCode == 83) {
            keys.down = false;
        }
        if(e.keyCode == 87) {
            keys.up = false;
        }
}