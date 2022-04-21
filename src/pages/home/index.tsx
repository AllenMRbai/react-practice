import styles from './index.less';
import { Form, Select, Button } from 'antd';

const { Item } = Form;

export default function IndexPage() {
  const [form] = Form.useForm();

  const handleOk = () => {
    const values = form.getFieldsValue();
    console.log('values 为==', values);
  };

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
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
    </div>
  );
}
