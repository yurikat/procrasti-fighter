function toggleMenu(){
    let navigation = document.querySelector('.navigation');
    let toggle = document.querySelector('.toggle');
    navigation.classList.toggle('active');
    toggle.classList.toggle('active');
}
$('#toggle').on('click', function(){
    toggleMenu();
})

const button = document.querySelector('.enter');
var countTask = 0;


const saveToLocalStorage = () =>{
    // const taskInput = document.getElementById('text');
    const dateInput =  document.querySelector('.date');
    console.log(dateInput)

    let stringCount = String(countTask);
    let textKey = 'test'+stringCount;
    console.log(textKey); 



    var date1 = new Date();
    var date2 = new Date($('#date').val());

    var Difference_In_Time = date2.getTime() - date1.getTime();
    console.log(Math.round(Difference_In_Time/1000/60/60/24));

    var Delegate_Time = Math.round($('#time').val()/Math.round(Difference_In_Time/1000/60/60/24));
    console.log(Delegate_Time);


    const testJson = [$('#text1').val()];
    const testData = JSON.stringify(testJson);
    localStorage.setItem(textKey, testData)

    const timeJson = Delegate_Time;
    const timeData = JSON.stringify(timeJson);
    localStorage.setItem("time", timeData)
    
    countTask += 1;
    localStorage.setItem("count", countTask);

}


$('#enter').on('click', function(){
    saveToLocalStorage();
    const taskInput = $('#text1').val();
    // console.log('aaaa')

})

var today = new Date();
var dd = String(today.getDate()).padStart(2,'0');
var mm = String(today.getMonth()).padStart(2,'0');
var yyyy = today.getFullYear();

today= mm + '/' + dd + '/' + yyyy

