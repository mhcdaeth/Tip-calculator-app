let bill = document.querySelector('.bill input')
let tips = document.querySelectorAll('.selectTip .tips .button')
let costumeTip = document.querySelector('.selectTip .tips #custom')
let numberOfPeoples = document.querySelector('.numberOfPeoples input')
let reset = document.querySelector('.result .reset .button')
let inputs = document.querySelectorAll('input')
let tipAmountDisplay = document.querySelectorAll('.result .tipAmount .number p')[0]
let totalDisplay = document.querySelectorAll('.result .tipAmount .number p')[1]
let errorMsg = document.querySelector('.bottom .inputes .numberOfPeoples span')
console.log(reset)
function tipAmountCal(bille = 144.55,percent = 15,person = 5 ){
    let result =  bille * ((percent / 100) / person)
    return result
}

function totalAmoutnCal(bill, ppls, tipAmount){
    let result = (bill / ppls) + tipAmount
    return result
}


errorMsg.style.display = 'none'
reset.classList.add('unactive')

for(let i = 0; i <= inputs.length - 1; i++){    
    
    inputs[i].oninput = function(){
        
        inputs[2].style.border = '2px solid red'

        //result for custom tip
        if(!(inputs[1].value == '')){
    
            tipAmountDisplay.textContent ='$' + tipAmountCal(parseInt(inputs[0].value), parseInt(inputs[1].value), parseInt(inputs[2].value))
            totalDisplay.textContent = '$' + totalAmoutnCal(parseInt(inputs[0].value), parseInt(inputs[2].value), tipAmountCal())

        }else{ //result for buttons tip
            
            for(let p = 0; p <= tips.length - 1; p++){

               

                let fr 
                tips[p].onclick = function num(){

                    let fr = tips[p].textContent
                    fr = fr.split('')
                    fr = fr.slice(0, fr.indexOf('%'))
                    fr  = parseInt(fr.join(''))

                    for(let m = 0; m <= tips.length - 1; m++){
                        tips[m].classList.add('active')

                        if(m != p){
                            tips[m].classList.remove('active')
                        }

                    }
                }
                
                tipAmountDisplay.textContent = '$' + tipAmountCal(parseInt(inputs[0].value), fr, parseInt(inputs[2].value))
                totalDisplay.textContent = '$' + totalAmoutnCal(parseInt(inputs[0].value), parseInt(inputs[2].value), tipAmountCal())
                
            }
        }

    //error msg and border on input for empty field
        if(inputs[2].value != ''){
            inputs[2].style.border = 'unset'
        }

        if(inputs[2].value == ''){
            errorMsg.style.display = 'block'
        }else{
            errorMsg.style.display = 'none'

        }

        if(tipAmountDisplay.textContent == '$NaN' && totalDisplay.textContent == '$NaN'){
            tipAmountDisplay.textContent = `$0.00`
            totalDisplay.textContent = `$0.00`
        }

        if(!(inputs[i].value == '')){
            reset.classList.remove('unactive')

        }

    }
}

reset.onclick = function(){
    for(let i of inputs){
        i.value = ''
    }

    for(let t of tips){
        t.classList.remove('active')
    }

    tipAmountDisplay.textContent = `$0.00`
    totalDisplay.textContent = `$0.00`
    errorMsg.style.display = 'none'
    inputs[2].style.border = 'unset'
    reset.classList.add('unactive')


}