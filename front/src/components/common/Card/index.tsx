import React from 'react';
import { CardContainer } from './styles';

export type CardProps = {
  /** 안의 내용 */
  children: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
  return (
    <>
      <CardContainer className="flex flex-col shadow rounded p-6 bg-white w-full">{children}</CardContainer>
    </>
  );
};

export default React.memo(Card);
