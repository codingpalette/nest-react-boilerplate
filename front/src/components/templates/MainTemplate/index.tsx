import React from 'react';
import Header from '../../base/Header';

export type MainTemplateProps = {
  /** 안의 내용 */
  children: React.ReactNode;
};

const MainTemplate = ({ children }: MainTemplateProps) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};

export default MainTemplate;
