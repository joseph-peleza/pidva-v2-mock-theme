import React from "react";
import {Button, Form, Input, Select} from "antd";
import Widget from "components/Widget/index";

const Option = Select.Option;
const FormItem = Form.Item;
const CurrencyCalculator = () => {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <Widget
      title={<h2 className="h4 gx-mb-0 gx-text-capitalize">Id Verification Check</h2>}>
      <p className="gx-mb-2">Total Searches this week:</p>
      <h1 className="gx-mb-2 gx-text-primary gx-font-weight-medium gx-fs-xxl">1500 Searches</h1>
      <p className="gx-text-grey gx-fs-sm gx-mb-3 gx-mb-lg-4">1 request = 1 Search</p>
      <Form layout="inline" className="gx-form-inline-label-up gx-form-inline-currency">
        <FormItem label="Country" className="gx-form-item-one-fourth">
          <Select defaultValue="Kenyan" onChange={handleChange}>
            <Option value="jack">Kenyan</Option>
            <Option value="lucy">Foreigner</Option>
          </Select>
        </FormItem>
        <FormItem label="Doccument" className="gx-form-item-one-fourth">
          <Select defaultValue="ID Number" onChange={handleChange}>
            <Option value="jack">ID Number</Option>
            <Option value="lucy">Passport Number</Option>
          </Select>
        </FormItem>
        <FormItem label="Number (ID)" className="gx-form-item-two-fourth">
          <Input placeholder="00000000"/>
        </FormItem>
        <FormItem className="gx-d-block gx-mb-1">
          <Button className="gx-mb-0" type="primary">Search Now</Button>
        </FormItem>
      </Form>
    </Widget>
  );
};

export default CurrencyCalculator;
