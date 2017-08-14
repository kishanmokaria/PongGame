#pragma strict
var speed : float=10.0;
private var ball : Transform;
  function Update () {
    if (GameObject.FindWithTag("ball"))
      {  
       ball = GameObject.FindWithTag("ball").transform; 
         if (ball.position.y < 0) transform.position.x = Mathf.Lerp( transform.position.x,ball.position.x, speed * Time.deltaTime);
            transform.position.x = Mathf.Clamp( transform.position.x, -12.5, 12.5);
      } 
} 
function OnCollisionEnter(collision : Collision)
{  
      var velo = collision.rigidbody.velocity.magnitude;
      collision.rigidbody.velocity.x = (collision.transform.position.x - transform.position.x)*8;
      if (collision.rigidbody.velocity.magnitude < velo) collision.rigidbody.velocity *=    velo/collision.rigidbody.velocity.magnitude;
      } 