import Link from 'umi/link';
import { Result, Button } from 'antd';
import { GridContent } from '@ant-design/pro-layout';
import React from 'react';
import { formatMessage } from 'umi-plugin-react/locale';

export default () => (
  <GridContent>
    <img style={{width: '80%'}} src={require("../../../../public/img/bg1.png")} alt=""/>
    <img style={{width: '80%'}} src={require("../../../../public/img/bg2.png")} alt=""/>
  </GridContent>
);
