let boxes = document.querySelectorAll('.box')

function user1(){
let value='x'
boxes.forEach((box)=>{
    if(box.textContent==''){
        box.addEventListener('click',()=> box.textContent=value)
        
    }
})
}

function user2(){
let value='0'
boxes.forEach((box)=>{
    if(box.textContent==''){
        box.addEventListener('click',()=> box.textContent=value)
    }
})
}

function bot(){

}
winningCombinations=[
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]



user1()