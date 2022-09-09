import styled from "styled-components";

export const containerHeader=styled.header`
display: flex;
justify-content:space-between;
width: 100%;
padding-left: 20px;
padding-right: 20px;
margin-top: 20px;



.title-app{
    font-size: 30px;
    color: #2b1e45;
}


.github {
    background-color: #aaa;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    background-color: #2b1e45;
    box-shadow: 0 0 10px  #2b1e45 ;
    a{
        display: flex;
        align-items: center;
    }
    img{
        width: 50px;
        height: 50px;
    }
}
`