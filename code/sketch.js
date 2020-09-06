
var bugs = []; // array of Jitter objects

function setup() {

  createCanvas(windowWidth,635);
 
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

di = {0:'l', 1:'r', 2:'u', 3:'d'};

choices = [0,1,2,3,4,5,6,7,8,9];
function bug_init(){

	for(var k=0; k<30; k++)
		{
		r = getRandomInt(0,255);
  		g = getRandomInt(0,255);
  		b = getRandomInt(0,255);
  		x = 10 + getRandomInt(1,15)*100;
  		y = 50 ;
  		side = 10;
  		speed = 1;
  		current = di[getRandomInt(0,3)];
		bugs.push({'x':x ,'y':y ,'side':side ,'speed':speed ,'r':r ,'g':g ,'b':b, current });
		}
}




dir = ['l','r','u','d'];

function movement(){
	for(var p=0; p<bugs.length; p++){

		stroke(127);
		fill(bugs[p]['r'], bugs[p]['g'], bugs[p]['b'], 127);
		rect(bugs[p]['x'], bugs[p]['y'], bugs[p]['side'], bugs[p]['side']);

		if( (bugs[p]['x']-10)%100==0 && (bugs[p]['y']-10)%100==0	 )
			{
			    	dec = random(['r','u']);
			    		switch(dec){
			    			case 'r': bugs[p]['x'] += bugs[p]['speed'];
			    						bugs[p]['current'] = 'r';
			    						break;
			    			case 'u': bugs[p]['y'] -= bugs[p]['speed'];
			    						bugs[p]['current'] = 'u';
			    						break;			
			    			}
			}
	
	else if( (bugs[p]['x']-50)%100==0 && (bugs[p]['y']-10)%100==0 )
			{
				dec = random(['r','d']);
			    		switch(dec){
			    			case 'r': bugs[p]['x'] += bugs[p]['speed'];
			    						bugs[p]['current'] = 'r';
			    						break;
			    			case 'd': bugs[p]['y'] += bugs[p]['speed'];
			    						bugs[p]['current'] = 'd';
			    						break;			
			    			}	
			}		
	else if((bugs[p]['x']-10)%100==0 && (bugs[p]['y']-50)%100==0)
			{
				dec = random(['u','l']);
			    		switch(dec){
			    			case 'l': bugs[p]['x'] -= bugs[p]['speed'];
			    						bugs[p]['current'] = 'l';
			    						break;
			    			case 'u': bugs[p]['y'] -= bugs[p]['speed'];
			    						bugs[p]['current'] = 'u';
			    						break;			
			    			}	
			}
	else if((bugs[p]['x']-50)%100==0 && (bugs[p]['y']-50)%100==0)
			{
				dec = random(['d','l']);
			    		switch(dec){
			    			case 'l': bugs[p]['x'] -= bugs[p]['speed'];
			    						bugs[p]['current'] = 'l';
			    						break;
			    			case 'd': bugs[p]['y'] += bugs[p]['speed'];
			    						bugs[p]['current'] = 'd';
			    						break;			
			    			}	
			}		
			
		else{
			
			if(bugs[p]['current'] == 'l')
				bugs[p]['x'] -= bugs[p]['speed'];
			else if(bugs[p]['current']  == 'r')
				bugs[p]['x'] += bugs[p]['speed'];
			else if(bugs[p]['current'] == 'u')
				bugs[p]['y'] -= bugs[p]['speed'];
			else if(bugs[p]['current'] == 'd')
				bugs[p]['y'] += bugs[p]['speed'];
		}		
			   
		if (bugs[p]['x'] > windowWidth) {
			bugs[p]['x'] = 0;
		}
		
		if(bugs[p]['x'] < 0){
			bugs[p]['x'] = windowWidth;
		}

		if (bugs[p]['y'] > windowHeight) {
			bugs[p]['y'] = 0;
		}
		
		if(bugs[p]['y'] < 0){
			bugs[p]['y'] = windowHeight;
		}  	
	print(bugs[p]['x'],bugs[p]['y']);
	}

}

bug_init();

function draw() {
  background(105,105,105);
  noStroke();
  for (var i = 0; i < width; i += 100) {
    fill(0);
    rect(0, i, width, 70);
   fill(0);
    rect(i, 0, 70, height);
  }
for(var p = 70; p<windowWidth; p+=100)
	for(var q = 35; q<height; q+=100)
  {	
  	stroke(127);
    line(p, q, p+30, q);

    ellipse(p-35,q,2,2);
  }

for(var p = 70; p<windowHeight; p+=100)
	{for(var q = 35; q<width; q+=100)
	  {	stroke(127);
	  	strokeWeight(1);
	    line(q, p, q, p+30);
	    
	    ellipse(p+65,q,2,2);
	  }
	}


  movement();	  
}