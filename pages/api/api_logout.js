export default (req, res) => {

    // Age를 0으로 하여 쿠키를 삭제
    res.setHeader("Set-Cookie", "a_name=Mike;Max-Age=0;HttpOnly,Secure");
    res.statusCode = 200;
    res.json({ message: "ok" });
}