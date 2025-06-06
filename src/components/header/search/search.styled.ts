import styled from "styled-components";

export const SearchBlock = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
height: 30px;
width: 300px;
input {
  flex-grow: 1;
  padding: 10px;
  border: none;
  outline: none;
  min-width: 0;
  
}
.btn__search {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 16px 20px;
  font-size: 16px;
  line-height: 19px;
  cursor: pointer;
}
.btn__text {
  margin-left: 2px;
}

  
`