import * as S from './style'


export const Header=()=>{
    const iconGit=<img src="https://img.icons8.com/ios-glyphs/90/000000/github.png"/>

    return <>
    <S.containerHeader>
        <div className="title-app">
            Calculator Grount
        </div>
        <div className="github">
          <a href="https://github.com/diegodevelopertec">  Desenvolvido por Diego Morais {iconGit}</a>
        </div>
    </S.containerHeader>

    </>





}