import styled from "styled-components";

export const containerHeader=styled.header`
display: flex;
justify-content:space-between;
width: 100%;
padding-left: 20px;
padding-right: 20px;
margin-top: 20px;
@media screen and (max-width:950px) {
       width: 100%;
       padding-left: 10px;
       padding-right: 10px;
       flex-direction: column;
       align-items: center;
      
      
       .title-app{
        margin-bottom: 15px;
       }
    }


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

  &:hover{
    background-color:#240b38;
        a{
           
            color: green;
        }
        
  }
}
`