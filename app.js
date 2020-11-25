const usr = {
    'name' : ' Ashik',
    'con' :  928993773298
}

try {
    //Producing Error !
    if(!usr.val){
        throw new SyntaxError("NO SUCH PROPERTY FOUND ")
    }
}catch(e){
    console.log(e)
    console.log(e.message)
}finally{
    console.log("making Sure the Remaining Code Still Run")
}
console.log('Termination !!!!!')