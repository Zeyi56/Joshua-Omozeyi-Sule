// Simple project renderer and filter
const projects = [
  {
    id: 'p1',
    title: 'Naira Exchange Rate Trends',
    description: 'Analysis of NGN/USD exchange-rate trends, seasonality and annotated events; includes cleaned time-series and interactive charts.',
    tags: ['viz','etl'],
    link: 'projects/sales-dashboard/'
  },
  {
    id: 'p2',
    title: 'Naira Volatility Prediction',
    description: 'A small forecasting model that predicts high-volatility months for the Nigerian Naira using historical returns and macro features.',
    tags: ['ml'],
    link: 'projects/churn-prediction/'
  },
  {
    id: 'p3',
    title: 'Inflation Impact on Naira Purchasing Power',
    description: 'Exploratory analysis comparing inflation scenarios and the effect on purchasing power (real terms) for common consumer baskets.',
    tags: ['viz','stats'],
    link: 'projects/ab-analysis/'
  }
];

function renderProjects(filter='all'){
  const list = document.getElementById('project-list');
  list.innerHTML = '';
  const filtered = projects.filter(p=> filter==='all' || p.tags.includes(filter));
  if(filtered.length===0){ list.innerHTML = '<p class="muted">No projects found for this filter.</p>'; return }
  for(const p of filtered){
    const card = document.createElement('article');
    card.className = 'project-card';
    card.innerHTML = `
      <h4>${p.title}</h4>
      <div class="project-meta">${p.tags.join(' • ')}</div>
      <p>${p.description}</p>
      <div style="margin-top:.75rem"><a class="btn ghost" href="${p.link}" target="_blank">View</a></div>
    `;
    list.appendChild(card);
  }
}

document.addEventListener('DOMContentLoaded', ()=>{
  renderProjects();
  document.getElementById('proj-filter').addEventListener('change', (e)=>{
    renderProjects(e.target.value);
  });
});
