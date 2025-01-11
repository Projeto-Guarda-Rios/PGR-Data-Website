import React, { useState, useEffect } from 'react';
import '../App.css';

function GraficoGranja() {
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
            <h2 className="graph-title">Gráfico Ribeira da Granja</h2>
            <iframe
                className="graph-iframe"
                title="All - Graph"
                src={`https://data.guarda-rios.pt:4563/grafic-embed/d-solo/ae9l1138nc5xce/pgr-all-data?orgId=2&from=${newFrom}&to=${newTo}&timezone=browser&refresh=auto&panelId=2&__feature.dashboardSceneSolo`}
                width="560"
                height="315"
                allowFullScreen
            ></iframe>
            <h2 className="graph-title">Gráfico Ribeira da Granja de Temperatura</h2>
            <iframe
                className="graph-iframe"
                title="All - Graph"
                src={`https://data.guarda-rios.pt:4563/grafic-embed/d-solo/ae9l1138nc5xce/pgr-all-data?orgId=2&from=${newFrom}&to=${newTo}&timezone=browser&refresh=auto&panelId=11&__feature.dashboardSceneSolo`}
                width="560"
                height="315"
                allowFullScreen
            ></iframe>
            <h2 className="graph-title">Gráfico Ribeira da Granja de Turbidez</h2>
            <iframe
                className="graph-iframe"
                title="All - Graph"
                src={`https://data.guarda-rios.pt:4563/grafic-embed/d-solo/ae9l1138nc5xce/pgr-all-data?orgId=2&from=${newFrom}&to=${newTo}&timezone=browser&refresh=auto&panelId=12&__feature.dashboardSceneSolo`}
                width="560"
                height="315"
                allowFullScreen
            ></iframe>
            <h2 className="graph-title">Gráfico Ribeira da Granja de pH</h2>
            <iframe
                className="graph-iframe"
                title="All - Graph"
                src={`https://data.guarda-rios.pt:4563/grafic-embed/d-solo/ae9l1138nc5xce/pgr-all-data?orgId=2&from=${newFrom}&to=${newTo}&timezone=browser&refresh=auto&panelId=9&__feature.dashboardSceneSolo`}
                width="560"
                height="315"
                allowFullScreen
            ></iframe>
            <h2 className="graph-title">Gráfico Ribeira da Granja de TDS</h2>
            <iframe
                className="graph-iframe"
                title="All - Graph"
                src={`https://data.guarda-rios.pt:4563/grafic-embed/d-solo/ae9l1138nc5xce/pgr-all-data?orgId=2&from=${newFrom}&to=${newTo}&timezone=browser&refresh=auto&panelId=10&__feature.dashboardSceneSolo`}
                width="560"
                height="315"
                allowFullScreen
            ></iframe>
            <h2 className="graph-title">Indicador de Qualidade da Ribeira da Granja</h2>
            <iframe
                className="graph-iframe"
                title="All - Graph"
                src={`https://data.guarda-rios.pt:4563/grafic-embed/d-solo/ae9l1138nc5xce/pgr-all-data?orgId=2&from=${newFrom}&to=${newTo}&timezone=browser&refresh=auto&panelId=21&__feature.dashboardSceneSolo`}
                width="560"
                height="315"
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default GraficoGranja;