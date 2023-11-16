export const BtnTenis = ({id, funcao, imagem}) => {
    return(
        <div className="btnTenis centralizar">
            <button id={id} onClick={funcao}></button>
            <img src={imagem} alt="" />
        </div>
    )
}