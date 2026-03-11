import CarouselHome from '../components/Carousel';
import Card from '../components/Card';

function Home() {
  return (
    <div className="container">
      <CarouselHome />
      <h2 style={{ textAlign: 'center', margin: '30px 0', color: '#005a3b' }}>Serviços e Destaques</h2>
      <div className="grid">
        <Card titulo="Sócio Futebol" texto="Seja sócio" imagem="https://picsum.photos/200?13" />
        <Card titulo="Ingressos" texto="Compre aqui" imagem="https://picsum.photos/200?14" />
        <Card titulo="FluTV" texto="Vídeos exclusivos" imagem="https://picsum.photos/200?15" />
        <Card titulo="Museu" texto="Nossa história" imagem="https://picsum.photos/200?16" />
        <Card titulo="Esportes" texto="Olímpicos" imagem="https://picsum.photos/200?17" />
        <Card titulo="Xerém" texto="Base Forte" imagem="https://picsum.photos/200?18" />
        <Card titulo="Feminino" texto="Guerreiras" imagem="https://picsum.photos/200?19" />
        <Card titulo="Laranjeiras" texto="Nossa casa" imagem="https://picsum.photos/200?20" />
        <Card titulo="Loja" texto="Produtos oficiais" imagem="https://picsum.photos/200?21" />
        <Card titulo="Ouvidoria" texto="Fale conosco" imagem="https://picsum.photos/200?22" />
        <Card titulo="Transparência" texto="Balanços" imagem="https://picsum.photos/200?23" />
        <Card titulo="Conselho" texto="Deliberativo" imagem="https://picsum.photos/200?24" />
      </div>
    </div>
  );
}

export default Home;
