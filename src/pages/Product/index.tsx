import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'

import residentEvil from '../../assets/images/resident.png'

const Product = () => {
  const { id } = useParams()

  return (
    <>
      <Hero />
      <Section title="Sobre o jogo" background="black">
        <p>
          Hogwarts Legacy é um jogo eletrônico de RPG de ação desenvolvido pela
          Avalanche Software e publicado pela Warner Bros. Interactive
          Entertainment sob o selo Portkey Games. O jogo é ambientado no final
          do século XIX do universo de Harry Potter, um século antes dos eventos
          narrados nos livros de J.K. Rowling. O jogador controla um aluno
          matriculado na Escola de Magia e Bruxaria de Hogwarts que aprende a
          manejar uma série de habilidades e objetos mágicos. Com a ajuda de
          colegas e professores, a protagonista embarca em uma jornada para
          desenterrar um antigo segredo que há muito está escondido no mundo
          mágico.
        </p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Plataforma:</b> PlayStation 5 <br />
          <b>Desenvolvedor:</b> Avalanche Software <br />
          <b>Editora:</b> Portkey Games, subsidiária da warner Bros. Interactive
          Entertainment <br />
          <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo
          espanhol, francês, alemão, italiano, português, entre outros. As
          opções e audio e legendas podem ser ajustado nas configurações do
          jogo.
        </p>
      </Section>
      <Gallery name="Jogo teste" defaultCover={residentEvil} />
    </>
  )
}

export default Product
