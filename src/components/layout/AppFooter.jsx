import * as React from 'react';
import { DefaultFooter } from '@ant-design/pro-layout';

const AppFooter = (
  <DefaultFooter
    copyright="2020 NIBSS"
    links={[{
      key: 'NIBSS',
      title: 'NIBSS',
      href: 'https://nibss-plc.com.ng',
      blankTarget: true,
    }]}
  />
);

export default AppFooter;
