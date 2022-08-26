function a() {
    b();
}

function b() {
    c()
}
function c() {
    console.log('welcome')
}

a()
/**
 ECS =[
    globalContext
 ]
 ECS.push(functionAContext);
 ECS.push(functionBContext);
 ECS.push(functionCContext);
 ECS.pop();
 ECS.pop();
 ECS.pop();

 
 [scope]
 */