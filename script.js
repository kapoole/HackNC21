var vibesUp = 0;
var stage = 0;
var zIndex = 0;

/*
Silhouette File Names
0 --- Man standing, thinking w/ RED VIBE
1 --- Man standing, thinking w/ BLUE VIBE
2 --- Business man walking w/ GREY VIBE
3 --- Old Man with cane w/ __________ VIBE
4 --- Old Woman with Walker w/ ______ VIBE
5 --- Woman walking dog


*/

// nomal = true if regular view and = false if in vibe view
// el is each silhouette
function vibeCheck(normal, el)
{
    if(el == 0)
    {
        if(normal)
        {
            zIndex++;
            document.getElementById("sil-0-cont").innerHTML = "<img id='sil-0' class='img-bound' src='imgs/0_vibe.png' onclick='vibeCheck(false,0);'>";
            document.getElementById("sil-0-cont").innerHTML += " <blockquote class='oval-thought' id='sil-0-thought'>WHY CAN'T THINGS GO MY WAY!!!!</blockquote>";
            document.getElementById("sil-0-thought").style.zIndex = zIndex;
            document.getElementById("sil-0").style.zIndex = zIndex;
            
            vibesUp++;
            console.log(vibesUp);
            document.body.style.backgroundColor = "black";
            console.log("to vibe");
        }else
        {
            document.getElementById("sil-0-cont").innerHTML = "<img id='sil-0' class='img-bound' src='imgs/0_normal.png' onclick='vibeCheck(true,0);'>";
            vibesUp--;
            console.log(vibesUp);
            if(vibesUp == 0)
            {
                document.body.style.backgroundColor = "white";
                nextStage();

            }
            console.log("to normal");
        }
    }else if(el == 1)
    {
        if(normal)
        {
            zIndex++;
            document.getElementById("sil-1-cont").innerHTML = "<img id='sil-1' class='img-bound' src='imgs/1_vibe.png' onclick='vibeCheck(false,1);'>";
            document.getElementById("sil-1-cont").innerHTML += " <blockquote class='oval-thought' id='sil-1-thought'><p class='horShake'>I just wish I could forget.</p></blockquote>";
            document.getElementById("sil-1-thought").style.zIndex = zIndex;
            document.getElementById("sil-1").style.zIndex = zIndex;
            vibesUp++;
            console.log(vibesUp);
            document.body.style.backgroundColor = "black";
            console.log("to vibe");
        }else
        {
            document.getElementById("sil-1-cont").innerHTML = "<img id='sil-1' class='img-bound' src='imgs/0_normal.png' onclick='vibeCheck(true,1);'>";
            vibesUp--;
            console.log(vibesUp);
            if(vibesUp == 0)
            {
                document.body.style.backgroundColor = "white";
                nextStage();
            }
            console.log("to normal");
        }
    }else if(el == 2)
    {
        if(normal)
        {
            zIndex++;
            document.getElementById("sil-2-cont").innerHTML = "<img id='sil-2' class='img-bound' src='imgs/2_vibe.png' onclick='vibeCheck(false,2);'>";
            document.getElementById("sil-2-cont").innerHTML += " <blockquote class='oval-thought' id='sil-2-thought'>I do the same thing and I do the same thing and I do the same thing over and over and...</blockquote>";
            document.getElementById("sil-2-thought").style.zIndex = zIndex;
            document.getElementById("sil-2").style.zIndex = zIndex;
            vibesUp++;
            console.log(vibesUp);
            document.body.style.backgroundColor = "black";
            console.log("to vibe");
        }else
        {
            document.getElementById("sil-2-cont").innerHTML = "<img id='sil-2' class='img-bound' src='imgs/2_normal.png' onclick='vibeCheck(true,2);'>";
            vibesUp--;
            console.log(vibesUp);
            if(vibesUp == 0)
            {
                document.body.style.backgroundColor = "white";
                nextStage();
            }
            console.log("to normal");
        }
    }else if(el == 3)
    {

        if(normal)
        {
            zIndex++;
            document.getElementById("sil-3-cont").innerHTML = "<img id='sil-3' class='img-bound' src='imgs/3_vibe.png' onclick='vibeCheck(false,3);'>";
            document.getElementById("sil-3-cont").innerHTML += " <blockquote class='oval-thought' id='sil-3-thought'>My wife doesn't love me, and I'm ready to go.</blockquote>";
            document.getElementById("sil-3-thought").style.zIndex = zIndex;
            document.getElementById("sil-3").style.zIndex = zIndex;
            vibesUp++;
            console.log(vibesUp);
            document.body.style.backgroundColor = "black";
            console.log("to vibe");
        }else
        {
            document.getElementById("sil-3-cont").innerHTML = "<img id='sil-3' class='img-bound' src='imgs/3_normal.png' onclick='vibeCheck(true,3);'>";
            vibesUp--;
            console.log(vibesUp);
            if(vibesUp == 0)
            {
                document.body.style.backgroundColor = "white";
                nextStage();
            }
            console.log("to normal");
        }

    }else if(el == 4)
    {

        if(normal)
        {
            zIndex++;
            document.getElementById("sil-4-cont").innerHTML = "<img id='sil-4' class='img-bound' src='imgs/4_vibe.png' onclick='vibeCheck(false,4);'>";
            document.getElementById("sil-4-cont").innerHTML += " <blockquote class='oval-thought' id='sil-4-thought'>I wish I was young again.</blockquote>";
            document.getElementById("sil-4-thought").style.zIndex = zIndex;
            document.getElementById("sil-4").style.zIndex = zIndex;
            vibesUp++;
            console.log(vibesUp);
            document.body.style.backgroundColor = "black";
            console.log("to vibe");
        }else
        {
            document.getElementById("sil-4-cont").innerHTML = "<img id='sil-4' class='img-bound' src='imgs/4_normal.png' onclick='vibeCheck(true,4);'>";
            vibesUp--;
            console.log(vibesUp);
            if(vibesUp == 0)
            {
                document.body.style.backgroundColor = "white";
                nextStage();
            }
            console.log("to normal");
        }

    }else if(el == 5)
    {
        if(normal)
        {
            zIndex++;
            document.getElementById("sil-5-cont").innerHTML = "<img id='sil-5' class='img-bound' src='imgs/5_vibe.png' onclick='vibeCheck(false,5);'>";
            document.getElementById("sil-5-cont").innerHTML += " <blockquote class='oval-thought' id='sil-5-thought'>Mine, mine, mine, mine, me, me, me</blockquote>";
            document.getElementById("sil-5-thought").style.zIndex = zIndex;
            document.getElementById("sil-5").style.zIndex = zIndex;
            vibesUp++;
            console.log(vibesUp);
            document.body.style.backgroundColor = "black";
            console.log("to vibe");
        }else
        {
            document.getElementById("sil-5-cont").innerHTML = "<img id='sil-5' class='img-bound' src='imgs/5_normal.png' onclick='vibeCheck(true,5);'>";
            vibesUp--;
            console.log(vibesUp);
            if(vibesUp == 0)
            {
                document.body.style.backgroundColor = "white";
                nextStage();
            }
            console.log("to normal");
        }
    }else if(el == 6)
    {
        if(normal)
        {
            zIndex++;
            document.getElementById("sil-6-cont").innerHTML = "<img id='sil-6' class='img-bound' src='imgs/5_pt2_vibe.png' onclick='vibeCheck(false,6);'>";
            document.getElementById("sil-6-cont").innerHTML += " <blockquote class='oval-thought' id='sil-6-thought'>Woof</blockquote>";
            document.getElementById("sil-6-thought").style.zIndex = zIndex;
            document.getElementById("sil-6").style.zIndex = zIndex;
            vibesUp++;
            console.log(vibesUp);
            document.body.style.backgroundColor = "black";
            console.log("to vibe");
        }else
        {
            document.getElementById("sil-6-cont").innerHTML = "<img id='sil-6' class='img-bound' src='imgs/5_pt2_normal.png' onclick='vibeCheck(true,6);'>";
            vibesUp--;
            console.log(vibesUp);
            if(vibesUp == 0)
            {
                document.body.style.backgroundColor = "white";
                nextStage();
            }
            console.log("to normal");
        }
    }
   
}

