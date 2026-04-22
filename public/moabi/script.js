const HATCH_ASSETS = [
    { ticker: 'ACWI', name: 'MSCI ACWI', price: '$145,03', avgPrice: '$145,44', quantity: '76,8914', value: '$11.151,56', change: '-0,28%', target: '24,00%', status: 'down' },
    { ticker: 'IEI', name: 'ICE US Treasury 3-7 Yr', price: '$118,40', avgPrice: '$120,14', quantity: '71,61', value: '$8.478,62', change: '-1,45%', target: '20,00%', status: 'down' },
    { ticker: 'BIL', name: 'Solactive 1-3m T-Bill', price: '$91,49', avgPrice: '$91,56', quantity: '70,4774', value: '$6.447,98', change: '-0,08%', target: '15,00%', status: 'down' },
    { ticker: 'AGG', name: 'BBG U.S. Aggregate', price: '$99,35', avgPrice: '$101,03', quantity: '42,5913', value: '$4.231,45', change: '-1,66%', target: '10,00%', status: 'down' },
    { ticker: 'HYG', name: 'Markit iBoxx USD High', price: '$80,00', avgPrice: '$80,85', quantity: '34,6712', value: '$2.773,70', change: '-1,05%', target: '6,50%', status: 'down' },
    { ticker: 'GLD', name: 'LBMA Gold Price', price: '$437,00', avgPrice: '$447,39', quantity: '4,8124', value: '$2.103,02', change: '-2,32%', target: '5,00%', status: 'down' },
    { ticker: 'LQD', name: 'Markit iBoxx USD Grade', price: '$109,28', avgPrice: '$111,88', quantity: '14,4495', value: '$1.579,04', change: '-2,32%', target: '3,50%', status: 'down' },
    { ticker: 'BOTZ', name: 'AI & Big Data Index', price: '$35,42', avgPrice: '$38,58', quantity: '27,8159', value: '$985,24', change: '-8,19%', target: '2,50%', status: 'down' },
    { ticker: 'IEUR', name: 'MSCI Europe Index', price: '$74,06', avgPrice: '$75,49', quantity: '14,3693', value: '$1.064,19', change: '-1,89%', target: '2,50%', status: 'down' },
    { ticker: 'FDIS', name: 'Consumer Disc 40 Act', price: '$96,89', avgPrice: '$99,14', quantity: '10,8231', value: '$1.048,65', change: '-2,27%', target: '2,50%', status: 'down' },
    { ticker: 'FNCL', name: 'MSCI Financials ETF', price: '$72,34', avgPrice: '$74,67', quantity: '14,3693', value: '$1.039,48', change: '-3,12%', target: '2,50%', status: 'down' },
    { ticker: 'FXI', name: 'FTSE China 50', price: '$36,26', avgPrice: '$38,53', quantity: '23,4384', value: '$849,88', change: '-5,89%', target: '2,00%', status: 'down' },
    { ticker: 'ILF', name: 'S&P Latin America 40', price: '$37,73', avgPrice: '$35,90', quantity: '25,1547', value: '$949,09', change: '+5,10%', target: '2,00%', status: 'up' },
    { ticker: 'VOO', name: 'VOO S&P 500 Vanguard', price: '$624,52', avgPrice: '$612,03', quantity: '3,2727', value: '$2.043,87', change: '+2,04%', target: '2,00%', status: 'up' }
];

const HATCH_TOTAL_USD = 44745.75;

const SHARESIES_ASSETS = [
    { ticker: 'EFC', name: 'Ellington Financial Inc', price: '$13,01', avgPrice: '-', quantity: '915,55', value: '$11.915,97', change: '-3,18%', target: '-', status: 'down' },
    { ticker: 'HRZN', name: 'Horizon Technology', price: '$4,28', avgPrice: '-', quantity: '2148,44', value: '$9.206,10', change: '-31,40%', target: '-', status: 'down' },
    { ticker: 'MAXI', name: 'Simplify Bitcoin Strategy', price: '$11,16', avgPrice: '-', quantity: '940,73', value: '$10.499,16', change: '-47,37%', target: '-', status: 'down' },
    { ticker: 'YAL.AX', name: 'Yancoal Australia Ltd', price: '$5,76', avgPrice: '-', quantity: '-', value: '$3.500,00', change: '-0,35%', target: '-', status: 'down' },
    { ticker: 'VHY.AX', name: 'Vanguard Aus High Yield', price: '$78,84', avgPrice: '-', quantity: '-', value: '$2.120,00', change: '-0,53%', target: '-', status: 'down' },
    { ticker: 'NZD', name: 'Wallet (Cash)', price: '$1,00', avgPrice: '-', quantity: '-', value: '$613,73', change: '0,00%', target: '-', status: 'up' }
];

const SHARESIES_TOTAL_NZD = 55428.04;
const NZD_TO_USD = 0.60;
const SHARESIES_TOTAL_USD = SHARESIES_TOTAL_NZD * NZD_TO_USD;
const TOTAL_PORTFOLIO_USD = HATCH_TOTAL_USD + SHARESIES_TOTAL_USD;

function formatCurrency(value) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
}

function renderAssets(assets) {
    const list = document.getElementById('assets-list');
    list.innerHTML = '';
    
    assets.forEach(asset => {
        const item = document.createElement('div');
        item.className = 'asset-item';
        
        const changeClass = asset.status === 'up' ? 'delta-up' : 'delta-down';
        
        item.innerHTML = `
            <div class="asset-icon">${asset.ticker.substring(0, 4)}</div>
            <div class="asset-info">
                <h3>${asset.name}</h3>
                <p>${asset.ticker}</p>
            </div>
            <div class="asset-qty">
                <span class="card-label">QTD</span>
                <p>${asset.quantity || '-'}</p>
            </div>
            <div class="asset-avg">
                <span class="card-label">MÉDIO</span>
                <p>${asset.avgPrice || '-'}</p>
            </div>
            <div class="asset-price">
                <span class="card-label">COTAÇÃO</span>
                <p>${asset.price}</p>
            </div>
            <div class="asset-value">
                <span class="card-label">PATRIMÔNIO</span>
                <p>${asset.value}</p>
            </div>
            <div class="asset-target">
                <span class="card-label">ALVO XP</span>
                <p>${asset.target}</p>
            </div>
            <div class="asset-change ${changeClass}">
                ${asset.change}
            </div>
        `;
        list.appendChild(item);
    });
}

function switchTab(brokerage) {
    const btns = document.querySelectorAll('.tab-btn');
    btns.forEach(btn => btn.classList.remove('active'));
    
    if (brokerage === 'hatch') {
        btns[0].classList.add('active');
        renderAssets(HATCH_ASSETS);
    } else {
        btns[1].classList.add('active');
        renderAssets(SHARESIES_ASSETS);
    }
}

// Initial Render
document.getElementById('total-wealth').innerText = formatCurrency(TOTAL_PORTFOLIO_USD);
document.getElementById('sharesies-value').innerText = formatCurrency(SHARESIES_TOTAL_USD);
document.getElementById('total-delta').innerText = '-1.84% Total (Est.)';

renderAssets(HATCH_ASSETS);
