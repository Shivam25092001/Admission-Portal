import { Button, message, Steps } from 'antd';
import "antd/dist/antd.css";
import React, { useState } from 'react';
import AcademicDetails from './Pages/AcademicDetails';
import Declaration from './Pages/Declaration';
import HostelDetails from './Pages/HostelDetails';
import PersonalDetails from './Pages/PersonalDetails';
import "./pagination.css";


const steps = [
  {
    status: 'finish',
    title: 'Personal Details',
    content: <PersonalDetails/>,
  },
  {
    title: 'Academic Details',
    content: <AcademicDetails/>,
    status: 'finish',
  },
  {
    title: 'Hostel Admission',
    content: <HostelDetails/>,
    status: 'process',
  },
  {
    title: 'Declaration',
    content: <Declaration/>,
    status: 'wait',
    disabled: true,
  },
];

const Pagination = () => {
    const [current, setCurrent] = useState(0);
    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };
    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));
    const onChange = (value) => {
      console.log('onChange:', current);
      setCurrent(value);
    };

    console.log(items)

    return (
      <>
        <Steps className="steps site-navigation-steps" type="navigation"
        size="small"
        current={current}
        onChange={onChange}
        items = {steps} />

        <div className="steps-content">{steps[current].content}</div>
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
        </div>
      </>
    );
}

export default Pagination