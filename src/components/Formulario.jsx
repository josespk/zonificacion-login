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
} from "antd";
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const Formularioxd = () => {
  return (
    <Form
      labelCol={{ flex: "40%" }}
      wrapperCol={{ flex: "30%" }}
      layout="horizontal"
      style={{
        backgroundColor: "pink",
        padding: 40,
      }}
    >
      <Form.Item label="Nombre">
        <Input />
      </Form.Item>
      <Form.Item
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
      </Form.Item>
      <Form.Item
        name="phone"
        label="Telefono"
        rules={[
          {
            required: true,
            message: "Polfavol el telefono movil!",
          },
        ]}
      >
        <InputNumber
          style={{
            minWidth: 160,
          }}
        />
      </Form.Item>
      <Form.Item label="Direccion" name="Direccion">
        <Space direction="horizontal">
          <Space.Compact
            flex
            style={{
              display: "auto",
              alignItems: "center",
              minWidth: 200,
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
          <InputNumber /> — <InputNumber />
        </Space>
      </Form.Item>
      <Form.Item label="Barrio">
        <Input />
      </Form.Item>
      <Form.Item label="Fecha de Ingreso">
        <DatePicker />
      </Form.Item>
      <Form.Item label="Codigo Zona">
        <InputNumber
          style={{
            minWidth: 160,
          }}
        />
      </Form.Item>
      <Form.Item label="Foto del vale" valuePropName="fileList">
        <Upload action="/upload.do" listType="picture-card">
          <div>
            <PlusOutlined />
            <div
              style={{
                marginTop: 4,
              }}
            >
              Upload
            </div>
          </div>
        </Upload>
      </Form.Item>
      <Space direction="horizontal">
        <Form.Item name="send">
          <Button>Enviar</Button>
        </Form.Item>
      </Space>
    </Form>
  );
};
export default () => <Formularioxd />;
