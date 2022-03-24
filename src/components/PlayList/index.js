import {AiOutlineDelete} from 'react-icons/ai'

import {
  ListItem,
  ItemContainer,
  TextContainer,
  Image,
  SongHeading,
  SongType,
  SongTime,
  DeleteIcon,
} from './styledComponents'

const PlayList = props => {
  const {songListDetails, onClickDelete} = props
  const {id, imageUrl, name, genre, duration} = songListDetails

  const onClickDeleteIcon = () => {
    onClickDelete(id)
  }
  return (
    <ListItem>
      <ItemContainer>
        <Image src={imageUrl} alt="track" />
        <TextContainer>
          <SongHeading>{name}</SongHeading>
          <SongType>{genre}</SongType>
        </TextContainer>
      </ItemContainer>
      <ItemContainer>
        <SongTime>{duration}</SongTime>
        <DeleteIcon
          type="button"
          data-testid="delete"
          onClick={onClickDeleteIcon}
        >
          <AiOutlineDelete size={24} />
        </DeleteIcon>
      </ItemContainer>
    </ListItem>
  )
}

export default PlayList
