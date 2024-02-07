

const gridEl = document.querySelector("#grid");


document.querySelector("#btn-play").addEventListener("click",
    function(){

        for(let i=1; i<=100; i++){
            const newDivEl= document.createElement("div");

            newDivEl.innerText = i;
            newDivEl.classList.add("square");

            gridEl.append(newDivEl);


        }

    }

);