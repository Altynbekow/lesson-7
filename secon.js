const input = document.querySelector('input');
const allnumber = document.querySelectorAll('.number');
const none = document.getElementById('delete');
const valueInp = document.getElementById('value');


const next = document.querySelectorAll(".next")

next.forEach(next => {

    next.onclick = () => {
        window.location.href = 'next.html'
    }
});


allnumber.forEach(num => {
    num.onclick = () => {

        if(input.value.length === 13) return


        input.value += num.innerText
        console.log(num.innerText)
    }

    
});
none.onclick = () => {
    // input.value = "+996"
    input.value = input.value.slice(0,-1);
}