function nextStage() 
{
    switch(stage)
    {
        case 0:
            console.log("stage 0");
            document.getElementById("title-card").innerHTML = "";
            document.body.innerHTML += '<div id="sil-1-cont" >' + 
                                        '<img id="sil-1" class="img-bound" src="imgs/0_normal.png" onclick="vibeCheck(true,1);">' +
                                        '</div>';
            document.body.innerHTML += '<div id="sil-2-cont" >' +
                                        '<img id="sil-2" class="img-bound" src="imgs/2_normal.png" onclick="vibeCheck(true,2);">' +
                                        '</div>';
            break;
        case 1:
            console.log("stage 1");
            document.body.innerHTML += '<div id="sil-5-cont" >' + 
                                        '<img id="sil-5" class="img-bound" src="imgs/5_normal.png" onclick="vibeCheck(true,5);">' +
                                        '</div>';
            document.body.innerHTML += '<div id="sil-6-cont" >' + 
                                        '<img id="sil-6" class="img-bound" src="imgs/5_pt2_normal.png" onclick="vibeCheck(true, 6);">' +
                                        '</div>';
            break;
        case 2:
            console.log("stage 2");
            document.body.innerHTML += '<div id="sil-3-cont">' +
                                        '<img id="sil-3" class="img-bound" src="imgs/3_normal.png" onclick="vibeCheck(true,3);">' +
                                        '</div>';
            document.body.innerHTML += '<div id="sil-4-cont">' +
                                        '<img id="sil-4" class="img-bound" src="imgs/4_normal.png" onclick="vibeCheck(true, 4);">' +
                                        '</div>';
            break;
        default:
            console.log("unrecognized stage error");

    }

    stage++;
    
}