import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
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
        flex: "auto",
      }}
      wrapperCol={{
        flex: "auto",
      }}
      layout="horizontal"
      style={
        {
          //minWidth: 600,
        }
      }
    >
      <Form.Item label="Clickea" name="disabled" valuePropName="checked">
        <Checkbox>tE gUstO ioP UwU??</Checkbox>
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
