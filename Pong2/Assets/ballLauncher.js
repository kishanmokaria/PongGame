#pragma strict
var ballPrefab : Transform; 
var initialSpeed : float = 1.0; 
var player1 : Transform; 
var player2 : Transform;  
function Start () 
{  
LaunchBall(1); 
}
   
function LaunchBall (player : int) 
{  
var newball : Transform;  
if (player == 1)   
{    
newball = Instantiate(ballPrefab, player1.position + Vector3(0,1,0),       Quaternion.identity);   
newball.parent = player1;   
yield WaitForSeconds(2);   
newball.parent = null;   
newball.GetComponent.<Rigidbody>().AddForce( Vector3( 0, 1, 0) * initialSpeed ) ;  
}  
else  
{ 
newball = Instantiate(ballPrefab, player2.position + Vector3(0,-1,0),      Quaternion.identity);   
newball.parent = player2;    
yield WaitForSeconds(2);   
newball.parent = null;   
newball.GetComponent.<Rigidbody>().AddForce( Vector3( 0, -1, 0) * initialSpeed ) ;  
} 
}