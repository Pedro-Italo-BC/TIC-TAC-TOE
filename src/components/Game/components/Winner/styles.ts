import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.125rem;
  align-items: center;

  p {
    font-weight: 700;
    font-size: 2.5rem;
    text-align: center;
    color: #fff;
  }
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
