import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderBox } from './styles';
import Logo from '../../../assets/images/logo.svg';
import Button from '../../common/Button';

const Header = () => {
  const aa = () => {
    const cc = 1;
    if (cc === 1) {
      console.log('11');
    } else {
      console.log('22');
    }
  };
  return (
    <>
      <HeaderBox className="w-full border-solid border-b border-gray-100">
        <div className="max-w-screen-xl mx-auto w-full flex items-center">
          <div className="logo_box">
            <Link to="/" className="flex items-center justify-center w-full h-full">
              <img src={Logo} alt="로고" />
            </Link>
          </div>
          <div className="ml-auto btn_box">
            <Link to="/login">
              <Button>Login</Button>
            </Link>
          </div>
        </div>
      </HeaderBox>
    </>
  );
};

export default Header;
