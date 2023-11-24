
var form = document.getElementById('form');
form.addEventListener('submit',function(event) {
event.preventDefault();
var email = document.getElementById('mail').value;

var username = document.getElementById('username').value;
alert(email,"<br>","Username:", username);

})

function showMore(){
    var text1 = document.getElementById('text').innerHTML;
    var text2 = text1 + "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque quia quos ab non cum esse doloribus dicta tenetur magnam dolor, animi perferendis impedit fugiat aspernatur. Libero eius cum quam ut."
    document.getElementById('text').innerHTML = text2;
}