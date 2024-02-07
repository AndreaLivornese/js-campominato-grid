

const gridEl = document.querySelector("#grid");


document.querySelector("#btn-play").addEventListener("click",
    function(){

        gridEl.innerHTML= "";

        const difficultyChoice = document.querySelector("#difficulty").value;
        console.log(difficultyChoice);

        for(let i=1; i<=100; i++){
            const newDivEl= document.createElement("div");

            newDivEl.innerText = i;
            newDivEl.classList.add("square");

            newDivEl.addEventListener("click",
                function(){
                    this.classList.toggle("active");
                    console.log(this.innerText);

                }


            );

            gridEl.append(newDivEl);

        }

    }

);