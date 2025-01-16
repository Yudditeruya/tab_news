import React from 'react';
import '../styles/App.css';


function App() {
  return (
    <div>
      {/* Cabeçalho */}
      <header className="header">
        <div className="logo">Teruya Consultoria</div>
        <nav className="nav">
          <a href="#quem-somos">Quem Somos</a>
          <a href="#servicos">Serviços</a>
          <a href="#clientes">Clientes</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      {/* Seção Quem Somos */}
      <section id="quem-somos" className="section">
        <h1>Quem Somos</h1>
        <p>
          A Teruya Consultoria é especializada em soluções de Business Intelligence, ETL, Relatórios e Automação. Nosso objetivo é transformar dados em resultados para o seu negócio.
        </p>
      </section>

      {/* Seção Serviços */}
      <section id="servicos" className="section">
        <h1>Nossos Serviços</h1>
        <div className="services">
          <div className="service-card">
            <h2>Business Intelligence (BI)</h2>
            <p>Estratégias inteligentes baseadas em dados.</p>
          </div>
          <div className="service-card">
            <h2>ETL</h2>
            <p>Integração de dados eficiente e segura.</p>
          </div>
          <div className="service-card">
            <h2>Relatórios Personalizados</h2>
            <p>Informações detalhadas e úteis.</p>
          </div>
          <div className="service-card">
            <h2>Automação</h2>
            <p>Otimização de processos para seu negócio.</p>
          </div>
        </div>
      </section>

      {/* Seção Clientes */}
      <section id="clientes" className="section">
        <h1>Nossos Clientes</h1>
        <p>Clientes satisfeitos são nosso maior patrimônio.</p>
        <div className="clients">
          <div className="client-logo">Logo Cliente 1</div>
          <div className="client-logo">Logo Cliente 2</div>
          <div className="client-logo">Logo Cliente 3</div>
        </div>
      </section>

      {/* Seção Contato */}
      <section id="contato" className="section">
        <h1>Contato</h1>
        <p>Entre em contato conosco para saber mais sobre nossas soluções.</p>
        <p>WhatsApp: <a href="https://wa.me/5567999614879">+55 (67) 99961-4879</a></p>
        <p>Email: <a href="mailto:contato@teruyaconsultoria.com">contato@teruyaconsultoria.com</a></p>
      </section>

      {/* Rodapé */}
      <footer className="footer">
        <p>© 2025 Teruya Consultoria. Todos os direitos reservados.</p>
        <p>Desenvolvido por Teruya Consultoria</p>
      </footer>
    </div>
  );
}

export default App;
