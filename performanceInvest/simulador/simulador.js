// ============================================
// SIMULADOR FEE VS COMMISSION — PERFORMANCE INVEST
// ============================================

// ---- FORMATAÇÃO ----
function formatBRL(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function formatCurrency(input) {
    let raw = input.value.replace(/\D/g, '');
    let num = parseInt(raw || '0') / 100;
    input.value = num.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function parseCurrency(str) {
    if (!str) return 0;
    return parseFloat(str.replace(/\./g, '').replace(',', '.').replace(/[^0-9.]/g, '')) || 0;
}

function syncRange(id) {
    const range = document.getElementById(id + '-range');
    const input = document.getElementById(id);
    input.value = parseFloat(range.value).toFixed(2);
}

function syncInput(id) {
    const range = document.getElementById(id + '-range');
    const input = document.getElementById(id);
    range.value = input.value;
}

function syncRV() {
    const rv = parseFloat(document.getElementById('rv').value) || 0;
    document.getElementById('outros').value = Math.max(0, 100 - rv).toFixed(0);
}

function syncOutros() {
    const outros = parseFloat(document.getElementById('outros').value) || 0;
    document.getElementById('rv').value = Math.max(0, 100 - outros).toFixed(0);
}

// ---- PRESETS ----
function aplicarPresetCommission() {
    const preset = document.getElementById('preset-commission').value;
    if (preset !== 'custom') {
        document.getElementById('roa').value = preset;
    }
    calcular();
}

function aplicarFaixa(row) {
    document.querySelectorAll('.faixa-row').forEach(r => r.classList.remove('ativa'));
    row.classList.add('ativa');
    const auc = parseFloat(row.dataset.auc);
    const fee = parseFloat(row.dataset.fee);
    // Formata o AUC
    const aucInput = document.getElementById('auc');
    aucInput.value = auc.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
    document.getElementById('taxa-fee').value = fee.toFixed(2);
    document.getElementById('taxa-fee-range').value = fee;
    calcular();
}

function setRepasse(valor, btn) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('repasse-commission').value = valor;
    document.getElementById('repasse-fee').value = valor;
    calcular();
}

function toggleConfig() {
    const el = document.getElementById('config-avancado');
    const label = document.getElementById('config-toggle-label');
    el.classList.toggle('hidden');
    label.textContent = el.classList.contains('hidden') ? 'Exibir Configurações Avançadas' : 'Ocultar Configurações Avançadas';
}

// ---- CÁLCULO PRINCIPAL ----
function calcular() {
    const auc0 = parseCurrency(document.getElementById('auc').value);
    const taxaFee = (parseFloat(document.getElementById('taxa-fee').value) || 0) / 100;
    const cashbackPct = (parseFloat(document.getElementById('cashback').value) || 0) / 100;
    const roa = (parseFloat(document.getElementById('roa').value) || 0) / 100;
    const crescimento = (parseFloat(document.getElementById('crescimento').value) || 0) / 100;
    const rv = (parseFloat(document.getElementById('rv').value) || 0) / 100;
    const outros = (parseFloat(document.getElementById('outros').value) || 0) / 100;
    const rvNoFee = document.getElementById('rv-no-fee').checked;
    const repasseComm = (parseFloat(document.getElementById('repasse-commission').value) || 50) / 100;
    const repasseFee = (parseFloat(document.getElementById('repasse-fee').value) || 50) / 100;
    const ir = (parseFloat(document.getElementById('aliquota-ir').value) || 18.5) / 100;

    // AUC efetivo para fee (considera RV ou não)
    const fracao_fee = rvNoFee ? 1 : outros;

    const anos = ['Inicial', 'Ano 1', 'Ano 2', 'Ano 3', 'Ano 4', 'Ano 5'];
    const dadosTabela = [];
    const barrasData = [];
    let aucAtual = auc0;

    let totalFee = 0, totalComm = 0, totalCashback = 0;
    let acumFee = 0, acumComm = 0;
    const acumFeeArr = [], acumCommArr = [];

    for (let i = 0; i <= 5; i++) {
        const auc_eff = aucAtual * fracao_fee;
        const feeBruto = auc_eff * taxaFee;
        const cashbackVal = auc_eff * cashbackPct;
        const feeLiquido = feeBruto - cashbackVal;
        const commission = aucAtual * roa;

        const diff = feeLiquido - commission;
        const diffStr = (diff >= 0 ? '+' : '') + formatBRL(diff);
        const diffClass = diff >= 0 ? 'col-diff-pos' : 'col-diff-neg';

        if (i > 0) {
            totalFee += feeLiquido;
            totalComm += commission;
            totalCashback += cashbackVal;
            acumFee += feeLiquido;
            acumComm += commission;
            barrasData.push({ ano: anos[i], fee: feeLiquido, comm: commission });
        }

        acumFeeArr.push(acumFee);
        acumCommArr.push(acumComm);

        dadosTabela.push({
            ano: anos[i],
            auc: formatBRL(aucAtual),
            feeBruto: formatBRL(feeBruto),
            cashback: formatBRL(cashbackVal),
            feeLiquido: formatBRL(feeLiquido),
            commission: formatBRL(commission),
            diff: diffStr,
            diffClass,
            isInicial: i === 0
        });

        aucAtual *= (1 + crescimento);
    }

    // Atualiza comparação principal (Ano 1)
    const d1 = dadosTabela[1];
    const feeVal1 = parseCurrency(d1.feeLiquido);
    const commVal1 = parseCurrency(d1.commission);
    document.getElementById('res-fee-cliente').textContent = d1.feeLiquido;
    document.getElementById('res-fee-base-label').textContent = `AUC × ${(taxaFee * 100).toFixed(2)}% − Cashback`;
    document.getElementById('res-commission-cliente').textContent = d1.commission;
    const diffAno1 = feeVal1 - commVal1;
    const banner = document.getElementById('diferenca-banner');
    if (diffAno1 >= 0) {
        document.getElementById('res-diferenca-texto').textContent = `Fee Based custa ${formatBRL(Math.abs(diffAno1))} a mais que o Commission no Ano 1`;
        banner.style.background = 'rgba(212,175,55,0.08)';
        banner.style.borderColor = 'rgba(212,175,55,0.3)';
        banner.style.color = '#d4af37';
    } else {
        document.getElementById('res-diferenca-texto').textContent = `Fee Based é ${formatBRL(Math.abs(diffAno1))} mais BARATO que o Commission no Ano 1 ✅`;
        banner.style.background = 'rgba(34,197,94,0.08)';
        banner.style.borderColor = 'rgba(34,197,94,0.3)';
        banner.style.color = '#22c55e';
    }

    // Atualiza tabela
    const tbody = document.getElementById('tabela-body');
    const tfoot = document.getElementById('tabela-foot');
    tbody.innerHTML = dadosTabela.map(d => `
        <tr>
            <td>${d.ano}</td>
            <td>${d.auc}</td>
            <td class="col-fee">${d.feeBruto}</td>
            <td class="col-cashback">${d.isInicial ? '—' : (d.cashback === 'R$\xa00,00' ? 'R$ 0,00' : d.cashback)}</td>
            <td class="col-fee">${d.isInicial ? '—' : d.feeLiquido}</td>
            <td>${d.isInicial ? '—' : d.commission}</td>
            <td class="${d.isInicial ? '' : d.diffClass}">${d.isInicial ? '—' : d.diff}</td>
        </tr>
    `).join('');

    const totalDiff = totalFee - totalComm;
    tfoot.innerHTML = `
        <tr>
            <td>TOTAL (5 anos)</td><td>—</td>
            <td class="col-fee">—</td>
            <td class="col-cashback">${formatBRL(totalCashback)}</td>
            <td class="col-fee">${formatBRL(totalFee)}</td>
            <td>${formatBRL(totalComm)}</td>
            <td class="${totalDiff >= 0 ? 'col-diff-pos' : 'col-diff-neg'}">${(totalDiff >= 0 ? '+' : '') + formatBRL(totalDiff)}</td>
        </tr>
    `;

    // Totais
    document.getElementById('total-fee-5').textContent = formatBRL(totalFee);
    document.getElementById('total-comm-5').textContent = formatBRL(totalComm);
    document.getElementById('total-diff-5').textContent = (totalDiff >= 0 ? '+' : '') + formatBRL(totalDiff);

    // Gráfico barras
    renderBarras(barrasData);

    // Gráfico acumulado
    renderAcumulado(acumFeeArr.slice(1), acumCommArr.slice(1));

    // Fórmulas
    renderFormulas(auc0, taxaFee, cashbackPct, roa, fracao_fee, dadosTabela[1]);

    // Assessor
    renderAssessor(commVal1, feeVal1, repasseComm, repasseFee, ir);
}

// ---- GRÁFICO DE BARRAS ----
function renderBarras(data) {
    const container = document.getElementById('chart-barras');
    const maxVal = Math.max(...data.map(d => Math.max(d.fee, d.comm))) * 1.1;
    const H = 200;

    container.innerHTML = data.map(d => {
        const hFee = Math.max(4, (d.fee / maxVal) * H);
        const hComm = Math.max(4, (d.comm / maxVal) * H);
        return `
            <div class="chart-bar-group">
                <div class="bars-row" style="height:${H}px; align-items:flex-end;">
                    <div class="bar-fee" style="height:${hFee}px;" title="Fee: ${formatBRL(d.fee)}"></div>
                    <div class="bar-comm" style="height:${hComm}px;" title="Commission: ${formatBRL(d.comm)}"></div>
                </div>
                <span class="year-label">${d.ano}</span>
            </div>`;
    }).join('');
}

// ---- GRÁFICO ACUMULADO (SVG) ----
function renderAcumulado(acumFee, acumComm) {
    const container = document.getElementById('chart-acumulado');
    const W = container.clientWidth || 600;
    const H = 200;
    const pad = { top: 10, right: 20, bottom: 30, left: 70 };
    const maxV = Math.max(...acumFee, ...acumComm) * 1.1;
    const n = acumFee.length;

    const px = (i) => pad.left + (i / (n - 1)) * (W - pad.left - pad.right);
    const py = (v) => pad.top + (1 - v / maxV) * (H - pad.top - pad.bottom);

    const pathFee = acumFee.map((v, i) => `${i === 0 ? 'M' : 'L'}${px(i)},${py(v)}`).join(' ');
    const pathComm = acumComm.map((v, i) => `${i === 0 ? 'M' : 'L'}${px(i)},${py(v)}`).join(' ');

    const labels = ['Ano 1', 'Ano 2', 'Ano 3', 'Ano 4', 'Ano 5'];

    container.innerHTML = `
        <svg width="100%" height="${H}" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" style="overflow:visible">
            <!-- Grid lines -->
            ${[0.25, 0.5, 0.75, 1].map(f => {
                const y = py(maxV * f);
                return `<line x1="${pad.left}" y1="${y}" x2="${W - pad.right}" y2="${y}" stroke="rgba(255,255,255,0.05)" stroke-dasharray="4"/>
                        <text x="${pad.left - 6}" y="${y + 4}" fill="#8fa3c8" font-size="10" text-anchor="end">${formatBRL(maxV * f).replace('R$\xa0', 'R$ ')}</text>`;
            }).join('')}
            <!-- X Labels -->
            ${labels.map((l, i) => `<text x="${px(i)}" y="${H - 4}" fill="#8fa3c8" font-size="10" text-anchor="middle">${l}</text>`).join('')}
            <!-- Linhas -->
            <path d="${pathComm}" fill="none" stroke="#4a5568" stroke-width="2.5" stroke-dasharray="6 3"/>
            <path d="${pathFee}" fill="none" stroke="#1a6fc4" stroke-width="2.5"/>
            <!-- Pontos Fee -->
            ${acumFee.map((v, i) => `<circle cx="${px(i)}" cy="${py(v)}" r="4" fill="#1a6fc4"/>`).join('')}
            ${acumComm.map((v, i) => `<circle cx="${px(i)}" cy="${py(v)}" r="4" fill="#4a5568"/>`).join('')}
        </svg>`;
}

// ---- FÓRMULAS ----
function renderFormulas(auc, taxaFee, cashbackPct, roa, fracaoFee, d1) {
    const auc_eff = auc * fracaoFee;
    const feeBruto = auc_eff * taxaFee;
    const cashback = auc_eff * cashbackPct;
    const feeLiq = feeBruto - cashback;
    const commission = auc * roa;

    document.getElementById('formulas-text').innerHTML = `
        <div class="formula-line"><strong>AUC Efetivo (Fee):</strong> ${formatBRL(auc)} × ${(fracaoFee * 100).toFixed(0)}% = ${formatBRL(auc_eff)}</div>
        <div class="formula-line"><strong>Fee Bruto:</strong> ${formatBRL(auc_eff)} × ${(taxaFee * 100).toFixed(2)}% = ${formatBRL(feeBruto)}</div>
        <div class="formula-line"><strong>Cashback:</strong> ${formatBRL(auc_eff)} × ${(cashbackPct * 100).toFixed(2)}% = ${formatBRL(cashback)}</div>
        <div class="formula-line"><strong>Fee Líquido (Cliente paga):</strong> ${formatBRL(feeBruto)} − ${formatBRL(cashback)} = <strong style="color:#4da3ff">${formatBRL(feeLiq)}</strong></div>
        <div class="formula-line" style="margin-top:0.5rem"><strong>Commission Based (ROA):</strong> ${formatBRL(auc)} × ${(roa * 100).toFixed(2)}% = <strong style="color:#8fa3c8">${formatBRL(commission)}</strong></div>
    `;
}

// ---- ASSESSOR ----
function renderAssessor(commVal, feeVal, repasseComm, repasseFee, ir) {
    // 50% do mercado sobre commission
    const ganho50Comm = commVal * 0.50 * (1 - ir);
    // 70% Performance Invest sobre fee
    const ganho70Fee = feeVal * 0.70 * (1 - ir);
    const extra = ganho70Fee - ganho50Comm;

    document.getElementById('assessor-50-comm').textContent = formatBRL(ganho50Comm);
    document.getElementById('assessor-70-fee').textContent = formatBRL(ganho70Fee);

    const el = document.getElementById('assessor-ganho-extra');
    if (extra > 0) {
        el.textContent = `🚀 Na Performance Invest, você ganha ${formatBRL(extra)} a mais por ano neste cliente (70% Fee vs 50% Commission)`;
    } else if (extra < 0) {
        el.textContent = `⚠️ No modelo atual, o assessor ganha ${formatBRL(Math.abs(extra))} a mais do que no 70% Fee neste perfil`;
    } else {
        el.textContent = `Os modelos resultam no mesmo ganho para este perfil de cliente.`;
    }
}

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
    calcular();
    // Recalcula no resize para o SVG
    window.addEventListener('resize', calcular);
    // Recalcula quando checkbox muda
    document.getElementById('rv-no-fee').addEventListener('change', calcular);
});
