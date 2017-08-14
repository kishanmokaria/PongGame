#pragma strict

var initialSpeed : float = 1.0;


function Update ()
	 {
	   if (transform.position.y > 25)  
	   {
	      ScoreKeeping.player1Score += 1;
	      GameObject.Find("ballLauncher").SendMessage("LaunchBall",1);
   		 Destroy(gameObject);
	  }
	  if (transform.position.y < -25) 
	   {
	      ScoreKeeping.player2Score += 1;
	      GameObject.Find("ballLauncher").SendMessage("LaunchBall",2);
	   Destroy(gameObject); 
	    }
	 }
function OnCollisionEnter(collision:Collision)
	 {
	 GetComponent.<AudioSource>().Play();
	 }