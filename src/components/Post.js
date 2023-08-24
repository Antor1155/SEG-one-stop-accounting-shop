import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import { keyframes, styled } from 'styled-components'

const widthChange = keyframes`
    from {
        width: 50%;
    }

    to{
        width: 100%;
    }

`

const StyledDiv = styled.div`
    font-size: 2rem;
    background-color: red;
    animation: ${widthChange} 2s alternate infinite;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export default function Post() {
    let receivedData = useOutletContext()
    let params = useParams()

  return (
    <StyledDiv>this is the post page
        <p>{receivedData}</p>
        <p>And the params we got is {params.postId}</p>
    </StyledDiv>
  )
}
