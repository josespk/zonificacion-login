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
} from "antd";
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const Formularioxd = () => {
  return (
    <Form
      labelCol={{
        flex: "0.3",
      }}
      wrapperCol={{
        flex: "1",
      }}
      layout="horizontal"
      style={{
        backgroundColor: "pink",
        padding: 10,
        minWidth: 600,
      }}
    >
      <Form.Item style={{
            display: "auto",
            backgroundColor: "red",            
          }}>
        <Divider orientation="left">Direccion</Divider>
        <div style={{
            display: "inline flex",
            backgroundColor: "blue",
            alignItems: "center",
          }}>
        <Select>
          <Select.Option value="optionxd1">Calle</Select.Option>
          <Select.Option value="optionxd2">Carrera</Select.Option>
          <Select.Option value="optionxd3">Avenida</Select.Option>
          <Select.Option value="optionxd4">Diagonal</Select.Option>
        </Select>
        <Input /> Numero #
        <InputNumber /> <p>—</p> <InputNumber />
        </div>
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
      <Form.Item label="Enrique">
        <Select>
          <Select.Option value="optionxd1">Segoviano</Select.Option>
        </Select>
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
