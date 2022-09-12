import { useState,ChangeEvent } from 'react'
import * as S from './styled'
import { Header } from '../src/Components/Header'
import { Input } from './Components/Input'
const iconReturn=<img src="https://img.icons8.com/color/48/000000/return.png"/>




const App=()=>{

  const [areaGrount,setAreaGrount]=useState<string | number | any >('00')
  const [priceGrount,setPriceGrount]=useState<string | number | any>('00')


  const [weightGround,setWeightGround]=useState<string | number | any >('')
  const [squareMeterGrount,setSquareMeterGrount]=useState<string | number | any>('')
  const [lengthGrount,setLengthGrount]=useState<string | number | any>('')


const ActionsInputs={
  changeWeight:(e:ChangeEvent<HTMLInputElement>)=>{
    setWeightGround(e.target.value)
  },
  changeSquareMeter:(e:ChangeEvent<HTMLInputElement>)=>{
    setSquareMeterGrount(e.target.value)

  },
  changeLength:(e:ChangeEvent<HTMLInputElement>)=>{
    setLengthGrount(e.target.value)
  }

  }



const ActionsButtons={
  calculate:()=>{


      if(weightGround && squareMeterGrount && lengthGrount){
      
         let area= parseInt(weightGround) * parseInt(squareMeterGrount)
         let price=weightGround * lengthGrount * parseInt(squareMeterGrount)
        
        
        setAreaGrount(area.toFixed(2))
        setPriceGrount(price.toFixed(2))
   
      }else{
        alert('Todos os campos devem ser preenchidos')
      }

  },

  reset:()=>{
    setAreaGrount('00')
    setPriceGrount('00')
    setWeightGround('')
    setSquareMeterGrount('')
    setLengthGrount('')

  }


  }


  return <>
  <S.AppContainer>
    <Header />
   <S.ContainerApplication>
    <S.AppCalculador>
          <p>Calcule informações de Aréa e Preço de um Terreno :</p>
          <S.containerInputs>
              <Input placeholder='Largura do Terreno '    stateValue={weightGround} funcValue={ActionsInputs.changeWeight} />
              <Input placeholder='Comprimento do Terreno '    stateValue={squareMeterGrount} funcValue={ActionsInputs.changeSquareMeter} />
              <Input placeholder='Valor do Metro Quadrado '    stateValue={lengthGrount} funcValue={ActionsInputs.changeLength}  />
              </S.containerInputs>
          <S.containerButtons>
                <button onClick={ActionsButtons.calculate}>calcular</button>
                <div className='btn-reset' title='limpar tudo' onClick={ActionsButtons.reset}>{iconReturn}</div>
          </S.containerButtons>
          <S.ContainerData>
            <div> Aréa do Terreno : {areaGrount}</div>
            <div> Preço do Terreno : {priceGrount}</div>
          </S.ContainerData>

    </S.AppCalculador>
   </S.ContainerApplication>
  </S.AppContainer>
 
  </>




}

export default App