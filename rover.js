
var userMovement = function(userMovement) {prompt("Where do you want to go? [F(Forward) / B(Back) / R(Right) / L(Left)]");};

var Rover = {
    position : [0, 0],
    move: function(moveRover) {
        switch(moveRover) {
            case "F":
                this.direction("N");
                break;
            case "B":
                this.direction("S");
                break;
            case "R":
                this.direction("E");
                break;
            case "L":
                this.direction("W");
                break;
            default:
              console.log("You are doing something wrong!");
            }
        },

    direction: function(direction) {
        switch(direction) {
            case "N":
                    this.position[1]++;
                    break;
            case "S":
                    this.position[1]--;
                    break;
            case "E":
                    this.position[0]++;
                    break;
            case "W":
                    this.position[0]--;
                    break;
        }
    }
};
while(true){
  userMovement();
  console.log(Rover.position);
}
