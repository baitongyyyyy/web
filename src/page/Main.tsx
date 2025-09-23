import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "antd";
import http from "../api/http";

export default function Main() {
    const [name, setName] = useState<string>('');
    const nav = useNavigate();

    useEffect(() => {
        const run = async () => {
            try {
                const data = await http.get('/api/auth/me');
                console.log('data:', data);
                setName(data.data.username);

            }catch (error) {
                localStorage.removeItem('token');
                nav('/');
            }
        };
        run();
    }, []);

    return (
    <div className="min-h-screen flex items-center justify-center">
      <Card title="IT 03" style={{ width: 480, textAlign: "center" }}>
        <div>Welcome User: {name}</div>
      </Card>
    </div>
    )
}