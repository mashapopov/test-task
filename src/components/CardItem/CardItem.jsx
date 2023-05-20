import Logo from '../../images/Logo.png';
import background from '../../images/background.png';
import {
  Item,
  LogoImage,
  BackgroundImage,
  Div,
  Avatar,
  AvatarImage,
  Button,
  Info,
  P,
} from './CardItem.styled';
export const CardItem = ({
  id,
  avatar,
  followers,
  following,
  tweets,
  user,
  onClick,
}) => {
  return (
    <Item>
      <LogoImage src={Logo} alt="logo" loading="lazy" />
      <BackgroundImage src={background} alt="Background" loading="lazy" />
      <Div>
        <Avatar>
          <AvatarImage
            src={avatar}
            alt={user}
            width={62}
            height={62}
            loading="lazy"
          />
        </Avatar>
      </Div>
      <Info>
        <P>{tweets} TWEETS</P>
        <P>{followers.toLocaleString('en-US')} FOLLOWERS</P>
      </Info>
      <Button
        type="button"
        value={following}
        onClick={() => onClick(id, following)}
      >
        {following ? 'Follow' : 'Following'}
      </Button>
    </Item>
  );
};
