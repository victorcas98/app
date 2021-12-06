import styled from 'styled-components'

export const Container = styled.div`

`
export const UploadBtn = styled.button`
background-color: green;
color: white;
border-style: none;
border-radius: 0.2rem;
margin: 0.5rem 0;
padding: 0.4rem;
cursor: pointer;
`
export const PdfContainer = styled.div`
    width: 100%;
    height: 800px;
    background-color: #e4e4e4;
    overflow-y: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Error = styled.div`
    width: 100%;
    color: red;
    font-size:14px;
    font-weight: 600;
`