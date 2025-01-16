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

// Componente Cabeçalho
const Header = () => (
  <header style={styles.header}>
    <div style={styles.logo}>Teruya Consultoria</div>
    <nav style={styles.nav}>
      <a href="#quem-somos" style={styles.link}>Quem Somos</a>
      <a href="#servicos" style={styles.link}>Serviços</a>
      <a href="#clientes" style={styles.link}>Clientes</a>
      <a href="#contato" style={styles.link}>Contato</a>
    </nav>
  </header>
);

// Componente Quem Somos
const WhoWeAre = () => (
  <section id="quem-somos" style={styles.section}>
    <div style={styles.container}>
      {/* Texto */}
      <div style={styles.textContainer}>
        <h1 style={styles.title}>Quem Somos</h1>
        <p style={styles.text}>
          Na <strong>Teruya Consultoria</strong>, nosso propósito é transformar dados em insights estratégicos que impulsionam o sucesso dos nossos clientes. 
          Com mais de 6 anos de experiência, ajudamos empresas a simplificar a tomada de decisões com soluções personalizadas e inovadoras.
        </p>
        <p style={styles.text}>
          O que nos diferencia é a capacidade de integrar e automatizar fluxos de dados complexos, conectando sistemas, planilhas e APIs em um único ambiente eficiente. 
          Oferecemos agilidade, confiabilidade e suporte dedicado para atender às necessidades específicas de cada negócio.
        </p>
      </div>

      {/* Imagem */}
      <div style={styles.imageContainer}>
        <img src="/Yuddi.jpeg" alt="Minha Foto" style={styles.profileImage} />
      </div>
    </div>
  </section>
);


// Componente Serviços
const Services = () => (
  <section id="servicos" style={styles.section}>
    <h1 style={styles.title}>Nossos Serviços</h1>
    <ul style={styles.serviceList}>
      <li style={styles.serviceItem}>
        <span style={styles.checkIcon}>✔</span> Business Intelligence (BI)
      </li>
      <li style={styles.serviceItem}>
        <span style={styles.checkIcon}>✔</span> ETL e integração de dados
      </li>
      <li style={styles.serviceItem}>
        <span style={styles.checkIcon}>✔</span> Relatórios e dashboards personalizados
      </li>
      <li style={styles.serviceItem}>
        <span style={styles.checkIcon}>✔</span> Automação de processos
      </li>
      <li style={styles.serviceItem}>
        <span style={styles.checkIcon}>✔</span> Web scraping e integração com APIs
      </li>
    </ul>
  </section>
);


// Componente Clientes
const Clients = () => (
  <section id="clientes" style={styles.section}>
    <h1 style={styles.title}>Nossos Clientes</h1>
    <p style={styles.text}>Clientes satisfeitos são nosso maior patrimônio.</p>
    <div style={styles.clients}>
      {[
        { src: '/enzo.png', alt: 'Grupo Enzo' },
        { src: '/sebrae.png', alt: 'SEBRAE' },
        { src: '/prefeituracg.jpeg', alt: 'Prefeitura de CG' },
      ].map((client, index) => (
        <img key={index} src={client.src} alt={client.alt} style={styles.clientImage} />
      ))}
    </div>
  </section>
);

// Componente Contato
const Contact = () => (
  <section id="contato" style={styles.section}>
    <h1 style={styles.title}>Contato</h1>
    <p style={styles.text}>Entre em contato conosco para saber mais sobre nossas soluções.</p>
    <p style={styles.text}>
      WhatsApp: <a href="https://wa.me/5567999614879" style={styles.contactLink}>+55 (67) 99961-4879</a>
    </p>
    <p style={styles.text}>
      Email: <a href="mailto:dsa.teruya@gmail.com" style={styles.contactLink}>dsa.teruya@gmail.com</a>
    </p>
  </section>
);

// Componente Rodapé
const Footer = () => (
  <footer style={styles.footer}>
    <p style={styles.footerText}>© 2025 Teruya Consultoria. Todos os direitos reservados.</p>
    <p style={styles.footerText}>Desenvolvido por Teruya Consultoria</p>
  </footer>
);

// Estilos
const styles = {
  body: {
    backgroundColor: '#ffffff',
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
    flexWrap: 'wrap', // Torna o cabeçalho responsivo
  },
  logo: {
    fontSize: '1.8em',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    gap: '15px',
    flexWrap: 'wrap',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1em',
  },
  section: {
    padding: '50px 20px',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap', // Torna a seção responsiva
    gap: '20px',
  },
  textContainer: {
    flex: 2,
  },
  imageContainer: {
    flex: 1,
    textAlign: 'center',
  },
  profileImage: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  title: {
    fontSize: '2.5em',
    marginBottom: '20px',
    textAlign: 'left',
  },
  text: {
    fontSize: '1.2em',
    marginBottom: '20px',
  },
  serviceList: {
    listStyle: 'none',
    padding: 0,
    fontSize: '1.2em',
    lineHeight: '1.8',
  },
  clients: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap', // Torna a seção responsiva
  },
  clientImage: {
    maxWidth: '150px',
    maxHeight: '100px',
    objectFit: 'contain',
  },
  contactLink: {
    color: '#003366',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#003366',
    color: 'white',
    textAlign: 'center',
    padding: '20px 0',
  },
  footerText: {
    margin: 0,
    fontSize: '0.9em',
  },
  checkIcon: {
    color: '#2ecc71', // Verde para o check
    fontSize: '1.5em',
    marginRight: '10px',
  },
};
