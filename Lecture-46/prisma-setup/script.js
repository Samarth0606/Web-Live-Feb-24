let { PrismaClient }  =  require('@prisma/client');
const prisma = new PrismaClient();


// prisma.user.create()
// prisma.user.delete()

// INSERT
// async function insertUser(name , email){
//     await prisma.user.create({
//         data:{
//             name,
//             email
//         }
//     })
// }
// insertUser('sam' , 'sam@gmail.com')

// ----------------------

// async function insertPost(){
//     await prisma.post.create({
//         data:{
//             title:'badminton',
//             content:'play badminton and win',
//             author:{
//                 connect:{
//                     id:1
//                 }
//             }
//         }
//     })
// }
// insertPost()

// ------------------

// async function getUser(){
//     let users = await prisma.user.findMany({})
//     console.log(users)

//     let users2 = await prisma.user.findUnique({
//         where:{
//             id:1
//         },
//         include:{
//             posts:true
//         }
//     })
//     console.log(users2)
// }
// getUser()

// ------------------


async function updatePost(id , content){
    let users = await prisma.post.update({
        where:{
            id
        },
        data:{
           content ,
           published:true
        }
    })
   
}
updatePost(1 , 'mai hu badmaash players');
