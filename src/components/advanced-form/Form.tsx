import React, { FC, useEffect } from 'react';
import { Form } from 'antd';
import { cloneDeep } from 'lodash';
import { formHandler, formResovler } from './utils';
import { FormProps } from 'antd/lib/form';

const Index: FC<FormProps> = props => {
  const antdForm = Form.useForm()[0];
  let form = props.form ? props.form : antdForm;

  const getFormParams = () => {
    const getValues = form.getFieldsValue;
    form.getFieldsValue = () => {
      const params = cloneDeep(getValues.apply(form));
      return formHandler(params, props.children);
    };
  };

  const setFormParams = () => {
    const setValues = form.setFieldsValue;
    form.setFieldsValue = (value: any) => {
      const resolved = cloneDeep(formResovler(value, props.children));
      setValues(resolved);
    };
  };

  const validateForm = async () => {
    const validate = form.validateFields;
    form.validateFields = (): Promise<any> => {
      return new Promise(async (resolve, reject) => {
        try {
          const values = await validate.apply(form);
          resolve(formHandler(values, props.children));
        } catch (error) {
          reject(error);
        }
      });
    };
  };

  useEffect(() => {
    getFormParams();
    setFormParams();
    validateForm();
    console.log('mergedProps:', mergedProps);
  }, [form, props.children]);

  const mergedProps = { ...props, form };
  return (
    <Form
      {...mergedProps}
      onFinish={() => {
        props.onFinish && props.onFinish(form.getFieldsValue());
      }}
    >
      {props.children}
    </Form>
  );
};
export default Index;
