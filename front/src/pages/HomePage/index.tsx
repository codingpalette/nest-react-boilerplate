import React, { useState } from 'react';
import { HomeContainer } from './styles';
import Button from '../../components/common/Button';
import MainTemplate from '../../components/templates/MainTemplate';

const HomePage = () => {
  return (
    <>
      <MainTemplate>
        <div className="">HomePage</div>
        <div className="flex items-center justify-center">
          <Button>Button</Button>
        </div>
      </MainTemplate>
    </>
  );
};

export default HomePage;
