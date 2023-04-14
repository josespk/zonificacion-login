import React from "react";
import { useSpring, animated } from "@react-spring/web";
import Login from "../components/Login";
import Formulario from "../components/Formulario";
import { Layout, Space, Card } from "antd";
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
};
const Ids = () => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimaryBg: "#424C6F",
        colorPrimaryBgHover: "D8D9DE",
        colorPrimaryBorder: "D8D9DE",
        colorPrimary: "#424C6F",
        colorText: "#D8D9DE",
        fontFamily: "Helvetica",
      },
      algorithm: theme.defautlAlgorithm,
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
          <Space direction="vertical">
            {" "}
            <LoginAnimated />
          </Space>
        </Content>
        <Footer style={footerStyle}>
          <Title level={2}>Tu jopotron S.A Presenta</Title>
          <Card
            hoverable
            title="Formulario"
            bodyStyle={{ backgroundColor: "#5F6784" }}
            headStyle={{ backgroundColor: "#80869C" }}
          >
            <Space>
              <Formulario />
            </Space>
          </Card>
        </Footer>
      </Layout>
    </Watermark>
  </ConfigProvider>
);
export default Ids;
