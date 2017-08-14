#pragma strict

function Start () {

}

function Update () {
if (Input.GetKeyDown(KeyCode.Q))
			{
			Application.Quit ();
			}

}
function OnGUI ()
{
if (GUI.Button(Rect ( (Screen.width/2)-60, (Screen.height/2)+40, 120 , 60),     "Restart"))
					{ Application.LoadLevel("scene1");
					
					}





}