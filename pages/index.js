export default function Home() {
  return (
    <div style={styles.body}>
      {/* Cabeçalho */}
      <Header />

      {/* Seção Quem Somos */}
      <WhoWeAre />

      {/* Seção Serviços */}
      <Services />

      {/* Seção Projetos */}
      <Projects />

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
      <a href="#projetos" style={styles.link}>Projetos</a>
      <a href="#contato" style={styles.link}>Contato</a>
    </nav>
  </header>
);

// Componente Quem Somos
const WhoWeAre = () => (
  <section id="quem-somos" style={styles.section}>
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h1 style={styles.title}>Quem Somos</h1>
        <p style={styles.text}>
          A Teruya Consultoria é especializada em soluções de Business Intelligence, ETL, Relatórios e Automação.
          Transformamos dados em resultados para empresas de todos os setores.
        </p>
      </div>
      <div style={styles.imageContainer}>
        <img src="/Yuddi.jpeg" alt="Minha Foto" style={styles.profileImage} />
      </div>
    </div>
  </section>
);

// Componente Serviços
const Services = () => (
  <section id="servicos" style={styles.sectionAlt}>
    <h1 style={styles.title}>Nossos Serviços</h1>
    <div style={styles.services}>
      {[
        { title: 'Business Intelligence (BI)', desc: 'Estratégias inteligentes baseadas em dados.' },
        { title: 'ETL', desc: 'Integração de dados eficiente e segura.' },
        { title: 'Relatórios Personalizados', desc: 'Informações detalhadas e úteis.' },
        { title: 'Dashboards', desc: 'Visualizações claras com Power BI, Qlik Sense, e mais.' },
        { title: 'Automação', desc: 'Otimização de processos para sua empresa.' },
      ].map((service, index) => (
        <div key={index} style={styles.serviceCard}>
          <h2 style={styles.cardTitle}>{service.title}</h2>
          <p style={styles.cardText}>{service.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

// Componente Projetos
const Projects = () => (
  <section id="projetos" style={styles.section}>
    <h1 style={styles.title}>Projetos Realizados</h1>
    <div style={styles.projects}>
      {[
        { title: 'Projeto 1', desc: 'Implementação de BI para multinacional.' },
        { title: 'Projeto 2', desc: 'Automação de processos para varejistas.' },
        { title: 'Projeto 3', desc: 'ETL para banco de dados robusto.' },
      ].map((project, index) => (
        <div key={index} style={styles.projectCard}>
          <h2 style={styles.cardTitle}>{project.title}</h2>
          <p style={styles.cardText}>{project.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

// Componente Contato
const Contact = () => (
  <section id="contato" style={styles.sectionAlt}>
    <h1 style={styles.title}>Contato</h1>
    <p style={styles.text}>Entre em contato para saber mais sobre nossos serviços.</p>
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
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f7f7f7',
    color: '#333',
    margin: 0,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    backgroundColor: '#003366',
    color: '#fff',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000,
  },
  logo: {
    fontSize: '1.5em',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1em',
    transition: 'color 0.3s',
  },
  section: {
    padding: '100px 20px 50px',
    backgroundColor: '#fff',
  },
  sectionAlt: {
    padding: '100px 20px 50px',
    backgroundColor: '#f0f0f0',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  textContainer: {
    flex: 1,
    paddingRight: '20px',
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
  services: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
  },
  serviceCard: {
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  projects: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
  },
  projectCard: {
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    flex: '1',
    maxWidth: '300px',
  },
  title: {
    fontSize: '2em',
    marginBottom: '20px',
    textAlign: 'center',
  },
  text: {
    fontSize: '1em',
    color: '#555',
    textAlign: 'center',
  },
  contactLink: {
    color: '#003366',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  footer: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#003366',
    color: '#fff',
  },
};
