import React, { useState } from "react";
import { Button, Steps } from "antd";

const StepPanel = (props) => {
  const [activeStep, setActiveStep] = useState(0);

  function next() {
    const nextStep = activeStep + 1;
    setActiveStep(nextStep);
  }

  function prev() {
    const prevStep = activeStep - 1;
    setActiveStep(prevStep);
  }

  return (
    <>
      <Steps current={activeStep} items = {props.steps}/>
      
      <div className="steps-content">{props.steps[activeStep].content}</div>
      <div className="steps-action">
        {activeStep < props.steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {activeStep === props.steps.length - 1 && (
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        )}
        {activeStep > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </>
  );
};

export { StepPanel };