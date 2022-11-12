import { Form, Input, Row, Col, Space, Select, DatePicker, Button } from 'antd'
import React from 'react'
const {Option} = Select

const AcademicDetails = () => {
  return (
    <>
      <h4>
        Education
      </h4>

      <Form.Item label="10th /SSC">
        <Form.Item
          label="Name of Board"
          name="10board"
          required
        >
          <Input/>
        </Form.Item>
        <Form.Item
          label="Subject"
          name="10subject"
          required
        >
          <Input/>
        </Form.Item>
        <Form.Item
          label="Year of Passing"
          name="10year"
          required
        >
          <DatePicker  picker="year"/>
        </Form.Item>
        <Form.Item
          label="Marks Obtained"
          name="10marks"
          required
        >
          <Input/>
        </Form.Item>
        <Form.Item
          label="Grade/CGPA"
          name="10grade"
          required
        >
          <Input/>
        </Form.Item>

      </Form.Item>


      <Form.Item label="12th /HSC">
        <Form.Item
          label="Name of Board"
          name="12board"
          required
        >
          <Input/>
        </Form.Item>
        <Form.Item
          label="Subject"
          name="12subject"
          required
        >
          <Input/>
        </Form.Item>
        <Form.Item
          label="Year of Passing"
          name="12year"
          required
        >
          <DatePicker  picker="year"/>
        </Form.Item>
        <Form.Item
          label="Marks Obtained"
          name="12marks"
          required
        >
          <Input/>
        </Form.Item>
        <Form.Item
          label="Grade/CGPA"
          name="12grade"
          required
        >
          <Input/>
        </Form.Item>

      </Form.Item>




      <h4>
        Jee Mains Details
      </h4>

      <Form.Item
        name = "round"
        label = "Round of allotment"
        rules={[
          {
            required: true,
            message: 'Please input round of college allotment',
          },
        ]}
      >
        <Input/>
      </Form.Item>


      <Form.Item
        name = "JEEroll"
        label = "JEE Roll Number"
        rules={[
          {
            required: true,
            message: 'Please input your JEE Mains Enrollment Number',
          },
        ]}
      >
        <Input/>
      </Form.Item>


        <Form.Item
        label = "JEE All India Rank Score"
        rules={[
          {
            required: true,
            message: 'Please input your JEE Mains Score Details',
          },
        ]}
        >
          <Space/>
      <Input.Group>
        <Row gutter={[8,0]}>
          <Col>
          <Form.Item
            label = "AIR"
            name = "AIR"
            required
          >
            <Input/>
          </Form.Item>
          </Col>

          <Col>
          <Form.Item
            label = "Score"
            name = "score"
            required
          >
            <Input/>
          </Form.Item>
          </Col>

          <Col>
          <Form.Item
            label = "Percentile"
            name = "percentile"
            required
          >
            <Input/>
          </Form.Item>
          </Col>

          <Col>
          <Form.Item
            label = "Year"
            name = "year"
            required
          >
            <Input/>
          </Form.Item>
          </Col>
        </Row>
      </Input.Group>
      </Form.Item>


      <Form.Item
        label="Allotment Category"
        name="alltCategory"
        rules={[{ required: true, message: "Please select seat allotment category" }]}
      >
        <Select placeholder="Gen/SC/ST/OBC/Gen-EWS">
          <Option value="Gen">Gen</Option>
          <Option value="Gen-EWS">Gen-EWS</Option>
          <Option value="OBC-NCL">OBC-NCL</Option>
          <Option value="SC">SC</Option>
          <Option value="ST">ST</Option>
        </Select>
      </Form.Item>


    </>
  )
}

export default AcademicDetails