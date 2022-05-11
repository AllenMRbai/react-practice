import React, { FC, Fragment } from 'react';
import { Form } from 'antd';
import { AdvFormItemProps } from './inteface';

const FormItem: FC<AdvFormItemProps> = props => {
  const itemProps: AdvFormItemProps = {
    ...props,
    attach: undefined,
    formatter: undefined,
    resolver: undefined,
    render: undefined,
  };
  return (
    <Fragment>
      <Form.Item {...itemProps}>{props.children}</Form.Item>
    </Fragment>
  );
};
FormItem.displayName = 'AdvancedFormItem';
export default FormItem;
