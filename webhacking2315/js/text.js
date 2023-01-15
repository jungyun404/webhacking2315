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
var problem_arr = ["서버에 추가 정보를 전달하는 데이터 부분으로,<br>이용자가 입력한 데이터를 전달하기 위함 보다는<br>이용자와 서버가 상호작용하기 위한 정보를<br>담기 위해 사용되는 것은 HTTP Header이다",
"기본 HTTP 포트 번호는 21이다",
"기본 HTTPS 포트 번호는 443이다",
"URI는 Uniform Resource Identifier의<br>약자로 웹 리소스의 식별에 사용된다",
"작성된 웹 리소스 중 프론트엔드의<br>동작을 구현하는 것은 HTML이다",
  "다음 중 태그와 속성 등을 통해 웹 문서의<br>뼈대를 작성하는 언어는 CSS이다",
   "Javascript로 작성된 웹 리소스는 서버에서 실행되고,<br>그 결과가 클라이언트 웹 리소스에 반영된다",
    "다양한 웹 리소스들의 스타일을 지정하는 것은 CSS이다",
  "프론트엔드는 웹 리소스로 구성된다",
"브라우저는 이용자의 요청을 해석하여<br>웹 서버에 HTML형식으로 전달한다",
"모든 문제를 풀었습니다!"];
var answer_arr = ['O', 'X', 'O', 'O', 'X', 'X', 'X', 'O', 'O', 'X'];

var selectAnswer, score;
var imgNum, startNum, endNum;

init_web();

function init_web(){
	number_id = document.getElementById("number_id");
	problem_id = document.getElementById("problem_id");
	answer_id = document.getElementById("answer_id");

	startNum = 0; 
	endNum = 10;
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


