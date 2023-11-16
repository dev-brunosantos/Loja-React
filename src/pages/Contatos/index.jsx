import { TypeAnimation } from 'react-type-animation'
import { Menu } from '../../components/Menu'

export default function Contatos() {
    const teste = '../../public/tenis-1.png'
    return (
        <section className='contatos telas centralizar' style={{justifyContent: 'center'}}>
            <Menu />
            <h1 style={{fontSize: '10rem'}}>
                <TypeAnimation
                    sequence={[
                        "Bruno Santos", 2000,
                        "Developer", 1000,
                        "Teste", 1000,
                    ]}
                    repeat={Infinity}
                    speed={150}
                    style={{
                        color: 'var(--azul)',
                        fontSize: '10rem',
                        fontWeight: 'bold'
                    }}
                />
            </h1>
        </section>
    )
}