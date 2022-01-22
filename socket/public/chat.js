var socket=io.connect('http://localhost:4000');

var sender=document.getElementById('sender');
var message=document.getElementById('message');
var btn=document.getElementById('submitBtn');
var output=document.getElementById('output');
var feedback=document.getElementById('feedback');

btn.addEventListener('click',function(){
socket.emit('chat',{
    message:message.value,
    sender:sender.value

});
message.value='';
});
socket.on('chat',function(data){
    output.innerHTML+='<p><strong>'+data.sender+':</strong>'+data.message+'</p>';
    feedback.innerHTML='';
});
message.addEventListener('keypress',function(){
    socket.emit('yaziyor',sender.value);
});
socket.on('yaziyor',function(data){
    feedback.innerHTML='<p><em>'+data+  ' yazıyor...</em></p>';

});