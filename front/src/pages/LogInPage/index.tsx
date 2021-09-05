import React from 'react';
import { Link } from 'react-router-dom';
import RegisterTemplate from '../../components/templates/RegisterTemplate';
import Input from '../../components/common/Input';
import useInput from '../../hooks/useInput';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';

const LogInPage = () => {
  const [email, onChangeEmail, setEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  return (
    <>
      <RegisterTemplate>
        <Card>
          <h2 className="text-center text-3xl mb-4">로그인</h2>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              이메일
            </label>
            <Input value={email} onChange={onChangeEmail} id="email" placeholder="이메일을 입력해 주세요." />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              비밀번호
            </label>
            <Input
              value={password}
              onChange={onChangePassword}
              id="password"
              type="password"
              placeholder="비밀번호를 입력해 주세요."
            />
          </div>
          <div>
            <Button className="ml-auto">로그인</Button>
          </div>
          <div className="text-center mt-4">
            <Link to="/login" className="text-blue-500 text-xs">
              회원가입 하러가기
            </Link>
          </div>
        </Card>
      </RegisterTemplate>
    </>
  );
};

export default LogInPage;
