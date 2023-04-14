import { useSpring, animated, useTrail } from "@react-spring/web";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Divider,
  Form,
  Input,
  InputNumber,
  Radio,
  Row,
  Select,
  Switch,
  TreeSelect,
  Upload,
  Space,
  Col,
  Typography,
} from "antd";
const { RangePicker } = DatePicker;
const AnimatedFormItem = animated(Form.Item);
const animationConfig = { opacity: 1, from: { opacity: 0 }, delay: 100 };
const Formularioxd = () => {
  const itemProps = useSpring(animationConfig);
  const documentoProps = useSpring(animationConfig);
  return (
    <Form
      labelCol={{ flex: "40%" }}
      wrapperCol={{ flex: "30%" }}
      layout="horizontal"
      style={{
        padding: 20,
      }}
    >
      <AnimatedFormItem style={itemProps} label="Nombre" name="name">
        <Input />
      </AnimatedFormItem>
      <AnimatedFormItem
        style={documentoProps}
        label="Documento"
        name="documento"
        rules={[
          {
            required: true,
            message: "CEDULA mi amigo",
          },
        ]}
      >
        <Input />
      </AnimatedFormItem>
      <AnimatedFormItem
        style={itemProps}
        label="Telefono"
        name="phone"
        rules={[
          {
            required: true,
            message: "Polfavol el telefono movil!",
          },
        ]}
      >
        <InputNumber style={{ minWidth: 160 }} />
      </AnimatedFormItem>
      <AnimatedFormItem style={itemProps} label="Direccion" name="direccion">
        <Space direction="horizontal">
          <Space.Compact
            flex
            style={{
              display: "auto",
              alignItems: "center",
              minWidth: 190,
            }}
          >
            <Select>
              <Select.Option value="optionxd1">Calle</Select.Option>
              <Select.Option value="optionxd2">Carrera</Select.Option>
              <Select.Option value="optionxd3">Avenida</Select.Option>
              <Select.Option value="optionxd4">Diagonal</Select.Option>
            </Select>
            <Input />
          </Space.Compact>{" "}
          #
          <InputNumber
            style={{
              maxWidth: 60,
            }}
          />{" "}
          —{" "}
          <InputNumber
            style={{
              maxWidth: 60,
            }}
          />
        </Space>
      </AnimatedFormItem>
      <AnimatedFormItem style={itemProps} label="Barrio">
        <Input />
      </AnimatedFormItem>
      <AnimatedFormItem style={itemProps} label="Fecha de Ingreso">
        <DatePicker />
      </AnimatedFormItem>
      <AnimatedFormItem style={itemProps} label="Codigo Zona">
        <InputNumber
          style={{
            minWidth: 160,
          }}
        />
      </AnimatedFormItem>
      <Form.Item label="Foto" valuePropName="fileList">
        <Upload action="/upload.do" listType="picture-card">
          <div>
            <PlusOutlined />
            <div
              style={{
                marginTop: 4,
              }}
            >
              Upload your nude here
            </div>
          </div>
        </Upload>
      </Form.Item>
      <Space
        direction="horizontal"
        style={{
          marginLeft: 40,
        }}
      >
        <Form.Item name="send">
          <Button type="primary" htmlType="submit" className="button">
            Enviar
          </Button>
        </Form.Item>
      </Space>
    </Form>
  );
};
export default () => <Formularioxd />;
