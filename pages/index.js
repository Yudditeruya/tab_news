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

// Componente Serviços
const Services = () => (
  <section id="servicos" style={styles.section}>
    <h1 style={styles.title}>Nossos Serviços</h1>
    <div style={styles.services}>
      {[
        { title: 'Business Intelligence (BI)', desc: 'Estratégias inteligentes baseadas em dados.' },
        { title: 'ETL', desc: 'Integração de dados eficiente e segura.' },
        { title: 'Relatórios Personalizados', desc: 'Informações detalhadas e úteis.' },
        { title: 'Dashboards para todas áreas', desc: 'Ferramentas: PowerBI, Qlik sense, Pentaho Designer, Report Builder' },
        { title: 'Automação', desc: 'Otimização de processos para seu negócio.' },
      ].map((service, index) => (
        <div key={index} style={styles.serviceCard}>
          <h2 style={styles.cardTitle}>{service.title}</h2>
          <p style={styles.cardText}>{service.desc}</p>
        </div>
      ))}
    </div>
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
        <div key={index} style={styles.clientLogo}>
          <img src={client.src} alt={client.alt} style={styles.image} />
        </div>
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
      Email: <a href="mailto:contato@teruyaconsultoria.com" style={styles.contactLink}>contato@teruyaconsultoria.com</a>
    </p>
  </section>
);

// Componente Rodapé
const Footer = () => (
  <footer style={styles.footer}>
    <p style={styles.text}>© 2025 Teruya Consultoria. Todos os direitos reservados.</p>
    <p style={styles.text}>Desenvolvido por Teruya Consultoria</p>
  </footer>
);

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
  logo: {
    fontSize: '1.8em',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    gap: '15px',
    flexWrap: 'wrap', // Ajusta para telas menores
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'color 0.3s',
    fontSize: '1em', // Texto menor para responsividade
  },
  section: {
    padding: '30px 10px', // Reduzido para dispositivos móveis
    marginBottom: '20px',
    backgroundColor: '#e0e0e0',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  whoWeAreRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap', // Torna responsivo para empilhar elementos
    gap: '20px',
  },
  card: {
    flex: '1',
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    minWidth: '300px', // Garante tamanho mínimo em telas pequenas
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
    textAlign: 'center',
  },
  text: {
    fontSize: '1em',
    color: '#555',
  },
  services: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    marginTop: '20px',
  },
  serviceCard: {
    background: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  clients: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap', // Ajusta layout em telas menores
    marginTop: '20px',
  },
  clientLogo: {
    background: '#eaeaea',
    borderRadius: '8px',
    width: '200px',
    height: '150px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
  },
  contactLink: {
    color: '#003366',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1em',
  },
  footer: {
    backgroundColor: '#003366',
    color: 'white',
    textAlign: 'center',
    padding: '20px 0',
  },
  // Media queries para dispositivos móveis
  '@media (max-width: 768px)': {
    header: {
      flexDirection: 'column',
      textAlign: 'center',
    },
    logo: {
      fontSize: '1.5em',
    },
    nav: {
      flexDirection: 'column',
      gap: '10px',
    },
    section: {
      padding: '20px 10px',
    },
    whoWeAreRow: {
      flexDirection: 'column', // Empilha os cards
    },
    card: {
      minWidth: '100%', // Cards ocupam a largura total
    },
    title: {
      fontSize: '1.5em',
    },
    text: {
      fontSize: '0.9em',
    },
    contactLink: {
      fontSize: '0.9em',
    },
  },
};
