class Iron {
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	var options={
		'restitution':0.3,
		'friction':3,
		'density':30
	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		
		World.add(world, this.body);

		
	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("black");
		
            rect(20,35,90,60)
			
			pop()
	}

}