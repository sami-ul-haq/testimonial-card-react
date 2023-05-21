import { styled } from "styled-components";
import QuoteImg from "../assets/quote-icon.png";

const CardContainer = styled.div`
  max-width: 400px;
  text-align: center;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 1px 1px 1px 1px #149e9e80;
  position: relative;
  margin: 20px;
  padding: 125px 50px 30px;
  overflow: hidden;
`;

const QuoteContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.greenish};
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  padding: 30px 50px 50px 30px;
  border-radius: 0 0 114px 0;
`;

const Quote = styled.img`
  width: 40px;
  height: 40px;
`;

const Line1 = styled.span`
  width: 8px;
  height: 100px;
  display: inline-block;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.blackish} 50%,
    ${({ theme }) => theme.colors.greenish} 50%
  );
  position: absolute;
  top: 10%;
  right: 0;
`;

const Line2 = styled(Line1)`
  top: auto;
  right: auto;
  bottom: 10%;
  left: 0;
`;

const Tile = styled.h3`
  color: ${({ theme }) => theme.colors.greenish};
  text-transform: uppercase;
`;

const Description = styled.p`
  padding: 10px 5px;
  color: #b1b3b2;
`;

const ProfilePIc = styled.img`
  border-radius: 50%;
  width: 120px;
  height: 130px;
  object-fit: cover;
  padding: 10px 5px;
`;

const Name = styled.h2`
  text-transform: uppercase;
`;

const Designation = styled.p`
  text-transform: uppercase;
  color: #b1b3b2;
`;

const Card = ({ item }) => {
  const { title, review, profilepic, name, designation } = item;

  return (
    <CardContainer>
      <QuoteContainer>
        <Quote src={QuoteImg} alt="quote-pic" />
      </QuoteContainer>
      <Line1 />
      <Line2 />
      <Tile>{title}</Tile>
      <Description>{review}</Description>
      <ProfilePIc src={profilepic} alt="profile-pic" />
      <Name>{name}</Name>
      <Designation>{designation}</Designation>
    </CardContainer>
  );
};

export default Card;
