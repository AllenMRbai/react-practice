import React from 'react';

export const formHandler = (value: any, children: any) => {
  console.log('看下formHandler', value, children);
  const FormitemList = getFormItemChild(children);
  React.Children.map(FormitemList, (child, idx) => {
    const { props } = child;
    let currentValue = value[props.name],
      key = props.name;
    if (currentValue === undefined) {
      return false;
    }
    const { formatter, attach } = props;
    if (formatter) {
      value[key] = formatter(currentValue);
    }

    if (attach) {
      delete value[key];
      value = Object.assign(value, attach(currentValue));
    }
  });

  return value;
};

const isLeaf = (node: any) => {
  return !node.props || !node.props.children;
};
const isFormItem = (node: any) => {
  return node.type && node.type.displayName === 'AdvancedFormItem'; //简单判断
};

export const getFormItemChild = (node: any[] | any): any[] | any => {
  let result: any = [];
  if (Array.isArray(node)) {
    for (let i = 0; i < node.length; i++) {
      const item = node[i];
      if (item === undefined) continue;
      result = result.concat(getFormItemChild(item));
    }
  } else {
    if (isFormItem(node)) {
      result.push(node);
    }
    if (isLeaf(node)) {
      return result;
      //过滤children 不是react-element的情况
    } else if (typeof node.props.children === 'object') {
      result = result.concat(getFormItemChild(node.props.children));
    }
  }
  return result;
};

export const formResovler = (data: any, children: any) => {
  if (data === undefined) return data;
  const FormitemList = getFormItemChild(children);
  for (let i = 0; i < FormitemList.length; i++) {
    const child = FormitemList[i];
    const { props } = child;
    const { name, resolver } = props;
    if (resolver) {
      const newValue = resolver(data[name], data);
      data[name] = newValue;
    }
  }
  return data;
};
