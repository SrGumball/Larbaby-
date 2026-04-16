import { Package, Smartphone, Zap, Tag } from './Icons';

const Differentials = () => {
  const diffs = [
    {
      icon: <Zap size={30} />,
      title: 'Qualidade Premium',
      text: 'Tecidos suaves e duráveis que respeitam a pele sensível do bebê.',
      color: '#F06292'
    },
    {
      icon: <Smartphone size={30} />,
      title: 'Atendimento Próximo',
      text: 'Fale conosco pelo WhatsApp e tenha uma consultoria personalizada.',
      color: '#4FC3F7'
    },
    {
      icon: <Package size={30} />,
      title: 'Novidades Semanais',
      text: 'Sempre antenados com as últimas tendências da moda infantil.',
      color: '#FFB74D'
    },
    {
      icon: <Tag size={30} />,
      title: 'Preço Justo',
      text: 'O melhor custo-benefício para vestir seu filho com elegância.',
      color: '#81C784'
    }
  ];

  return (
    <section id="differentials" className="diffs">
      <div className="container">
        <h2 className="section-title text-center">Por que escolher a Lar Baby?</h2>
        <p className="section-subtitle text-center">
          Diferenciais que tornam nossa loja a favorita das mamães de Promissão.
        </p>

        <div className="diff-grid">
          {diffs.map((diff, index) => (
            <div key={index} className="diff-card">
              <div className="icon-box" style={{ backgroundColor: `${diff.color}15`, color: diff.color }}>
                {diff.icon}
              </div>
              <h3>{diff.title}</h3>
              <p>{diff.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
