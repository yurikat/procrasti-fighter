function toggleMenu(){
    let navigation = document.querySelector('.navigation');
    let toggle = document.querySelector('.toggle');
    navigation.classList.toggle('active');
    toggle.classList.toggle('active');
}
$('#toggle').on('click', function(){
    toggleMenu();
})

$('#div1').draggable();
$('#schedule').droppable({
    activate: function(e,ui){
        console.log("始まり")
    },
    over: function(e,iu){
        console.log("はいり")

    },
    out: function(e,iu){
        console.log("外れた")

    },
    drop: function(e,ui){
        console.log("落ちた")


    },
});

var countTask2 = 0 

let stringCount2 = String(countTask2)
let textKey2 ='test' + stringCount2;
console.log(stringCount2)

var test = localStorage.getItem('test'+countTask2);
$('#task1').html(test);
var time = localStorage.getItem('time');
$('#taskContent1').html(time + '分');

countTask2 += 1;

var test = localStorage.getItem('test'+countTask2);
$('#task2').html(test);
var time = localStorage.getItem('time');
$('#taskContent2').html(time + '分');

countTask2 += 1;

var test = localStorage.getItem('test'+countTask2);
$('#task3').html(test);
var time = localStorage.getItem('time');
$('#taskContent3').html(time + '分');

countTask2 += 1;


// $('#trash').on('click', function{
//     $("h2").removeItem();
// })

// const testData2 = JSON.stringify(testJson);
// localStorage.getItem(textKey2, testData2);
// countTask2 += 1;
// localStorage.getItem("countb". countTask2);


// var allParas = document.getElementsByClassName('task');
// var num = allParas.length;
// if(num===0){


// }else(num > 0){

// }

// const loadTask
// $('#task1').html()
// localStorage.getItem("test")