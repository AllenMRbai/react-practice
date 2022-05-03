import React from 'react';
import { Form, Input, Space, Button } from 'antd';

const { Item, List } = Form;

const TreeForm: React.FC = () => {
  const [form] = Form.useForm();

  const handleFinish = () => {
    const values = form.getFieldsValue();
    console.log('提交的数据', values);
  };

  return (
    <Form form={form} onFinish={handleFinish}>
      <Item label="名称" name="userName">
        <Input></Input>
      </Item>
      <Item label="部门名称" name={['department', 'name']}>
        <Input></Input>
      </Item>
      <Item label="部门级别" name={['department', 'level']}>
        <Input></Input>
      </Item>
      <Item label="部门员工">
        <List name={['department', 'staff']}>
          {(fields, operations) => {
            const list = fields.map((field) => {
              return (
                <Form.Item {...field} name={[field.name, 'staffId']}>
                  <Input />
                </Form.Item>
              );
            });

            return (
              <>
                {list}
                <Space>
                  <Button
                    onClick={() =>
                      operations.add({ staffId: '' }, fields.length)
                    }
                  >
                    加
                  </Button>
                  <Button onClick={() => operations.remove(fields.length - 1)}>
                    减
                  </Button>
                </Space>
              </>
            );
          }}
        </List>
      </Item>
      <Item label="部门会议记录" name={['department', 'conf', 'record', 'hi']}>
        <Input></Input>
      </Item>
      <Item>
        <Button onClick={handleFinish}>提交</Button>
      </Item>
    </Form>
  );
};

export default TreeForm;
