import styled from "styled-components";

const StyledNavbar = styled.div`
  background-color: #4361ee;
  padding: 1rem;
  color: #fff;

  nav{
  display: flex;
  flex-direction: column;
  }

  h1{
    font-size: 2rem;
  margin-bottom: 1rem;
  }

  ul{
  list-style: none;
  display: flex;
  flex-direction: column;
  }

  li{
    margin-bottom: 1rem;
  }

  a{
    text-decoration: none;
    color: #fff;
  }

  @media (min-width: 768px){
    nav{
        display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    }

    h1{
        margin-bottom: 1rem;
    }

    ul{
        display: flex;
     flex-direction: row;
    }

    li{
        margin: 0 1rem;
    }

    a{
    text-decoration: none;
    color: #fff;
  }
  }
`;


export default StyledNavbar;