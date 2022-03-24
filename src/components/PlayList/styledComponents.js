import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
  padding: 10px;
  min-width: 80vw;
`

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 5px;
  padding: 10px;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: 5px;
  padding: 10px;
`

export const Image = styled.img`
  height: 160px;
  width: 240px;
  margin: 5px;
`

export const SongHeading = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 30px;
`

export const SongType = styled.p`
  color: #3b82f6;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: normal;
  margin: 5px;
`

export const SongTime = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  margin: 5px;
`

export const DeleteIcon = styled.button`
  background-color: transparent;
  color: #ffffff;
  height: 40px;
  width: 40px;
  margin: 2px;
  outline: none;
  border: 0px;
  cursor: pointer;
`
