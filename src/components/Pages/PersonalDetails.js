import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Row, Button, Checkbox, Form, Input, Select, DatePicker, Upload, Col, } from "antd";
import { UploadOutlined } from '@ant-design/icons';
const { Option } = Select;

const PersonalDetails = () => {
  const [form] = Form.useForm();
  const [disable, setDisable] = useState(false);


  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="91">+91</Option>
        <Option value="1">+1</Option>
      </Select>
    </Form.Item>
  );

  return (
    <>
      <Form.Item
        label="Student Name"
        name="studentname"
        rules={[
          {
            required: true,
            message: "Please input your name!",
          },
        ]}
      >
        <Input />
      </Form.Item>


        <Input.Group>
          <Row gutter={[8,0]}>
            <Col>
            <Form.Item
              label="Father's Name"
              name="fathername"
              rules={[
                {
                  required: true,
                  message: "Please input your father's Name!",
                },
              ]}
            >
              <Input />
            </Form.Item></Col>

            <Col>
            <Form.Item
              label="Father's Occupation"
              name="fatherOccptn"
              rules={[
                {
                  required: true,
                  message: "Please input your father's Occupation!",
                },
              ]}
            >
              <Input />
            </Form.Item></Col>
          </Row>
        </Input.Group>


        <Input.Group>
          <Row gutter={[8,0]}>
            <Col>
            <Form.Item
              label="Mother's Name"
              name="mothername"
              rules={[
                {
                  required: true,
                  message: "Please input your mother's Name!",
                },
              ]}
            >
              <Input />
            </Form.Item></Col>

            <Col>
            <Form.Item
              label="Mother's Occupation"
              name="motherOccptn"
              rules={[
                {
                  required: true,
                  message: "Please input your mother's Occupation!",
                },
              ]}
            >
              <Input />
            </Form.Item></Col>
          </Row>
        </Input.Group>




      <Form.Item
        name="gender"
        label="Gender"
        rules={[{ required: true, message: "Please select gender!" }]}
      >
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>


      <Form.Item
        name="bloodGroup"
        label="Blood group"
        rules={[{ required: true, message: "Please select your blood group" }]}
      >
        <Select placeholder="select your blood group">
          <Option value="A+">A+</Option>
          <Option value="A-">A-</Option>
          <Option value="B+">B+</Option>
          <Option value="B-">B-</Option>
          <Option value="O+">O+</Option>
          <Option value="O-">O-</Option>
          <Option value="AB+">AB+</Option>
          <Option value="AB-">AB-</Option>
        </Select>
      </Form.Item>


      <Form.Item
        label="Candidate Category"
        name="canCategory"
        rules={[{ required: true, message: "Please select your Category" }]}
      >
        <Select placeholder="Gen/SC/ST/OBC/Gen-EWS">
          <Option value="Gen">Gen</Option>
          <Option value="Gen-EWS">Gen-EWS</Option>
          <Option value="OBC-NCL">OBC-NCL</Option>
          <Option value="SC">SC</Option>
          <Option value="ST">ST</Option>
        </Select>
      </Form.Item>


      <Form.Item name="dob" label="Date of Birth" rules={[{ required: true, message: "Please enter your date of birth" }]}>
        <DatePicker />
      </Form.Item>


      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          
        />
      </Form.Item>


      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>


      <Form.Item
        name="adhaar"
        label="Adhaar-Number"
        rules={[
          {
            pattern: '^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$',
            message: 'The input is not a valid Adhaar-Number!',
          },
          {
            required: true,
            message: 'Please input your Adhaar-Number!',
          },
        ]}
      >
        <Input />
      </Form.Item>


      <Form.Item
        label = "Correspondence address"
        required 
      >
        <Form.Item name = "corresAdd" required>
        <Input 
          type='String'
          placeholder = "Enter house no. /flat no. ,street"
        />
        </Form.Item>

        <Input.Group>
          <Row gutter={[8,0]}>
            <Col>
            <Form.Item name="corresCity" label="City" required>
              <Input/>
            </Form.Item>
            </Col>

            <Col>
            <Form.Item name="corresState" label="State" required>
              <Input/>
            </Form.Item>
            </Col>

            <Col>
            <Form.Item name="corresPin" label="Pincode" required>
              <Input/>
            </Form.Item>
            </Col>
          </Row>
        </Input.Group>
      </Form.Item>

      <Form.Item
        label = "Permanent address"
        required 
      >
        <Form.Item name = "permAdd" required>
        <Input 
          type='String'
          placeholder = "Enter house no. /flat no. ,street"
        />
        </Form.Item>

        <Input.Group>
          <Row gutter={[8,2]}>
            <Col>
            <Form.Item name="permCity" label="City" required>
              <Input/>
            </Form.Item>
            </Col>

            <Col>
            <Form.Item name="permState" label="State" required>
              <Input/>
            </Form.Item>
            </Col>

            <Col>
            <Form.Item name="permPin" label="Pincode" required>
              <Input/>
            </Form.Item>
            </Col>
          </Row>
        </Input.Group>
      </Form.Item>


      <Form.Item
        name="minority"
        label="Minority Detail"
      >
        <Select placeholder="Muslim / Jain / Sikh / Christian">
          <Option value="None">None</Option>
          <Option value="Muslim">Muslim</Option>
          <Option value="Jain">Jain</Option>
          <Option value="Sikh">Sikh</Option>
          <Option value="Christian">Christian</Option>
        </Select>
      </Form.Item>





      
      <Form.Item
        name="physicaldisablityReport"
        label="Medical Report"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra={<i><small>If Yes, please attach verification report Medical Committee of IIIT Nagpur. </small></i>}
      >
        <Checkbox checked={disable} onChange={e => setDisable(e.target.checked)}>
          Please mark if you have physical disability.
        </Checkbox>
        <Upload
          name="logo"
          action="/upload.do"
          listType="picture"
        >
          <Button disabled={!disable} icon={<UploadOutlined />}>
            Click to upload
          </Button>
        </Upload>
      </Form.Item>




      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </>
  );
};

export default PersonalDetails;
