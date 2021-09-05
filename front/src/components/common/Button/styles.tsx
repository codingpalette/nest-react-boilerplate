import styled from 'styled-components';
import tw from 'twin.macro';

export const ButtonBox = styled.button<{
  color: string;
  loadingActive: boolean | undefined;
  width: string | undefined;
  disabled: boolean | undefined;
}>`
  width: ${(props) => props.width};
  ${(props) => props.loadingActive && tw`cursor-default pointer-events-none opacity-75`};
  color: #fff;
  ${(props) =>
    // eslint-disable-next-line no-nested-ternary
    props.color === 'primary'
      ? tw`bg-indigo-500`
      : // eslint-disable-next-line no-nested-ternary
      props.color === 'secondary'
      ? tw`bg-gray-500`
      : props.color === 'success'
      ? tw`bg-green-500`
      : tw`bg-red-500`};
  ${(props) => props.disabled && tw`cursor-default pointer-events-none opacity-75`}
`;
