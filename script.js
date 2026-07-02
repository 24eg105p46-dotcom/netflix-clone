const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;
        const icon = question.querySelector("span");

        if(answer.style.display === "block"){
            answer.style.display = "none";
            icon.textContent = "+";
        }else{

            document.querySelectorAll(".answer").forEach((item)=>{
                item.style.display = "none";
            });

            document.querySelectorAll(".question span").forEach((item)=>{
                item.textContent = "+";
            });

            answer.style.display = "block";
            icon.textContent = "×";
        }

    });
});