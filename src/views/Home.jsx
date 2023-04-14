import React from "react";
import { useSpring, animated,  } from "@react-spring/web";
import Login from "../components/Login";
import Formulario from "../components/Formulario";
import { Layout, Space } from "antd";
import {
  Col,
  Row,
  Divider,
  ConfigProvider,
  Typography,
  Watermark,
  theme,
} from "antd";
import { headerStyle, footerStyle, contentStyle } from "../styles/homeStyle";

const { Title } = Typography;

const { Header, Footer, Content } = Layout;
const LoginAnimated = () => {
  const styles = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <animated.div style={styles}>
      <Login />
    </animated.div>
  );
};const Ids = () => (
  <ConfigProvider
    theme={{
      algorithm: theme.darkAlgorithm,
    }}
  >
    <Watermark content="ELWEBOOOOO">
      <Layout>
        <Header style={headerStyle}>
          <Divider orientation="center">
            <Title level={3}>Ingreso</Title>
          </Divider>
        </Header>
        <Content style={contentStyle}>
          <Space
            direction="vertical"          >
            {" "}
            <LoginAnimated />
          </Space>
        </Content>
        <Footer style={footerStyle}>
          <Title level={2}>Tu jopotron S.A Presenta</Title>
          <Space>
            <Formulario />
          </Space>
        </Footer>
      </Layout>
    </Watermark>
  </ConfigProvider>
);

export default Ids;
