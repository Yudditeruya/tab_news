import React from 'react';

function LandingPage() {
    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1 style={styles.title}>Teruya Consultoria</h1>
                <p style={styles.subtitle}>
                    Transformamos dados em soluções inteligentes. Especialistas em BI, ETL, Relatórios e Automação.
                </p>
                <button style={styles.button}>Saiba Mais</button>
            </header>
            <section style={styles.section}>
                <h2>Nossos Serviços</h2>
                <ul style={styles.list}>
                    <li>Business Intelligence (BI)</li>
                    <li>Integração de Dados (ETL)</li>
                    <li>Relatórios Personalizados</li>
                    <li>Automação de Processos</li>
                </ul>
            </section>
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
        fontSize: '3em',
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
    section: {
        padding: '20px',
    },
    list: {
        listStyle: 'none',
        padding: 0,
    },
    footer: {
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px 0',
        marginTop: '20px',
    },
};

export default LandingPage;
