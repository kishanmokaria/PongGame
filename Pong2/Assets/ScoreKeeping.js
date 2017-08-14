#pragma strict

var winningScore : int = 5;
var customGuiStyle : GUIStyle;
private var gameOver : boolean = false;
private var win : boolean = false;
static var player1Score : int=0;
static var player2Score : int = 0;
var isPause = false;
 function Awake() {

 		  DontDestroyOnLoad (gameObject);

 		   }  

function Update()
 		    {  
			if (Input.GetKeyDown(KeyCode.Escape))
			{
			isPause = !isPause;
			if (isPause)
				{Time.timeScale = 0;
				
				}
			else
				Time.timeScale = 1;
			}
			
 		    if 
 		    (player1Score >= winningScore && player2Score <= winningScore) win = true;

 		     
 		    if 
 		    (player2Score >= winningScore) gameOver = true;

 		    }

function OnGUI ()
 		      {
			  if(isPause)
			  {
			  GUI.Label (Rect((Screen.width/2)-60, (Screen.height/2), 200 , 100),  "Pause Menu");
			if (GUI.Button(Rect ( (Screen.width/2)-60, (Screen.height/2)+40, 120 , 40),     "Resume"))
					{ Time.timeScale=1;
					isPause = false;
					}
			if (GUI.Button(Rect ( (Screen.width/2)-60, (Screen.height/2)+80, 120 , 40),     "Restart"))
					{ 
					Time.timeScale=1;
					isPause = false;
					player1Score = 0;    
					player2Score = 0;
					}
			if (GUI.Button(Rect ( (Screen.width/2)-60, (Screen.height/2)+120, 120 , 40),     "Quit"))
					{ 
					Application.Quit ();
					}		
			
					}
			

GUI.Label (Rect(10,20,Screen.width,100), player1Score +" | "+ player2Score,customGuiStyle);

if (gameOver) 
    {
 		Application.LoadLevel(1);
 		  GUI.Label (Rect ( (Screen.width/2)-60, Screen.height/2, 200 , 100),     "HA HA YOU LOOSER !!!");
 		if (GUI.Button(Rect ( (Screen.width/2)-60, (Screen.height/2)+40, 120 , 60),     "New Game")
 	        ) 
 	   {  player1Score = 0;    player2Score = 0;     gameOver = false;    Destroy(gameObject);    Application.LoadLevel(0);}
 	      
 	 } 
if (win)
 	   { 
 	    if (Application.loadedLevelName == "scene1")  
 	     {
 	     Application.LoadLevel("lvl2");
 	       player1Score = 0;    player2Score = 0;     gameOver = false;    Destroy(gameObject);

 	       }
		   if (Application.loadedLevelName == "lvl2")  
 	     {
 	     Application.LoadLevel("lvl3");
 	       player1Score = 0;    player2Score = 0;     gameOver = false;    Destroy(gameObject);

 	       }
		   if (Application.loadedLevelName == "lvl3")  
 	     {
 	     Application.LoadLevel("lvl4");
 	       player1Score = 0;    player2Score = 0;     gameOver = false;    Destroy(gameObject);

 	       }
		   if (Application.loadedLevelName == "lvl4")  
 	     {
 	     Application.LoadLevel("lvl5");
 	       player1Score = 0;    player2Score = 0;     gameOver = false;    Destroy(gameObject);

 	       }
 	     if (Application.loadedLevelName == "lvl5") 
 	      {
 	       Application.LoadLevel("win");
 	       player1Score = 0;    player2Score = 0;     gameOver = false;    Destroy(gameObject);

 	       }
 	    }

}


  