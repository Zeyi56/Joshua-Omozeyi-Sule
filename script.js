// Simple project renderer and filter
const projects = [
  {
    id: 'p1',
    title: 'Sales Dashboard — Retail Chain',
    description: 'Interactive dashboard showing sales KPIs, cohort analysis, and seasonality insights using SQL + Tableau.',
    tags: ['viz','etl'],
    link: 'projects/sales-dashboard/'
  },
  {
    id: 'p2',
    title: 'Churn Prediction',
    description: 'Built a classification model to predict churn; productionized features and evaluated business impact.',
    tags: ['ml'],
    link: 'projects/churn-prediction/'
  },
  {
    id: 'p3',
    title: 'Marketing A/B Analysis',
    description: 'Designed and analyzed A/B tests for marketing campaigns; computed power and sample-size planning.',
    tags: ['stats'],
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
