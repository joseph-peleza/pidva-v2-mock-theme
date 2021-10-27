import React from "react";

import Widget from "components/Widget/index";
import {Select} from "antd";

const Option = Select.Option;

const IconWithTextCard = ({cardColor, icon, title, subTitle, iconColor}) => {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  function handleBlur() {
    console.log('blur');
  }

  function handleFocus() {
    console.log('focus');
  }

  return (
    <Widget styleName={`gx-card-full gx-p-3 gx-bg-${cardColor} gx-text-white`}>
      <div className="gx-media gx-align-items-center gx-flex-nowrap">
        <div className="gx-mr-2 gx-mr-xxl-3">
          <i className={`icon icon-${icon} gx-fs-icon-lg`}/>
        </div>
        <div className="gx-media-body">
          <h1 className="gx-fs-xxl gx-font-weight-semi-bold gx-mb-1 gx-text-white">{title}</h1>
          <p className="gx-mb-0">{subTitle}</p>
        </div>
        <div className="gx-media-body">
          <Select
            showSearch
            style={{width: 130}}
            placeholder="Select period"
            defaultValue="thisYear"
            optionFilterProp="children"
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value="thisYear">This Year</Option>
            <Option value="halfYear">Half Year</Option>
            <Option value="thisMonth">This Month</Option>
            <Option value="thisWeek">This Week</Option>
          </Select>
        </div>
      </div>
    </Widget>
  );
};

export default IconWithTextCard;
