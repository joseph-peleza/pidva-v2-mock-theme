import React from "react";
import {Col, Input, Row, Table} from "antd";
import Widget from "components/Widget/index";
import {Button } from "antd";

const columns = [
  {
    title: 'Ref',
    dataIndex: 'dateRequested',
    render: (text, record) => {
      return <span className="gx-text-grey">{record.ref}</span>
    },

  },
  {
    title: 'Candidate Name',
    dataIndex: 'candidate',
    render: (text, record) => {
      return <div className="gx-flex-row gx-align-items-center">
        {/* <img className="gx-rounded-circle gx-size-30 gx-mr-2" src={text} alt=""/> */}
        <p className="gx-mb-0">{record.candidate}</p>
      </div>
    },
  },
  {
    title: 'Client Company',
    dataIndex: 'dateRequested',
    render: (text, record) => {
      return <span className="gx-mb-0">{record.client}</span>
    },

  },
  {
    title: 'Requested By',
    dataIndex: 'image',
    render: (text, record) => {
      return <div className="gx-flex-row gx-align-items-center">
        <img className="gx-rounded-circle gx-size-30 gx-mr-2" src={text} alt=""/>
        <p className="gx-mb-0">{record.requestBy}</p>
      </div>
    },
  },
  {
    title: 'Requested Date',
    dataIndex: 'dateRequested',
    render: (text, record) => {
      return <span className="gx-text-grey">{record.dateRequested}</span>
    },

  },
  {
    title: 'Package',
    dataIndex: 'dateRequested',
    render: (text, record) => {
      return <span className="gx-mb-0">{record.package}</span>
    },

  },
  {
    title: 'Action',
    dataIndex: 'status',
    render: (text) => {
      return <span className="gx-text-orange gx-pointer">
        <i className="icon icon-forward gx-fs-sm gx-mr-2"/>{text}</span>
    },
  },

];

const data = [
  {
    key: '1',
    ref: 'RAK90J',
    candidate: 'Annabel Angwenyi.',
    client: 'Kazi App',
    requestBy: 'Joy',
    dateRequested: '30 Sep 2021',
    image: 'https://wieldy.g-axon.work/assets/images/avatar/a5.png',
    package: 'Standard',
    status: 'View'
  },
  {
    key: '2',
    ref: 'REL0A9',
    candidate: 'Ghururaj Bhat',
    client: 'EABL',
    requestBy: "L'Oreal",
    dateRequested: '17 Sep 2021',
    image: 'https://wieldy.g-axon.work/assets/images/avatar/a6.png',
    package: 'Experienced',
    status: 'View'
  },
  {
    key: '3',
    ref: 'R5GA6F',
    candidate: 'Victoria Onsare',
    client: 'Twiga Foods Ltd',
    requestBy: 'Angel Matende',
    dateRequested: '10 Aug 2021',
    image: 'https://wieldy.g-axon.work/assets/images/avatar/a7.png',
    package: 'Experienced',
    status: 'View'
  },
  {
    key: '4',
    ref: '	RAGJ6A',
    candidate: 'Chris Wekesa',
    client: 'Stanbic Bank',
    requestBy: 'Nephat',
    dateRequested: '28 July 2021',
    image: 'https://wieldy.g-axon.work/assets/images/avatar/domnic-harris.png',
    package: 'Experienced',
    status: 'View'
  }
]; 

const Search = Input.Search;

const SendMoney = () => {
  return (
    <Widget
      title={
        <h2 className="h4 gx-text-capitalize gx-mb-0 gx-text-black">
          New Requests
        </h2>
      } extra={
      // <p className="gx-text-primary gx-mb-0 gx-pointer gx-d-none gx-d-sm-block">
      //   <i className="icon icon-add-circle gx-fs-lg gx-d-inline-flex gx-vertical-align-middle"/> Add New Request</p>
      <>
      <Row>
        <Col xl={13} lg={12} md={12} sm={12} xs={24}>
        <Search
          placeholder="Search for request.."
          onSearch={value => console.log(value)}
          style={{width: 200}}
        />
        </Col>

        <Col xl={11} lg={12} md={12} sm={12} xs={24}>
        <Button type="default">View All Requests</Button>
        </Col>
       
      </Row>
      </>
    }>
      <div className="gx-table-responsive">
        <Table className="ColSpan and RowSpan Table" columns={columns} dataSource={data} pagination={true}
               size="medium" bordered/>
      </div>
      <p className="gx-text-primary gx-mb-0 gx-pointer gx-d-block gx-d-sm-none gx-mb-0 gx-mt-3">
        <i className="icon icon-add-circle gx-fs-lg gx-d-inline-flex gx-vertical-align-middle"/> Add New Request</p>
    </Widget>
  );
};

export default SendMoney;
