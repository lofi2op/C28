class Slingshot {
    constructor(bodyA, ppointB) {
        var options = {
            bodyA: bodyA,
            pointB: ppointB,
            stiffness: 0.04,
            length: 10
        }

        this.pointB = ppointB;
        this.Slingshot = Constraint.create(options);
        World.add(world, this.Slingshot);
    }


    fly() {
        this.Slingshot.bodyA = null
    }



    display() {
        if (this.Slingshot.bodyA) {
            var pointA = this.Slingshot.bodyA.position;
            var vpointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, vpointB.x, vpointB.y);
        }
    }

}