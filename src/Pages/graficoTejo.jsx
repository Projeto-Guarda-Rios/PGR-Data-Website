import React, { useState, useEffect } from 'react';
import '../App.css';

function GraficoTejo() {
    // Estado para armazenar os timestamps
    const [newFrom, setNewFrom] = useState(0);
    const [newTo, setNewTo] = useState(0);

    // Função para gerar os timestamps de 'from' e 'to'
    const generateNewTimestamps = () => {
        const currentTime = Date.now();  // Timestamp atual
        const newTo = currentTime;
        const newFrom = currentTime - 60 * 60 * 1000;  // Uma hora atrás (em milissegundos)
        return { newFrom, newTo };
    };

    // Atualiza os valores de 'from' e 'to'
    const updateGraphUrl = () => {
        const { newFrom, newTo } = generateNewTimestamps();
        setNewFrom(newFrom);
        setNewTo(newTo);
    };

    // Atualiza os timestamps a cada 5 minutos
    useEffect(() => {
        updateGraphUrl();  // Chama para carregar os timestamps iniciais

        const intervalId = setInterval(updateGraphUrl, 300000);  // Atualiza a cada 5 minutos

        return () => clearInterval(intervalId);  // Limpa o intervalo quando o componente desmontar
    }, []);

    return (
        <div className="window">
            <h2 className="graph-title">Gráfico Rio Tejo</h2>
            <iframe
                className="graph-iframe"
                title="All - Graph"
                src={`https://data.guarda-rios.pt:4563/grafic-embed/d-solo/ae9l1138nc5xce/pgr-all-data?orgId=2&from=${newFrom}&to=${newTo}&timezone=browser&refresh=auto&panelId=4&__feature.dashboardSceneSolo?`}
                width="560"
                height="315"
                allowFullScreen
            ></iframe>
            <h2 className="graph-title">Gráfico Rio Tejo de Temperatura</h2>
            <iframe
                className="graph-iframe"
                title="All - Graph"
                src={`https://data.guarda-rios.pt:4563/grafic-embed/d-solo/ae9l1138nc5xce/pgr-all-data?orgId=2&from=${newFrom}&to=${newTo}&timezone=browser&refresh=auto&panelId=19&__feature.dashboardSceneSolo`}
                width="560"
                height="315"
                allowFullScreen
            ></iframe>
            <h2 className="graph-title">Gráfico Rio Tejo de Turbidez</h2>
            <iframe
                className="graph-iframe"
                title="All - Graph"
                src={`https://data.guarda-rios.pt:4563/grafic-embed/d-solo/ae9l1138nc5xce/pgr-all-data?orgId=2&from=${newFrom}&to=${newTo}&timezone=browser&refresh=auto&panelId=20&__feature.dashboardSceneSolo`}
                width="560"
                height="315"
                allowFullScreen
            ></iframe>
            <h2 className="graph-title">Gráfico Rio Tejo de pH</h2>
            <iframe
                className="graph-iframe"
                title="All - Graph"
                src={`https://data.guarda-rios.pt:4563/grafic-embed/d-solo/ae9l1138nc5xce/pgr-all-data?orgId=2&from=${newFrom}&to=${newTo}&timezone=browser&refresh=auto&panelId=17&__feature.dashboardSceneSolo`}
                width="560"
                height="315"
                allowFullScreen
            ></iframe>
            <h2 className="graph-title">Gráfico Rio Tejo de TDS</h2>
            <iframe
                className="graph-iframe"
                title="All - Graph"
                src={`https://data.guarda-rios.pt:4563/grafic-embed/d-solo/ae9l1138nc5xce/pgr-all-data?orgId=2&from=${newFrom}&to=${newTo}&timezone=browser&refresh=auto&panelId=18&__feature.dashboardSceneSolo`}
                width="560"
                height="315"
                allowFullScreen
            ></iframe>
            <h2 className="graph-title">Indicador de Qualidade do Rio Tejo</h2>
            <iframe
                className="graph-iframe"
                title="All - Graph"
                src={`https://data.guarda-rios.pt:4563/grafic-embed/d-solo/ae9l1138nc5xce/pgr-all-data?orgId=2&from=${newFrom}&to=${newTo}&timezone=browser&refresh=auto&panelId=23&__feature.dashboardSceneSolo`}
                width="560"
                height="315"
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default GraficoTejo;