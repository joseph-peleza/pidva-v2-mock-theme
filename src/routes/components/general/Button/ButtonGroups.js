import React from "react";
import { CloudDownloadOutlined, CloudOutlined } from '@ant-design/icons';
import {Button, Card } from "antd";
import { Icon } from "@ant-design/compatible";

const ButtonGroup = Button.Group;

const ButtonGroups = () => {
  return (
    <Card className="gx-card" title="Button Groups">
      <h4>Basic</h4>
      <ButtonGroup>
        <Button>Cancel</Button>
        <Button>OK</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button disabled>L</Button>
        <Button disabled>M</Button>
        <Button disabled>R</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button>L</Button>
        <Button>M</Button>
        <Button>R</Button>
      </ButtonGroup>

      <h4>With Icon</h4>
      <ButtonGroup>
        <Button type="primary">
          <Icon type="left"/>Go back
        </Button>
        <Button type="primary">
          Go forward<Icon type="right"/>
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button type="primary" icon={<CloudOutlined />}/>
        <Button type="primary" icon={<CloudDownloadOutlined />}/>
      </ButtonGroup>
    </Card>
  );
};

export default ButtonGroups;
