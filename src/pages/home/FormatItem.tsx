// advanced-form
// 对getFieldsValue与setFieldsValue重写的表单
import React from 'react';
import { Button, Form, Input } from 'antd';
import { GlobalForm, GlobalFormItem } from '@/components/advanced-form';
import DebounceSelect from '@/components/DebounceSelect';

const fetchData = async () => {
  return Promise.resolve([
    { value: 'apple', label: '苹果' },
    { value: 'banana', label: '香蕉' },
    { value: 'milk', label: '牛奶' },
    { value: 'cola', label: '可乐' },
    { value: 'car', label: '车' },
    { value: 'pant', label: '裤子' },
  ]);
};

const DayjsForm: React.FC = () => {
  const [form] = Form.useForm();

  const setBack = () => {
    form.setFieldsValue({ shopCar: ['cola', 'milk'] });
  };

  const selectResolver = () => {
    return [
      { value: 'cola', label: '可口可乐' },
      { value: 'milk', label: '真香牛奶' },
    ];
  };

  const selectAttach = (val: any) => {
    return val.map((i: any) => i.value);
  };

  const handleFinish = () => {
    const values = form.getFieldsValue();
    console.log('提交的数据', values);
  };

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <Button onClick={setBack}>回填数据</Button>
      </div>
      <GlobalForm form={form} onFinish={handleFinish}>
        <GlobalFormItem
          resolver={selectResolver}
          attach={selectAttach}
          label="购物车"
          name="shopCar"
        >
          <DebounceSelect
            labelInValue
            allowClear
            mode={'multiple'}
            fetchOptions={fetchData}
          ></DebounceSelect>
        </GlobalFormItem>
        <Form.Item label="还好吧" name="isOk">
          <Input></Input>
        </Form.Item>
        <GlobalFormItem>
          <Button onClick={handleFinish}>提交</Button>
        </GlobalFormItem>
      </GlobalForm>
    </div>
  );
};

export default DayjsForm;
