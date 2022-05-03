import styles from './index.less';
import { Form, Select, Button, Card } from 'antd';
import TreeForm from './TreeForm';

const { Item } = Form;

export default function IndexPage() {
  const [form] = Form.useForm();

  const handleOk = () => {
    const values = form.getFieldsValue();
    console.log('values 为==', values);
  };

  return (
    <div style={{ padding: 24 }}>
      <Card title="表单测试">
        <Form form={form}>
          <Item name="fruit" label="水果">
            <Select
              mode="multiple"
              labelInValue
              options={[
                { value: 'apple', label: '苹果' },
                { value: 'banana', label: '香蕉' },
                { value: 'orange', label: '橘子' },
              ]}
            ></Select>
          </Item>
          <Item>
            <Button onClick={handleOk}>确定</Button>
          </Item>
        </Form>
      </Card>
      <Card title="SVG测试" style={{ marginTop: 24 }}>
        <svg
          width={300}
          height={300}
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <path
            d="M150 10 L75 180 M150 10 L225 180"
            strokeWidth={3}
            strokeLinejoin="round"
            stroke="#6495ed"
            fill="none"
          />
        </svg>
      </Card>
      <Card title="SVG测试" style={{ marginTop: 24 }}>
        <TreeForm></TreeForm>
      </Card>
    </div>
  );
}
