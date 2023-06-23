import styled from "styled-components";

const StyledMovie = styled.div `
margin-bottom: 1rem;

img{
  border-radius: 20px;
  max-width: 100%;
  margin-bottom: 1rem;
}

title {
  color: #4361ee;
  margin-bottom: 1rem;
  font-size: 1.95rem;
}

p {
  color: #64748b;
}

@media (min-width: 768px) {
  flex-basis: 50%;
}

@media (min-width: 992px) {
  padding: 1rem;
  flex-basis: 20%;
}
`;

export default StyledMovie;