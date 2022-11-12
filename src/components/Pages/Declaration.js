import { Form, Checkbox, Radio, Input, DatePicker } from 'antd'
import moment from 'moment'
import React from 'react'
const { TextArea } = Input;

const Declaration = () => {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; 
  var yyyy = today.getFullYear();
  if(dd<10) 
    dd='0'+dd;
  if(mm<10) 
      mm='0'+mm;
  const finalDate = dd+'-'+mm+'-'+yyyy;
  const dateFormat = 'DD-MM-YYYY';


  return (
    <div>
      <Form.Item label="Whether suffering from any chronic disease:" name="chronicDisease" required>
        <Radio.Group>
          <Radio value="true"> Yes </Radio>
          <Radio value="false"> No </Radio>
        </Radio.Group>
      </Form.Item>


      <Form.Item label="If yes, please provide detailed information" name="chronicIssue">
        <TextArea rows={4} />
      </Form.Item>



      <Form.Item name="Q1dec"
        valuePropName="checked">
        <Checkbox>
          I certified that all information provided by me in this form is correct to the best of my knowledge and belief.
        </Checkbox>
      </Form.Item>


      <Form.Item name="Q2dec"
        valuePropName="checked">
        <Checkbox>
        I understand that any willful misrepresentation of facts will result in my dismissal from the Institute. If admitted,I shall abide by all rules and regulations of the Institute.
        </Checkbox>
      </Form.Item>


      <Form.Item name="dateofDec" label="Date">
        <DatePicker format="DD-MM-YYYY" defaultValue={moment(finalDate, dateFormat)} disabled/>
      </Form.Item>
    </div>
  )
}

export default Declaration