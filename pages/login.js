import { Button, Form } from "semantic-ui-react";
import { useRouter } from 'next/router';
// import axios from 'axios';
import axios from 'axios';

export default function Login() {
    const router = useRouter();
    function login() {
        axios.post("/api/api_login").then((res) => {
            if (res.status === 200) {
                // 로그인 성공
                router.push("/admin");
            }
        })
    }

    return (
        <div style={{padding: "100px 0", textAlign: "center"}}>
            <Form>
                <Form.Field inline>
                    <input placeholder="ID"/>
                </Form.Field>
                <Form.Field inline>
                    <input placeholder="password"/>
                </Form.Field>
                <Button color="blue" onClick={login}>Login</Button>
            </Form>
        </div>
    )
}