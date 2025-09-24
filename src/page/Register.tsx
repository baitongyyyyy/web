import { Card, Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import http  from "../api/http";
import { useState } from "react";

export default function Register() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    setLoading(true);
    if (values.password !== values.confirmPassword) {
      alert("รหัสผ่านไม่ตรงกัน");
      return;
    }
    try {
        await http.post("/api/auth/register", values);
        alert("สมัครสมาชิกสำเร็จ");
        window.location.href = "/";
    } catch (error) {
      alert("สมัครสมาชิกไม่สำเร็จ");
    }
    finally {
        setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card title="Register" style={{ width: 380 }}>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item name="username" label="User" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, min: 6 }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            rules={[{ required: true }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} block>
              สมัครสมาชิก
            </Button>
          </Form.Item>
          <Form.Item>
            <Link to="/">กลับไปหน้าเข้าสู่ระบบ</Link>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
