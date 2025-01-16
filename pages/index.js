const WhoWeAre = () => (
  <section id="quem-somos" style={styles.section}>
    <div style={styles.whoWeAreRow}>
      {/* Card da Foto */}
      <div style={styles.card}>
        <img src="/Yuddi.jpeg" alt="Minha Foto" style={styles.profileImage} />
      </div>

      {/* Card do Texto */}
      <div style={styles.card}>
        <h1 style={styles.title}>Quem Somos</h1>
        <p style={styles.text}>
          A Teruya Consultoria é especializada em soluções de Business Intelligence, ETL, Relatórios e Automação.
          Nosso objetivo é transformar dados em resultados para o seu negócio.
        </p>
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <div style={styles.body}>
      {/* Cabeçalho */}
      <Header />

      {/* Seção Quem Somos */}
      <WhoWeAre />

      {/* Seção Serviços */}
      <Services />

      {/* Seção Clientes */}
      <Clients />

      {/* Seção Contato */}
      <Contact />

      {/* Rodapé */}
      <Footer />
    </div>
  );
}

// Estilos
const styles = {
  body: {
    backgroundColor: '#f7fbff',
    color: '#333',
    margin: 0,
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#003366',
    color: 'white',
    padding: '10px 20px',
  },
  section: {
    padding: '50px 20px',
    marginBottom: '20px',
    backgroundColor: '#e0e0e0', // Fundo cinza claro
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  whoWeAreRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap', // Torna responsivo
    gap: '20px',
  },
  card: {
    flex: '1',
    backgroundColor: '#ffffff', // Fundo branco para os cards internos
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  profileImage: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  title: {
    fontSize: '2em',
    marginBottom: '10px',
  },
  text: {
    fontSize: '1em',
    color: '#555',
  },
};
