const WhoWeAre = () => (
  <section id="quem-somos" style={styles.section}>
    <div style={styles.whoWeAreContainer}>
      {/* Foto */}
      <div style={styles.imageContainer}>
        <img src="/Yuddi.jpeg" alt="Minha Foto" style={styles.profileImage} />
      </div>

      {/* Texto */}
      <div style={styles.textContainer}>
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
    backgroundColor: '#e0e0e0', // Cinza claro
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  whoWeAreContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: '20px',
  },
  imageContainer: {
    flex: 1,
    textAlign: 'center',
  },
  profileImage: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  textContainer: {
    flex: 1,
    textAlign: 'left',
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
