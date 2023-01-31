import styled from 'styled-components'

export const Heading = styled.h1`
  color: #35469c;
`

export const AppContainer = styled.div`
  border: 2px solid #000;
  height: 600px;
  width: 50%;
  padding: 20px;
  display: flex;
`

export const LabelText = styled.label`
  color: #5a7184;
  font-weight: 500;
  font-family: 'Roboto';
`

export const InputElement = styled.input`
  padding: 10px;
  width: 60%;
  margin-top: 10px;
  margin-bottom: 10px;
`
export const InputAndLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const SelectElement = styled.select`
  width: 60%;
  margin-top: 10px;
  margin-bottom: 10px;
`
export const GenerateButton = styled.button`
  padding: 10px;
  margin-right: 20px;
  width: 100px;
  font-size: 15px;
  color: #ffffff;
  border-radius: 4px;
  border: 2px solid #0070c1;
  background-color: #0070c1;
`
export const MemeContainer = styled.div`
  width: 65%;
  margin-left: 15px;
  background-image: url(${props => props.bgImg});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const MemeText = styled.p`
  color: #ffffff;
  font-size: ${props => props.fontsSizeAttribute}px;
`
