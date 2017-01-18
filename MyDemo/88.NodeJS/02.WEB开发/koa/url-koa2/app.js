const Koa = require('koa');

//koa-router返回的是函数;
const router = require('koa-router')();
//处理post请求
// 用router.get('/path', async fn)处理的是get请求。如果要处理post请求，
// 可以用router.post('/path', async fn)。

// 用post请求处理URL时，我们会遇到一个问题：post请求通常会发送一个表单，或者JSON，
// 它作为request的body发送，但无论是Node.js提供的原始request对象，还是koa提供的
// request对象，都不提供解析request的body的功能！
//
// 所以，我们又需要引入另一个middleware来解析原始request请求，
// 然后，把解析后的参数，绑定到ctx.request.body中。
// koa-bodyparser就是用来干这个活的。

const bodyParser = require('koa-bodyparser');

const app = new Koa();

//log request Url:

app.use(async (ctx,next)=>{
    console.log(`Process${ctx.request.method} ${ctx.request.url}`);
    await next();
});

//add url-loader
router.get('/hello/:params',async (ctx,next) => {
    var name = ctx.params.params;
    ctx.response.body = `<h1 style="color:red">Hello,${name}!<h1>`;
});


router.get('/', async (ctx, next) => {
    ctx.response.body = '<h1>Index</h1>';
});

router.get('/my/nodejs',(ctx, next)=>{
    ctx.response.body = "<h1>Node js 666</h1>";
});

//post;
router.get('/form',async (ctx,next) => {
    ctx.response.body = `<h1>Index</h1>
        <form action="/signin" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
});

router.post('/signin', (ctx,next)=>{
    var
        name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}`);

    if(name === 'koa' && password === '12345' ){
        ctx.response.body = `<h1>Welcome,${name}</h1>`;
    }else{
        ctx.response.body = `<h1>Login Faild</h1>
        <p><a href="/form">Try Again</a></p>
        `

    }
});

//组册post;由于middleware的顺序很重要，这个koa-bodyparser必须在router之前被注册到app对象上。
app.use(bodyParser());


// add router middleware:很重要的一步
app.use(router.routes());

app.listen(3000);

console.log('app started at port 3000...');
