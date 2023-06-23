import styled from "styled-components";

const StyledHero = styled.div`
margin: 5rem auto;
margin: 1rem;
margin-bottom: 2rem;

.hero_left{
  margin-left: 1rem;
}
section{
  display: flex;
  flex-direction: column;
  text-align: center;
}

h2{
  color: #4361ee;
  margin-bottom: 1rem;
  font-size: 2.44rem;
}

h3{
  color: #b5179e;
  margin-bottom: 1rem;
  font-size: 1.60rem;
}

p{
  color: #64748b;
  margin-bottom: 1rem;
}

img{
  max-width: 100%;
  height: auto;
  border-radius: 25px;
}

@media (min-width: 992px){
  max-width: 1200px;
  margin: 3rem auto;
  margin-bottom: 1rem;

  .hero_left{
    flex-basis: 45%;
  }

  .hero_right{
    flex-basis: 35%;
  }

  section{
    margin: 5rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }

}
`;
export default StyledHero;