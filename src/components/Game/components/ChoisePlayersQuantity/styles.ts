import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5rem;
  align-items: center;
  padding: 2rem;
`

export const Text = styled.h1`
  font-weight: 700;
  font-size: 2.6rem;
  text-align: center;
  color: #fff;
  line-height: 3rem;

  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);
`

export const ChoiseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;

  span {
    color: #fff;
    font-weight: 500;
    line-height: 1.8rem;
    text-align: center;
    font-size: 1.5rem;

    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const Button = styled.button`
  all: unset;
  background-color: #fff;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-weight: 700;
  font-size: 1.5rem;
  text-align: center;
  color: #18aded;

  padding: 10px;

  box-shadow: 4px 4px 14px rgba(0, 0, 0, 0.15);

  &:hover {
    background-color: #ddd;
  }
`
