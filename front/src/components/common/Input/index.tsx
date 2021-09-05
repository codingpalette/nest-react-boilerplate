import React from 'react';
import { InputContainer } from './styles';

export type InputProps = {
  /* value 값 */
  value: string;
  /* value change 이벤트 */
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  /** 인풋의 타입을 설정합니다. */
  type?: 'text' | 'password' | 'number';
  /* 최대 글자수 설정 */
  maxLength?: number;
  /* placeholder 설정 */
  placeholder?: string;
  /* id 설정 */
  id?: string;
  /* name 설정 */
  name?: string;
  /** 클래스 네임 설정 */
  className?: string;
};

const Input = ({ value, onChange, type, maxLength, placeholder, id, name, className }: InputProps) => {
  return (
    <>
      <InputContainer
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        maxLength={maxLength}
        // autoComplete="off"
        className={`${
          className || ''
        } px-3 py-2 block w-full shadow-sm sm:text-sm border-solid border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none`}
      />
    </>
  );
};

Input.defaultProps = {
  type: 'text',
};

export default React.memo(Input);
