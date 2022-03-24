import styled from 'styled-components'

export const BgImageContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  height: 50vh;
  width: 100%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding-left: 30px;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 40px;
  font-weight: 500;
  margin: 5px;
`

export const Text = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: normal;
  margin: 5px;
`

export const BgContainer = styled.div`
  background-color: #152850;
  width: 100%;
  padding: 20px;
  min-height: 50vh;
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 400px;
  background-color: transparent;
  border: 2px solid #cbd5e1;
  border-radius: 5px;
`
export const Input = styled.input`
  height: 45px;
  width: 80%;
  border: 0px;
  color: #cbd5e1;
  font-size: 24px;
  padding-left: 10px;
  background-color: transparent;
  outline: none;
`
export const Icon = styled.button`
  background-color: transparent;
  color: #ffffff;
  height: 30px;
  width: 30px;
  margin: 2px;
  outline: none;
  border: 0px;
  cursor: pointer;
`
export const SongListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  margin: 10px;
  max-height: 60vh;
  overflow-y: scroll;
`
export const NoSongsFound = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 40px;
  font-weight: normal;
  margin: 5px;
`
