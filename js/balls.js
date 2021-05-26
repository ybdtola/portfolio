

Pts.quickStart( "#pt_container", "#ffffff00" );


(function() {

  var world;

  space.add( {

    start: (bound, space) => {

      world = new World( space.innerBound, 1, 0 );
      let pts = Create.distributeRandom( space.innerBound, 50 );
      
      // Create particles and hit them with a random impulse
      for (let i=0, len=pts.length; i<len; i++) {
        let p = new Particle( pts[i] ).size( (i===0) ? 20 : 20);
        p.hit( Num.randomRange(-50,50), Num.randomRange(-25, 25) );
        world.add( p );
      }

      world.particle( 0 ).lock = true; 

    },


    animate: (time, ftime) => {
      world.drawParticles( (p, i) => {
        let color = (i===0) ? "#1d2c7e77" : ["#ecdec8", "#ecdec8", "#ecdec8", "#ecdec8"][i%4];
        // let radius = Num.cycle( (time%1000)/1000 ) * 20;
        form.fillOnly( color ).point( p, p.radius, "circle" ) 
      });

      world.update( ftime );
    },


    action:( type, px, py) => {
      if (type == "move") {
        world.particle( 0 ).position = new Pt(px, py);
      }
    },

    resize: (bound, evt) => {
      if (world) world.bound = space.innerBound;
    }
  });
  
  space.bindMouse().bindTouch();
  space.play();

})();

