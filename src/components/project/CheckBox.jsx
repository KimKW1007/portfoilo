import styled from "styled-components"

const CheckContainer = styled.div`
  display:flex;
  justify-content:center;
`
const CheckInnerBox = styled.div`
  width:250px;
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  gap:20px 30px;
  input{
    position:absolute;
    left:-999999%;
  }
  label{
    font-size:18px;
    cursor:pointer;
  }
`

export default function CheckBox({children}) {
  return (
    <CheckContainer>
      <CheckInnerBox>
        {children}
      </CheckInnerBox>
    </CheckContainer>
  )
}
