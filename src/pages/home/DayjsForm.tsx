import React from 'react';
import { Form, DatePicker, Space, Button } from 'antd';
import dayjs from 'dayjs';
import moment from 'moment';

const { Item, List } = Form;

const DayjsForm: React.FC = () => {
  const [form] = Form.useForm();

  const handleFinish = () => {
    const values = form.getFieldsValue();
    console.log('提交的数据', values);
  };

  return (
    <Form
      form={form}
      onFinish={handleFinish}
      initialValues={{ startTime: dayjs('1992-08-07', 'YYYY-MM-DD') }}
    >
      <Item label="起始时间" name="startTime">
        <DatePicker></DatePicker>
      </Item>

      <Item>
        <Button onClick={handleFinish}>提交</Button>
      </Item>
    </Form>
  );
};

export default DayjsForm;
