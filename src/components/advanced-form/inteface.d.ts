import { FormItemProps } from 'antd/lib/form';

export interface AdvFormItemProps<Values = any> extends FormItemProps {
  attach?: (text: any, record: Values) => any;
  formatter?: (text: any, record: Values) => any;
  resolver?: (text: any, record: Values) => any;
  render?: (text: any, record: Values) => React.ReactNode; //是否需要？
  abnormal?: boolean;
}
