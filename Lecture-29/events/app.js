
// function sam1(){
//     console.log("sam1")
// }
// function sam2(){
//     console.log("sam2")
// }
// function sam3(){
//     console.log("sam3")
// }


// $('button').click(sam1)
// $('button').click(sam2)
// $('button').click(sam3)


// $('input').keydown(sam1)
// $('input').keydown(sam2)
// $('input').keydown(sam3)

// ----------------------------

// addeventlistener -> on


// $('button').on('click' , function(){
//     console.log("bhai hai")
// })


// -----------------------------

// this keyword -> ye vaala this js vaala this nhi hai
// i.e jquery vaala this => target element

$('li').click(function(){
    // $('li').css('color','red')
    $(this).css('color','red')
})


$('input').keydown(function(){
    console.log($(this).val())
})