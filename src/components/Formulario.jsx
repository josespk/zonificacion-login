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
      wrapperCol={{ flex: "50%" }}
      layout="horizontal"
      style={{
        backgroundColor: "pink",
        padding: 40,
        maxWidth: 500,
      }}
    >
      <Form.Item label="Enrique">
        <Select>
          <Select.Option value="optionxd1">Segoviano</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Direccion"
        name="Direccion"
        style={{
          backgroundColor: "red",
        }}
      >
        <Space direction="horizontal">
          <Space.Compact
            flex
            style={{
              display: "auto",
              alignItems: "center",
              backgroundColor: "yellow",
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
      <Form.Item
        name="phone"
        label="Numero Telefonico"
        rules={[
          {
            required: true,
            message: "Polfavol el telefono movil!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Radiofrecuencia">
        <Radio.Group>
          <Radio value="radiof1"> Elwebo </Radio>
          <Radio value="radiof2"> ElWebon't </Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Direccion 1">
        <Input />
      </Form.Item>
      <Form.Item label="Direccion 2">
        <Input />
      </Form.Item>

      <Form.Item label="Cuando jue">
        <DatePicker />
      </Form.Item>
      <Form.Item label="Cual jue">
        <InputNumber />
      </Form.Item>
      <Form.Item label="Upload" valuePropName="fileList">
        <Upload action="/upload.do" listType="picture-card">
          <div>
            <PlusOutlined />
            <div
              style={{
                marginTop: 8,
              }}
            >
              Upload
            </div>
          </div>
        </Upload>
      </Form.Item>
      <Form.Item label="asdasdasd">
        <Button>Enviar</Button>
      </Form.Item>
    </Form>
  );
};
export default () => <Formularioxd />;
