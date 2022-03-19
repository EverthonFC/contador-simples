let count = 0

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;    
        if(styles.contains("retirar")){
            count--;
        }
        value.textContent = count;
    })

});


btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;    
        if(styles.contains("adcionar")){
            count++;
        }
        value.textContent = count;
    })

});

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;    
        if(styles.contains("zerar")){
            count = 0;
        }
        value.textContent = count;
    })

});

