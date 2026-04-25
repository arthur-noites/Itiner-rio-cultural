const map = L.map('map').setView([-7.1195, -34.8450], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

const pontosCulturais = [
    {
        id: 1,
        nome: "Artesanato da Dona Maria",
        categoria: "Artesanato",
        coords: [-7.1150, -34.8320],
        desc: "Produção de rendas tradicionais e oficinas para jovens."
    },
    {
        id: 2,
        nome: "Cine Clube Popular",
        categoria: "Cinema",
        coords: [-7.1280, -34.8510],
        desc: "Exibição gratuita de filmes e debates sociais."
    }
];

function showDetails(ponto) {
    document.getElementById('details').style.display = 'block';
    document.getElementById('title-text').innerText = ponto.nome;
    document.getElementById('cat-text').innerText = ponto.categoria;
    document.getElementById('desc-text').innerText = ponto.desc;
}

pontosCulturais.forEach(ponto => {
    const marker = L.marker(ponto.coords).addTo(map);
    
    marker.on('click', () => {
        showDetails(ponto);
        map.flyTo(ponto.coords, 15);
    });

    marker.bindTooltip(ponto.nome);
});