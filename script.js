// Mock Data - 6 notícias baseadas no conteúdo do documento
const newsData = [
    {
        id: 1,
        title: "Inteligência Artificial na Agricultura reduz uso de insumos em até 25%",
        description: "A IA analisa dados do solo, clima e produção para aplicar fertilizantes, água e defensivos apenas onde necessário, reduzindo desperdícios e aumentando produtividade.",
        category: "Agricultura 4.0",
        readTime: "5 min de leitura",
        date: "15 Mar 2025",
        icon: "fa-robot"
    },
    {
        id: 2,
        title: "Tecnologia na indústria alimentícia reduz desperdício em até 50%",
        description: "Softwares integrados e inteligência de dados controlam validade, estoque e logística, otimizando a cadeia de suprimentos de produtos perecíveis.",
        category: "Indústria",
        readTime: "4 min de leitura",
        date: "12 Mar 2025",
        icon: "fa-industry"
    },
    {
        id: 3,
        title: "Sistemas SAP e gestão inteligente transformam controle de produção",
        description: "Soluções SAP ajudam empresas a controlar produção, estoque e distribuição em tempo real, reduzindo perdas e aumentando eficiência operacional.",
        category: "Gestão Empresarial",
        readTime: "6 min de leitura",
        date: "10 Mar 2025",
        icon: "fa-chart-line"
    },
    {
        id: 4,
        title: "IoT e rastreabilidade logística: menos perdas por vencimento",
        description: "Sensores, RFID, QR Code e Blockchain monitoram transporte e armazenagem, garantindo controle em tempo real e redução de perdas logísticas.",
        category: "Logística",
        readTime: "5 min de leitura",
        date: "08 Mar 2025",
        icon: "fa-wifi"
    },
    {
        id: 5,
        title: "WMS para Agronegócio reduz desperdícios em até 20% na armazenagem",
        description: "Sistema de gestão de armazéns automatiza controle de estoque e movimentação de insumos, otimizando sementes e fertilizantes.",
        category: "Armazenagem",
        readTime: "4 min de leitura",
        date: "05 Mar 2025",
        icon: "fa-warehouse"
    },
    {
        id: 6,
        title: "Blockchain na cadeia de alimentos aumenta transparência e segurança",
        description: "Tecnologia blockchain melhora rastreabilidade dos produtos, reduz perdas logísticas e garante segurança alimentar em toda cadeia de produção.",
        category: "Blockchain",
        readTime: "7 min de leitura",
        date: "01 Mar 2025",
        icon: "fa-link"
    }
];

// Renderizar notícias no grid
function renderNews() {
    const newsGrid = document.getElementById('newsGrid');
    if (!newsGrid) return;
    
    newsGrid.innerHTML = newsData.map(news => `
        <article class="news-card" data-id="${news.id}">
            <div class="card-image">
                <i class="fas ${news.icon}"></i>
                <span class="card-tag">${news.category}</span>
            </div>
            <div class="card-content">
                <span class="card-category">${news.category}</span>
                <h3 class="card-title">${news.title}</h3>
                <p class="card-description">${news.description}</p>
                <div class="card-meta">
                    <span><i class="far fa-calendar-alt"></i> ${news.date}</span>
                    <span><i class="far fa-clock"></i> ${news.readTime}</span>
                </div>
                <a href="#" class="read-more">Ler mais <i class="fas fa-arrow-right"></i></a>
            </div>
        </article>
    `).join('');
    
    // Adicionar evento de clique
