// 에러. 
// const Login = ({req, res}) => {

//     console.log("req:");
//     console.log(req);

//     if (req.method === 'POST') {
//         // 쿠키 생성
//         res.setHeader("Set-Cookie", "a_name=Mike;Max-Age=3600;HttpOnly,Secure");
//         res.statusCode = 200;
//         res.json({ message: "ok" });
//     }
// };
// 
// export default Login;

export default (req, res) => {
    if (req.method === 'POST') {
        // 쿠키 생성
        res.setHeader("Set-Cookie", "a_name=Mike;Max-Age=3600;HttpOnly,Secure");
        res.statusCode = 200;
        res.json({ message: "ok" });
    }
}