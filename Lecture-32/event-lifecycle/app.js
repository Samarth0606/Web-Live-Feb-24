let grandParent = document.querySelector('#grandParent')
let parent = document.querySelector('#parent')
let child = document.querySelector('#child')


// grandParent.addEventListener('click' , function(){
//     console.log("grand-parent")
// } , false)
// parent.addEventListener('click' , function(){
//     console.log("parent")
// } , false)
// child.addEventListener('click' , function(){
//     console.log("child")
// } , false)


// false -> bubbling -> neeche se upar
// true -> capturing -> upar se neeche

// // ---------------------------------------------------

// grandParent.addEventListener('click' , function(){
//     console.log("grand-parent")
// } , true)
// parent.addEventListener('click' , function(){
//     console.log("parent")
// } , true)
// child.addEventListener('click' , function(){
//     console.log("child")
// } , true)


// // ---------------------------------------------------

// grandParent.addEventListener('click' , function(){
//     console.log("grand-parent")
// } , false)
// parent.addEventListener('click' , function(){
//     console.log("parent")
// } , true)
// child.addEventListener('click' , function(){
//     console.log("child")
// } , false)


//html -> body -> gp -> p -> ch
        //    bubb -> cap -> bubb


// ---------------------------------------------------

// grandParent.addEventListener('click' , function(){
//     console.log("grand-parent")
// } , true)
// parent.addEventListener('click' , function(){
//     console.log("parent")
// } , true)
// child.addEventListener('click' , function(){
//     console.log("child")
// } , false)

// // ---------------------------------------------------

// grandParent.addEventListener('click' , function(){
//     console.log("grand-parent")
// } , true)
// parent.addEventListener('click' , function(){
//     console.log("parent")
// } , true)
// child.addEventListener('click' , function(){
//     console.log("child")
// } , true)



// ---------------------------------------------------

// grandParent.addEventListener('click' , function(){
//     console.log("grand-parent")
// } , true)
// parent.addEventListener('click' , function(){
//     console.log("parent")
// })
// child.addEventListener('click' , function(){
//     console.log("child")
// })


// -----------------------------------------------------------------


//  e.stopPropagation()

// grandParent.addEventListener('click' , function(){
//     console.log("grand-parent")
// })
// parent.addEventListener('click' , function(e){
//     e.stopPropagation();
//     console.log("parent")
// })
// child.addEventListener('click' , function(){
//     console.log("child")
// })

// -----------------------


grandParent.addEventListener('click' , function(){
    console.log("grand-parent")
} , true)
parent.addEventListener('click' , function(e){
    e.stopPropagation();
    console.log("parent")
} , true)
child.addEventListener('click' , function(){
    console.log("child")
})

