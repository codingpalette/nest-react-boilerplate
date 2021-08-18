import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderBox } from './styles';
import Logo from '../../../assets/images/logo.svg';
import Button from '../../common/Button';

const Header = () => {
  return (
    <>
      <HeaderBox className="w-full border-solid border-b border-gray-100">
        <div className="max-w-screen-xl mx-auto w-full flex items-center">
          <div className="logo_box">
            <Link to="/" className="flex items-center justify-center w-full h-full">
              <img src={Logo} alt="로고" />
            </Link>
          </div>
          <div className="btn_box">
            <Link to="/">
              <Button>로그인</Button>
            </Link>
          </div>
        </div>
      </HeaderBox>
    </>
  );
};

export default Header;
