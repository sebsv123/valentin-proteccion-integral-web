import a from './tax-reading-delivery.module.css';

export function TaxReading({ kind }: { kind: 'empresa' | 'autonomo' }) {
  return <div className={a.taxReading}><span>Prima elegible</span><span aria-hidden="true">→</span><span>Requisitos legales</span><span aria-hidden="true">→</span><strong>{kind === 'empresa' ? 'Posible exención' : 'Posible deducción'}</strong></div>;
}
