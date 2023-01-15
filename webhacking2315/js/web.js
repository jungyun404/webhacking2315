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
var problem_arr = ["Host로는 Domain Name만 사용할 수 있다",
"웹 브라우저는 웹을 서핑하기 위해<br>사용하는 프로그램이다",
"브라우저의 특정 모드로써 브라우저를 종료할 때<br> 방문 기록, 쿠키 및 사이트 데이터, 양식 입력 값 등의<br>정보가 저장되지 않는 모드는 고스트 모드이다",
"개발자 도구의 Sources 탭에서 원하는<br>자바스크립트를 디버깅할 수 있다",
"개발자 도구의 Console 탭에서<br>특정 변수의 값을 콘솔 화면에 출력할 때<br>사용하는 함수는 console.log이다",
"개발자 도구에서는 HTML이나 JavaScript는<br>수정할 수 있지만 CSS는 수정할 수 없다",
"모든 문제를 풀었습니다!"];
var answer_arr = ['X', 'O', 'X', 'O', 'O', 'X'];

var selectAnswer, score;
var imgNum, startNum, endNum;

function init_web(){
	number_id = document.getElementById("number_id");
	problem_id = document.getElementById("problem_id")
	answer_id = document.getElementById("answer_id");

	startNum = 0; 
	endNum = 6;
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

init_web();
