import { styled } from "styled-components";
import Card from "./components/Card";
import { fakeTestimonials } from "./reviewData";

const Container = styled.div`
  max-width: 1200px;
  margin: 20px auto;
`;

const HeadingOne = styled.h2`
  color: ${({ theme }) => theme.colors.greenish};
  text-align: center;
`;
const HeadingTwo = styled.h1`
  margin: 8px 5px;
  text-align: center;
`;

const Line = styled.span`
  width: 50px;
  height: 5px;
  background-color: ${({ theme }) => theme.colors.greenish};
  text-align: center;
  display: block;
  margin: 0 auto;
`;

const CardList = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 400px));
  justify-content: center;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, minmax(0, 400px));
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, minmax(0, 400px));
  }
`;

const App = () => {
  return (
    <Container>
      <HeadingOne>Testimonials</HeadingOne>
      <HeadingTwo>What Our Customers Say</HeadingTwo>
      <Line />
      <CardList>
        { fakeTestimonials.map((item,i)=> ( <Card item={item} key={i}/>))
        }
      </CardList>
    </Container>
  );
};

export default App;
