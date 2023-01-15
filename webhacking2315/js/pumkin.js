var counter=10000;
count_id = document.getElementById("count");
ans_id = document.getElementById("ans");

function count() {
    if (counter>0){
        count_id.innerHTML = counter + " more clicks to go!";
        counter--;
    }
    
    else {
        count_id.innerHTML = "";
        ans_id.innerHTML = "PLAG{it's_finally_over}";
    }
}
count();

function cheak(){
    var input_ans = document.getElementById('input_ans').value;
    if (input_ans == ""){
        alert("답을 기입해주십시오");
    }
    else if(input_ans == "PLAG{it's_finally_over}"){
        window.location.href= "Congratulations.html";
    }
    else{
        document.getElementById('input_ans').value = "";
		alert('정답이 아닙니다');
    }

}