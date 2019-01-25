import React from 'react'

const PaddedLineBreak = (props) => (
  <>
    <br style={{display: 'block', marginBottom: '1.8rem'}}>
      {props.children}
    </br>
  </>
)
export default PaddedLineBreak