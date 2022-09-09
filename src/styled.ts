import styled from "styled-components"


export const AppContainer=styled.div`
min-height: 100vh;
width: 100vw;
background-color: #08071f;
display: flex;
flex-direction:column;
color:white;
p{
    margin-top: 20px;
}


@media screen and (max-width:980px){
height:100%;
padding:20px;
width: 100%;
padding-bottom: 100px;


}
`


export const ContainerApplication=styled.div`
margin-top: 70px;
display: flex;
justify-content: center;
align-items: center;


`


export const AppCalculador=styled.div`
width: 600px;
background-color: #2b1e45;
display: flex;
flex-direction: column;
padding: 15px;
box-shadow: 0 0 10px  #2b1e45;
border-radius: 15px;


@media screen and (max-width:980px){
height:100%;
padding:20px;
width: 100%;
padding-bottom: 100px;


}

`
export const containerInputs=styled.div`
display: flex;
flex-direction: column;

`







export const containerButtons=styled.div`
     margin-top:20px;
    display: flex;
    justify-content: center;
    align-items: center;


button{

    padding: 20px 10px;
    width: 95%;
    align-self: center;
    border-radius: 10px;
    border: none;
    background-color: rgb(60, 153, 60);
    color: white;
    font-size: 18px;
}
button:hover{
    background-color: rgb(36, 188, 36);
    cursor: pointer;
}
.btn-reset{
    flex: 1;
    margin-left: 10px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
   height: 70px;
   width: 70px;
   padding: 25px;
   border-radius: 10px;
  
}

.btn-reset:hover{
cursor: pointer;
background-color: rgb(212, 215, 212);
}

`


export const ContainerData=styled.div`
margin-top: 18px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

div{
margin-top: 13px;
font-size: 18px;
}

`