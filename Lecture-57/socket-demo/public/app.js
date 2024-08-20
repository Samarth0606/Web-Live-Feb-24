
const socket = io();

$('#chat-box').hide();

$('#send-btn').on('click' , ()=>{
    const msgText = $('#inp').val();
    socket.emit('send-msg', {msg:msgText})
    $('#inp').val("")
})

socket.on('receive-msg' , (data)=>{
    // console.log(data , "data received")
    $("#chat").append(`<li class="border p-3 ms-0 mb-0 rounded-pill"> <span class="fw-bold">${data.username}</span> <span>${data.msg}</span> </li>`)
})


$('#login-btn').on('click' , ()=>{
    const username = $('#username').val();
    socket.emit('login', {username:username})
    $('#login-btn').hide();
    $('#chat-box').show();
    $('#username').val("")
})






