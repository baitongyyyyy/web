import { Card, Form, Input, Button, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import http  from "../api/http";
import { useState } from "react";

export default function Login() {
  const [loading, setLoading] = useState(false);

  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    console.log("values:", values);
    try {
      setLoading(true);
      const { data } = await http.post("/api/auth/login", values);
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.username);

      message.success("เข้าสู่ระบบสำเร็จ");
      navigate("/main");
    } catch (error) {
      console.log("error:", error);
      alert("เข้าสู่ระบบไม่สำเร็จ");
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div className="min-h-screen flex items-center justify-center">
      <Card title="Login" style={{ width: 360 }}>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item name="username" label="User" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="password" label="Password" rules={[{ required: true }]}>
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} block>
              เข้าสู่ระบบ
            </Button>
          </Form.Item>
          <Form.Item>
            <Link to="/register">สมัครสมาชิก</Link>
          </Form.Item>
        </Form>
      </Card>
    </div>
    </>
  );
}
