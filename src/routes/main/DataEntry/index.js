import React from "react";
import {Col, Row} from "antd";
import Productivity from "components/DataEntry/Productivity";
import Newseletter from "components/DataEntry/Newsletter";
import SocialMedia from "components/DataEntry/SocialMedia";
import ProjectWidget from "components/DataEntry/ProjectWidget";
import RoadMap from "components/DataEntry/RoadMap";
import FlyingBird from "components/DataEntry/FlyingBird";
import DryFruit from "components/DataEntry/DryFruit";
import AayurvedaCard from "components/DataEntry/AayurvedaCard";
import ToolTheDay from "components/DataEntry/ToolTheDay";
import SmartHomeCard from "components/DataEntry/SmartHomeCard";
import PhotosCard from "components/DataEntry/PhotosCard";
import UnreadMessagesCard from "components/DataEntry/UnreadMessagesCard";
import IconCard from "components/DataEntry/IconCard";
import WorkStatusCard from "components/DataEntry/WorkStatusCard";
import UserCard from "components/DataEntry/UserCard";
import IncreamentCard from "components/DataEntry/IncreamentCard";
import CampaignCard from "components/DataEntry/CampaignCard";
import BuildingCard from "components/DataEntry/BuildingCard";
import GreenStepCard from "components/DataEntry/GreenStepCard";
import FriendshipCard from "components/DataEntry/FriendshipCard";
import NewPhotos from "components/DataEntry/NewPhotos";
import Auxiliary from "util/Auxiliary";


const DataEntry = () => {
  return (
    <Auxiliary>
      <Row>
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          <ProjectWidget/>
        </Col>
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          <Productivity/>
        </Col>
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          <SocialMedia/>
        </Col>
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          <RoadMap/>
        </Col>
        <Col xl={8} lg={12} md={12} sm={12} xs={24}>
          <Newseletter/>
        </Col>
        <Col xl={8} lg={12} md={12} sm={12} xs={24}>
          <NewPhotos/>
        </Col>
        <Col xl={8} lg={12} md={12} sm={12} xs={24}>
          <FlyingBird/>
        </Col>

        <Col xl={4} lg={12} md={12} sm={12} xs={24}>
          <DryFruit/>
        </Col>

        <Col xl={4} lg={8} md={8} sm={12} xs={24}>
          <AayurvedaCard/>
        </Col>

        <Col xl={4} lg={8} md={8} sm={12} xs={24}>
          <ToolTheDay/>
        </Col>

        <Col xl={4} lg={8} md={8} sm={12} xs={24}>
          <Row>
            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
              <IconCard icon="noodles"/>
            </Col>
            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
              <IconCard icon="donut"/>
            </Col>
          </Row>
          <SmartHomeCard/>
        </Col>

        <Col xl={4} lg={12} md={12} sm={12} xs={24}>
          <PhotosCard/>
          <UnreadMessagesCard/>
        </Col>

        <Col xl={4} lg={12} md={12} sm={24} xs={24}>
          <WorkStatusCard/>
          <Row>
            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
              <IconCard color="gx-bg-orange gx-icon-white" icon="burger"/>
            </Col>
            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
              <IconCard color="gx-bg-primary gx-icon-white" icon="pizza"/>
            </Col>
          </Row>
        </Col>

        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          <UserCard/>
        </Col>
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          <IncreamentCard/>
        </Col>
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          <CampaignCard/>
        </Col>
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          <BuildingCard/>
        </Col>

        <Col xl={12} lg={24} md={24} sm={24} xs={24}>
          <GreenStepCard/>
        </Col>
        <Col xl={12} lg={24} md={24} sm={24} xs={24}>
          <FriendshipCard/>
        </Col>
      </Row>
    </Auxiliary>
  );
};

export default DataEntry;
