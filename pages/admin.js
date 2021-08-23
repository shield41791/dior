import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'semantic-ui-react';

export default function Admin() {
    const router = useRouter();
    const [isLogin, setIsLogin] = useState(false);

    function checkLogin() {
        axios.get("/api/api_isLogin").then((res) => {
            if (res.status === 200 && res.data.name) {
                // 로그인 상ㅐ
                setIsLogin(true);
            } else {
                // 미로그인 상태
                router.push("/login");
            }
        });
    }

    function logout() {
        axios.get("/api/api_logout").then((res) => {
            if (res.status === 200) {
                router.push("/");
            }
        });
    }

    useEffect(() => {
        checkLogin();
    }, []);

    return (
        <div style={{padding: "100px 0", textAlign: "center"}}>
            <div style={{marginBottom: "30px"}}>
                <h2>ADMIN PAGE</h2>
            </div>
            <div>
                {isLogin && <Button onClick={logout}>Logout</Button>}
            </div>
        </div>
    );
}
