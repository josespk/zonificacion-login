import React from "react";
import Login from "../components/Login";
import Formulario from "../components/Formulario";
import { Layout, Space } from "antd";
import { Col, Row, Divider, ConfigProvider, Typography, Watermark } from "antd";
import { headerStyle, footerStyle, contentStyle } from "../styles/homeStyle";

const { Title } = Typography;

const { Header, Footer, Content } = Layout;

const Ids = () => (
  <Watermark content="ELWEBOOOOO">
  <Layout>
    <Header style={headerStyle}>
      <Divider orientation="center">
        <Title level={3}>Ingreso</Title>
      </Divider>
    </Header>
    <Content style={contentStyle}>
      <Space
        direction="vertical"
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Login />
      </Space>
    </Content>
    <Footer style={footerStyle}>
      <Title level={2}>Tu jopotron S.A Presenta</Title>
      <Space
        direction="vertical"
        style={
          {
            display: "flex",
            alignItems: "center",
          }
        }
      >
        <Formulario />
      </Space>
    </Footer>
  </Layout>
  </Watermark>
);

export default Ids;
