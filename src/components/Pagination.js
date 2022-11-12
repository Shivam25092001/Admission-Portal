import { Form } from "antd";
import "antd/dist/antd.css";
import React, { useState, createContext } from 'react';
import AcademicDetails from './Pages/AcademicDetails';
import Declaration from './Pages/Declaration';
import DocumentUpload from './Pages/DocumentUpload';
import PersonalDetails from './Pages/PersonalDetails';
import { StepPanel } from './StepPanel';
import "./pagination.css";





const Pagination = () => {
  const [stepForm] = Form.useForm();

  const onFinish = (fieldsValue) => {
    const formData = stepForm.getFieldsValue(true);
    console.log("Success:", fieldsValue);

    // POST the data to backend and show Notification
    console.log(formData);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };


  const steps= [
    {
      title: 'Personal Details',
      content: <PersonalDetails/>,
    },
    {
      title: 'Academic Details',
      content: <AcademicDetails/>,
    },
    {
      title: 'Document Uploads',
      content: <DocumentUpload/>,
    },
    {
      title: 'Declaration',
      content: <Declaration/>,
    },
  ];




    // const [current, setCurrent] = useState(0);
    // const next = () => {
    //     setCurrent(current + 1);
    //     console.log(steps[current].status)
    // };
    // const prev = () => {
    //     setCurrent(current - 1);
    // };
    // const items = steps.map((item) => ({
    //     key: item.title,
    //     title: item.title,
    // }));
    // const onChange = (value) => {
    //   console.log('onChange:', current);
    //   setCurrent(value);
    // };

    




    return (
      <>
        {/* <Steps className="steps site-navigation-steps" type="navigation"
        size="small"
        current={current}
        onChange={onChange}
        items = {steps} /> */}

        <Form form={stepForm} 
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="on"
        >
          < StepPanel steps={steps} />
        </Form>
        
        {/* <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              Done
            </Button>
          )}
          {current > 0 && (
            <Button
              style={{
                margin: '0 8px',
              }}
              onClick={() => prev()}
            >
              Previous
            </Button>
          )}
        </div> */}
      </>
    );
}

export default Pagination