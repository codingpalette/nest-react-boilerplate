import React from 'react';
import { ButtonBox } from './styles';

export type ButtonProps = {
  /** 버튼 안의 내용 */
  children: React.ReactNode;
  /** 클릭했을 때 호출할 함수 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  /** 버튼 타입 */
  color: 'primary' | 'secondary' | 'success' | 'danger';
  /** 로딩 상태 */
  loading?: boolean | undefined;
  /** 클래스 네임 설정 */
  className?: string;
  /** 버튼의 타입을 설정합니다. */
  type?: 'button' | 'submit' | 'reset';
  /** 버튼의 너비를 임의로 설정합니다. */
  width?: string | undefined;
  /** 버튼을 비활성화 시킵니다. */
  disabled?: boolean | undefined;
};

const Button = ({ children, onClick, loading, color, className, type, width, disabled }: ButtonProps) => {
  return (
    <ButtonBox
      className={`${
        className || ''
      } rounded-lg font-medium tracking-wider transform py-2 px-4 text-sm hover:bg-opacity-90 transition duration-200 ease-in-out flex focus:outline-none`}
      onClick={onClick}
      type={type}
      color={color}
      loadingActive={loading}
      width={width}
      disabled={disabled}
    >
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </ButtonBox>
  );
};

Button.defaultProps = {
  color: 'primary',
  type: 'button',
  width: 'auto',
};

export default Button;
