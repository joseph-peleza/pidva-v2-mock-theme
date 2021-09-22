import React from "react";
import {Col, Row} from "antd";
import Productivity from "src/components/Widgets/Productivity";
import Newseletter from "src/components/Widgets/Newsletter";
import SocialMedia from "src/components/Widgets/SocialMedia";
import ProjectWidget from "src/components/Widgets/ProjectWidget";
import RoadMap from "src/components/Widgets/RoadMap";
import FlyingBird from "src/components/Widgets/FlyingBird";
import DryFruit from "src/components/Widgets/DryFruit";
import AayurvedaCard from "src/components/Widgets/AayurvedaCard";
import ToolTheDay from "src/components/Widgets/ToolTheDay";
import SmartHomeCard from "src/components/Widgets/SmartHomeCard";
import PhotosCard from "src/components/Widgets/PhotosCard";
import UnreadMessagesCard from "src/components/Widgets/UnreadMessagesCard";
import IconCard from "src/components/Widgets/IconCard";
import WorkStatusCard from "src/components/Widgets/WorkStatusCard";
import UserCard from "src/components/Widgets/UserCard";
import IncreamentCard from "src/components/Widgets/IncreamentCard";
import CampaignCard from "src/components/Widgets/CampaignCard";
import BuildingCard from "src/components/Widgets/BuildingCard";
import GreenStepCard from "src/components/Widgets/GreenStepCard";
import FriendshipCard from "src/components/Widgets/FriendshipCard";
import NewPhotos from "src/components/Widgets/NewPhotos";
import Auxiliary from "src/util/Auxiliary";


const Widgets = () => {
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

export default Widgets;
