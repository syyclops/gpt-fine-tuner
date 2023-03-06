import React from 'react'
import styled from 'styled-components'

function InputField() {
  const [input, setInput] = React.useState('')
  const textareaRef = React.useRef(null)

  React.useEffect(() => {
    textareaRef.current.style.height = '24px'
    textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px'
  }, [input])

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && event.shiftKey) {
      event.preventDefault()
      const caretPosition = event.target.selectionStart
      const textBeforeCaret = input.substring(0, caretPosition)
      const textAfterCaret = input.substring(caretPosition)
      setInput(textBeforeCaret + '\n' + textAfterCaret)
    }
  }

  return (
    <Container>
      <InputContainer>
        <InputTextArea
          ref={textareaRef}
          value={input}
          autoFocus={true}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <SendBtnContainer>
          <img
            src="/emailSend30.png"
            style={{
              height: '100%',
              width: '100%',
              objectFit: 'contain',
            }}
          />
        </SendBtnContainer>
      </InputContainer>
    </Container>
  )
}

export default InputField

const Container = styled.div`
  height: 172px;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: linear-gradient(
    180deg,
    rgba(53, 55, 64, 0),
    #353740 58.85%
  );
`

const InputContainer = styled.div`
  --tw-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  --tw-shadow-colored: 0 0 15px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 transparent),
    var(--tw-ring-shadow, 0 0 transparent), var(--tw-shadow);
  background-color: #40414f;
  /* width: 80%; */
  min-height: 42px;
  height: auto;
  border-color: rgba(32, 33, 35, 0.5);
  border-radius: 0.375rem;

  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;

  position: absolute;
  bottom: 20px;
  left: 10px;
  right: 10px;

  @media screen and (min-width: 768px) {
    left: 60px;
    right: 60px;
    bottom: 40px;
    min-height: 50px;
  }
`

const InputTextArea = styled.textarea`
  max-height: 200px;
  background: transparent;
  margin-left: 8px;
  border: none;
  outline: none;
  font-size: inherit;
  font-family: 'Roboto', sans-serif;
  font-weight: 200 !important;
  color: inherit;
  resize: none;
  width: 100%;
  color: white;
  font-weight: 600;
  line-height: 1.5rem;
  position: relative;
  margin-right: 35px;
`

const SendBtnContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 20px;
  width: 20px;
  margin-right: 10px;
  margin-bottom: 8px;
  padding: 6px;
  transition: all 250ms;

  &:hover {
    cursor: pointer;
    background: #212122;
    border-radius: 4px;
  }
`
