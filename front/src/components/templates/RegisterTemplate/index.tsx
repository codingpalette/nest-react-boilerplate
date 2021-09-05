import React from 'react';
import { RegisterContainer } from './styles';

export type RegisterTemplateProps = {
  /** 안의 내용 */
  children: React.ReactNode;
};

const RegisterTemplate = ({ children }: RegisterTemplateProps) => {
  return (
    <>
      <RegisterContainer className="w-full h-full flex items-center justify-center bg-gray-100 p-4">
        <div className="register_box w-full">{children}</div>
      </RegisterContainer>
    </>
  );
};

export default RegisterTemplate;
