import React from 'react'
import {Form, Radio, Button} from 'antd'
import './DocumentUpload.module.css'

const DocumentUpload = () => {
  return (
    <>
      <h4>
        Verify the following documents:
      </h4>

      <Form.Item label="Seat Allotment letter" name="seatAllotmentletter" required>
        <Radio.Group>
          <Radio value="true"> Yes </Radio>
          <Radio value="false"> No </Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item label="JEE Rank card" name="jeeRankCard" required>
        <Radio.Group>
          <Radio value="true"> Yes </Radio>
          <Radio value="false"> No </Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item label="Photo ID proof" name="seatAllotmentletter" required>
        <Radio.Group>
          <Radio value="true"> Yes </Radio>
          <Radio value="false"> No </Radio>
        </Radio.Group>
      </Form.Item>


      <Form.Item label="Certificate for proof of DOB" name="DOBcertificate" required>
        <Radio.Group>
          <Radio value="true"> Yes </Radio>
          <Radio value="false"> No </Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item label="Qualifying exam marksheet" name="qualMarksheet" required>
        <Radio.Group>
          <Radio value="true"> Yes </Radio>
          <Radio value="false"> No </Radio>
        </Radio.Group>
      </Form.Item>


      <Form.Item label="Income Certificate (for EWS)" name="incomCertificate" required>
        <Radio.Group>
          <Radio value="true"> Yes </Radio>
          <Radio value="false"> No </Radio>
        </Radio.Group>
      </Form.Item>


      <Form.Item label="Category Certificate" name="catCertificate" required>
        <Radio.Group>
          <Radio value="true"> Yes </Radio>
          <Radio value="false"> No </Radio>
        </Radio.Group>
      </Form.Item>


      <Form.Item label="Cast Validity(if issued by Maharashtra Govt.)" name="castValid" required>
        <Radio.Group>
          <Radio value="true"> Yes </Radio>
          <Radio value="false"> No </Radio>
        </Radio.Group>
      </Form.Item>


      <Form.Item label="Non-creamy Layer Certificate (for OBC)" name="NCLcertificate" required>
        <Radio.Group>
          <Radio value="true"> Yes </Radio>
          <Radio value="false"> No </Radio>
        </Radio.Group>
      </Form.Item>


      <Form.Item label="Transfer Certificate" name="TCertificate" required>
        <Radio.Group>
          <Radio value="true"> Yes </Radio>
          <Radio value="false"> No </Radio>
        </Radio.Group>
      </Form.Item>


      <Form.Item label="Migration Certificate" name="MCertificate" required>
        <Radio.Group>
          <Radio value="true"> Yes </Radio>
          <Radio value="false"> No </Radio>
        </Radio.Group>
      </Form.Item>


      <Form.Item label="Gap Certificate" name="GCertificate" required>
        <Radio.Group>
          <Radio value="true"> Yes </Radio>
          <Radio value="false"> No </Radio>
        </Radio.Group>
      </Form.Item>


    </>
  )
  
}

export default DocumentUpload