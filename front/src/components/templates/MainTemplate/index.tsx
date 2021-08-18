import React from 'react';
import Header from '../../base/Header';

export type MainTemplate = {
  /** 안의 내용 */
  children: React.ReactNode;
};

const MainTemplate = ({ children }: MainTemplate) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};

export default MainTemplate;
