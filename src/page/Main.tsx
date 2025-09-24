import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card } from "antd";
import http from "../api/http";

export default function Main() {
    const [Name, setName] = useState('');
    const nav = useNavigate();

    useEffect(() => {
        const run = async () => {
            const runtoken = localStorage.getItem("token");
            // console.log('runtoken:', runtoken);
            try {
                const data = await http.get('/api/auth/me');
                setName(data.data.userName);

            }catch (error) {
                localStorage.removeItem('token');
                nav('/');
            }
        };
        run();
    }, []);

    return (
    <div className="min-h-screen flex items-center justify-center">
      {/* <Card title="IT 03" style={{ width: 480, textAlign: "center" }}> */}
        <div>Welcome User: {Name}</div>
        <Button type="primary" style={{ marginTop: 16 }} onClick={() => {
            localStorage.removeItem('token');
            nav('/');
        }}>Logout</Button>
      {/* </Card> */}
    </div>
    )
}