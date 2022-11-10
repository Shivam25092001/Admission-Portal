import React from "react";
import {Card, Button, Checkbox, Form, Input } from "antd";
import "antd/dist/antd.css";

const PersonalDetails = () => {
  
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
      <Form
        name="basic"
        layout={{
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item label="First Name" name="firstname"  rules={[
            {
              required: true,
              message: "Please input your First Name!",
            },
          ]}>
          <Input />
        </Form.Item>
        <Form.Item label="Middle Name" name="middlename" >
          <Input />
        </Form.Item>
        <Form.Item label="Last Name" name="lastname"  rules={[
            {
              required: true,
              message: "Please input your Last Name!",
            },
          ]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
  );
};

export default PersonalDetails;
