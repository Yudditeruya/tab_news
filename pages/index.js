import React from 'react';

function LandingPage() {
    return (
        <div style={styles.container}>
            {/* Cabeçalho */}
            <header style={styles.header}>
                <h1 style={styles.title}>Teruya Consultoria</h1>
                <p style={styles.subtitle}>
                    Transformamos dados em soluções inteligentes. Especialistas em BI, ETL, Relatórios e Automação.
                </p>
                <button style={styles.button}>Saiba Mais</button>
            </header>

            {/* Imagem de dashboard */}
            <section style={styles.imageSection}>
                <img
                    src="https://via.placeholder.com/800x400?text=Exemplo+de+Dashboard"
                    alt="Dashboard de exemplo"
                    style={styles.image}
                />
            </section>

            {/* Serviços */}
            <section style={styles.section}>
                <h2>Nossos Serviços</h2>
                <ul style={styles.list}>
                    <li>Business Intelligence (BI)</li>
                    <li>Integração de Dados (ETL)</li>
                    <li>Relatórios Personalizados</li>
                    <li>Automação de Processos</li>
                </ul>
            </section>

            {/* Contato */}
            <section style={styles.contactSection}>
                <h2>Entre em Contato</h2>
                <p>Telefone: <a href="tel:+5511999999999" style={styles.link}>+55 (11) 99999-9999</a></p>
                <p>Email: <a href="mailto:contato@teruyaconsultoria.com" style={styles.link}>contato@teruyaconsultoria.com</a></p>
            </section>

            {/* Rodapé */}
            <footer style={styles.footer}>
                <p>© 2025 Teruya Consultoria. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        lineHeight: 1.6,
        margin: 0,
        padding: 0,
        textAlign: 'center',
    },
    header: {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '50px 20px',
    },
    title: {
        fontSize: '2.5em',
        margin: 0,
    },
    subtitle: {
        fontSize: '1.2em',
        margin: '20px 0',
    },
    button: {
        padding: '10px 20px',
        fontSize: '1em',
        color: '#fff',
        backgroundColor: '#333',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    imageSection: {
        margin: '20px 0',
    },
    image: {
        width: '90%',
        maxWidth: '800px',
        height: 'auto',
        borderRadius: '8px',
    },
    section: {
        padding: '20px',
    },
    list: {
        listStyle: 'none',
        padding: 0,
    },
    contactSection: {
        backgroundColor: '#f4f4f4',
        padding: '20px',
    },
    link: {
        color: '#4CAF50',
        textDecoration: 'none',
    },
    footer: {
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px 0',
        marginTop: '20px',
    },
};

export default LandingPage;
