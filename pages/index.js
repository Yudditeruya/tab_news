import React from 'react';
import '../styles/App.css';


function App() {
  return (
    <div>
      {/* Cabe�alho */}
      <header className="header">
        <div className="logo">Teruya Consultoria</div>
        <nav className="nav">
          <a href="#quem-somos">Quem Somos</a>
          <a href="#servicos">Servi�os</a>
          <a href="#clientes">Clientes</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      {/* Se��o Quem Somos */}
      <section id="quem-somos" className="section">
        <h1>Quem Somos</h1>
        <p>
          A Teruya Consultoria � especializada em solu��es de Business Intelligence, ETL, Relat�rios e Automa��o. Nosso objetivo � transformar dados em resultados para o seu neg�cio.
        </p>
      </section>

      {/* Se��o Servi�os */}
      <section id="servicos" className="section">
        <h1>Nossos Servi�os</h1>
        <div className="services">
          <div className="service-card">
            <h2>Business Intelligence (BI)</h2>
            <p>Estrat�gias inteligentes baseadas em dados.</p>
          </div>
          <div className="service-card">
            <h2>ETL</h2>
            <p>Integra��o de dados eficiente e segura.</p>
          </div>
          <div className="service-card">
            <h2>Relat�rios Personalizados</h2>
            <p>Informa��es detalhadas e �teis.</p>
          </div>
          <div className="service-card">
            <h2>Automa��o</h2>
            <p>Otimiza��o de processos para seu neg�cio.</p>
          </div>
        </div>
      </section>

      {/* Se��o Clientes */}
      <section id="clientes" className="section">
        <h1>Nossos Clientes</h1>
        <p>Clientes satisfeitos s�o nosso maior patrim�nio.</p>
        <div className="clients">
          <div className="client-logo">Logo Cliente 1</div>
          <div className="client-logo">Logo Cliente 2</div>
          <div className="client-logo">Logo Cliente 3</div>
        </div>
      </section>

      {/* Se��o Contato */}
      <section id="contato" className="section">
        <h1>Contato</h1>
        <p>Entre em contato conosco para saber mais sobre nossas solu��es.</p>
        <p>WhatsApp: <a href="https://wa.me/5567999614879">+55 (67) 99961-4879</a></p>
        <p>Email: <a href="mailto:contato@teruyaconsultoria.com">contato@teruyaconsultoria.com</a></p>
      </section>

      {/* Rodap� */}
      <footer className="footer">
        <p>� 2025 Teruya Consultoria. Todos os direitos reservados.</p>
        <p>Desenvolvido por Teruya Consultoria</p>
      </footer>
    </div>
  );
}

export default App;
