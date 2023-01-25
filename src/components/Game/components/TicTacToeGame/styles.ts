import styled from 'styled-components'

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.125rem;
  align-items: center;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
`

export const PlayersTurn = styled.span`
  color: #fff;
  font-size: 2.25rem;
  align-items: center;
  font-weight: 700;

  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);
`

export const GameContent = styled.div`
  padding: 2rem;
  background-color: #fff;
  border-radius: 20px;
`

export const GameArea = styled.table`
  width: 17rem;
  table-layout: fixed;
  border-collapse: collapse;
  tbody {
    tr:nth-child(1) {
      td:nth-child(1) {
        border-bottom: 4px solid #ddd;
        border-right: 4px solid #ddd;
      }
      td:nth-child(2) {
        border-bottom: 4px solid #ddd;
        border-left: 4px solid #ddd;
        border-right: 4px solid #ddd;
      }
      td:nth-child(3) {
        border-bottom: 4px solid #ddd;
        border-left: 4px solid #ddd;
      }
    }
    tr:nth-child(2) {
      td:nth-child(1) {
        border-bottom: 4px solid #ddd;
        border-top: 4px solid #ddd;
        border-right: 4px solid #ddd;
      }
      td:nth-child(2) {
        border-bottom: 4px solid #ddd;
        border-right: 4px solid #ddd;
        border-top: 4px solid #ddd;
        border-left: 4px solid #ddd;
      }
      td:nth-child(3) {
        border-bottom: 4px solid #ddd;
        border-top: 4px solid #ddd;
        border-left: 4px solid #ddd;
      }
    }
    tr:nth-child(3) {
      td:nth-child(1) {
        border-top: 4px solid #ddd;
        border-right: 4px solid #ddd;
      }
      td:nth-child(2) {
        border-top: 4px solid #ddd;
        border-right: 4px solid #ddd;
        border-left: 4px solid #ddd;
      }
      td:nth-child(3) {
        border-top: 4px solid #ddd;
        border-left: 4px solid #ddd;
      }
    }
  }
`

export const GameButtonItem = styled.td`
  width: 5.8rem;
  height: 5.8rem;
`
