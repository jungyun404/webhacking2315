/*false가 light모드(흰바탕 검은글씨)*/
var mode = false;
function darkmode() {
  if (!mode){
    document.getElementById('toggleFG').style.left = "-15px";
    document.getElementById('toggleBG').style.background = "#000";
    document.getElementById('section').style.background = "rgba(0, 0, 0, 0.8)";
    document.getElementById("section").style.color = "white";
    mode = true;
  }
  else{
    document.getElementById('toggleFG').style.left = "15px";
    document.getElementById('toggleBG').style.background = "#CCCCCC";
    document.getElementById('section').style.background = "rgba(255, 255, 255, 0.8)";
    document.getElementById("section").style.color = "black";
    mode = false;
  }
}



var number_id, problem_id, answer_id;
var problem_arr = ["통신이 끝난 후 상태 정보를 저장하지 않는<br>특성을 가리키는 용어는 Stateless이다",
"서버에 요청을 보내는 역할을 하는 것은 세션이다",
"세션이 인증 정보를 저장하는 곳은 서버이다",
"모든 문제를 풀었습니다!"];
var answer_arr = ['O', 'X', 'O'];

var selectAnswer, score;
var imgNum, startNum, endNum;

init_web();

function init_web(){
	number_id = document.getElementById("number_id");
	problem_id = document.getElementById("problem_id");
	answer_id = document.getElementById("answer_id");

	startNum = 0; 
	endNum = 3;
	score = 0; /*총점수*/

    /*각 문제에 대한 이미지와 정답 설정*/
    setProblem();
}
    


function setProblem(){
  problem_id.innerHTML = problem_arr[startNum];

	if(startNum == endNum){
		number_id.innerHTML = "<span class='label'>< 결과보기 ></span>";
		answer_id.innerHTML = "<button type='button' class='button res' onclick='btnRes();'>결과보기</button><button type='button' class='button restart' onclick='history.go(0);'>다시하기</button>";
	} else {
		number_id.innerHTML = "<span class='label'> " + parseInt(startNum + 1) + "/" + endNum + " </span>";
		answer_id.innerHTML = "<button type='button' class='button o' onclick='btnO();'>O</button><button type='button' class='button x' onclick='btnX();'>X</button>";
	}
}

function btnO(){
	selectAnswer = "O";
	if(answer_arr[startNum] == selectAnswer){
		score++;
	}
	startNum++;
	setProblem();
}

function btnX(){
	selectAnswer = "X";
	if(answer_arr[startNum] == selectAnswer){
		score++;
	}
	startNum++;
	setProblem();
}

function btnRes(){
  alert(endNum + "문제 중 " + score + "문제 정답!");
}


