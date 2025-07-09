// const dotenv = require('dotenv');
// dotenv.config();

// const Express = require('express');
// const app = Express();

// app.use(Express.json());
// app.use((req,res,next)=>{
//     console.log("-----------------");
//     console.log(new Date(),req.method, req.url);
//     console.log("-----------------");
//     next();

// })

// app.get('/', (req, res) => {
//     res.json({
//         isSuccess: true,
//         message: 'Hello World',
//         data : {},
//     });
// })

// app.get('/hello', (req, res) => {
//     res.json({
//         isSuccess: true,
//         message: 'Hello World',
//         data : {},
//     });
// })

// app.use((req,res,next)=>{
//     console.log("!!!!!!");
//     res.status(404).json({
//         isSuccess: false,
//         message: 'Not Found',
//         data : {},
//     })
//     next();
// })

// app.listen(2900, () => {
//     console.log("server is running on port 2900")
// });