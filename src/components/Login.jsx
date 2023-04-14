import {
  Button,
  Checkbox,
  Divider,
  Form,
  Input,
  ConfigProvider,
  theme,
} from "antd";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

function Login() {
  return (
      <Form
        name="basic"
        labelCol={{
          span: 24,
          order: 1,
        }}
        wrapperCol={{
          flex: 4,
          order: 2,
        }}
        style={{
          maxWidth: 230,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input className="input" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password className="input" />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 0,
            span: 24,
          }}
        >
          <Checkbox className="checkbox">Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 0,
            span: 24,
          }}
        >
          <Button type="primary" htmlType="submit" className="button">
            Submit
          </Button>
        </Form.Item>
      </Form>
  );
}

export default Login;
