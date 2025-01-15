import React from "react";

function App() {
  return (
    <div style={styles.container}>
      {/* Cabeçalho */}
      <header style={styles.header}>
        <h1>Portal da Transparência - Exemplo</h1>
        <nav style={styles.nav}>
          <a href="#receitas" style={styles.link}>Receitas</a>
          <a href="#despesas" style={styles.link}>Despesas</a>
          <a href="#institucional" style={styles.link}>Institucional</a>
        </nav>
      </header>

      {/* Conteúdo */}
      <main style={styles.main}>
        <section id="receitas">
          <h2>Receitas</h2>
          <p>Informações sobre as receitas públicas.</p>
          <table style={styles.table}>
            <thead>
              <tr>
                <th>Categoria</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Impostos</td>
                <td>R$ 1.000.000</td>
              </tr>
              <tr>
                <td>Outras Receitas</td>
                <td>R$ 500.000</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="despesas">
          <h2>Despesas</h2>
          <p>Informações sobre as despesas públicas.</p>
          <table style={styles.table}>
            <thead>
              <tr>
                <th>Categoria</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Educação</td>
                <td>R$ 2.000.000</td>
              </tr>
              <tr>
                <td>Saúde</td>
                <td>R$ 1.500.000</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>

      {/* Rodapé */}
      <footer style={styles.footer}>
        <p>© 2025 Portal da Transparência - Exemplo</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
  },
  header: {
    backgroundColor: "#0044cc",
    color: "#fff",
    padding: "10px",
    textAlign: "center",
  },
  nav: {
    marginTop: "10px",
  },
  link: {
    margin: "0 15px",
    color: "#fff",
    textDecoration: "none",
  },
  main: {
    padding: "20px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    margin: "20px 0",
  },
  footer: {
    backgroundColor: "#0044cc",
    color: "#fff",
    textAlign: "center",
    padding: "10px 0",
    marginTop: "20px",
  },
};

export default App;
