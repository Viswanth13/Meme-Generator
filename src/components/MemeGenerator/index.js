import {Component} from 'react'

import {
  Heading,
  LabelText,
  InputElement,
  InputAndLayoutContainer,
  SelectElement,
  GenerateButton,
  MemeContainer,
  MemeText,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0][0],
    isSubmitted: false,
  }

  onChangeImageUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    this.setState({isSubmitted: true})
  }

  render() {
    const {imageUrl, topText, bottomText, fontSize, isSubmitted} = this.state

    return (
      <>
        <form onSubmit={this.onSubmitForm}>
          <Heading>Meme Generator</Heading>
          <InputAndLayoutContainer>
            <LabelText htmlFor="Image URL">Image URL</LabelText>
            <InputElement
              type="text"
              id="Image URL"
              placeholder="Enter the image URL"
              onChange={this.onChangeImageUrl}
            />
          </InputAndLayoutContainer>

          <InputAndLayoutContainer>
            <LabelText htmlFor="Top Text">Top Text</LabelText>
            <InputElement
              type="text"
              id="Top Text"
              placeholder="Enter the Top Text"
              onChange={this.onChangeTopText}
            />
          </InputAndLayoutContainer>

          <InputAndLayoutContainer>
            <LabelText htmlFor="Bottom Text">Bottom Text</LabelText>
            <InputElement
              type="text"
              id="Bottom Text"
              placeholder="Enter the Bottom Text"
              onChange={this.onChangeBottomText}
            />
          </InputAndLayoutContainer>

          <InputAndLayoutContainer>
            <LabelText htmlFor="Font Size">Font Size</LabelText>
            <SelectElement id="Font Size" onChange={this.onChangeFontSize}>
              {fontSizesOptionsList.map(each => (
                <option key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </SelectElement>

            <GenerateButton type="submit">Generate</GenerateButton>
          </InputAndLayoutContainer>
        </form>
        {isSubmitted && (
          <MemeContainer bgImg={imageUrl} data-testid="meme">
            <MemeText fontsSizeAttribute={fontSize}>{topText}</MemeText>
            <MemeText fontsSizeAttribute={fontSize}>{bottomText}</MemeText>
          </MemeContainer>
        )}
      </>
    )
  }
}

export default MemeGenerator
