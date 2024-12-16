import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Lucas
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">Analista de Dados</p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        Profissional com sólida formação acadêmica e experiência em
        administração, em transição para uma carreira em análise de dados.
        Possuo habilidades analíticas avançadas, conhecimento em ferramentas de
        MS Office, Python e Power BI, além de uma forte capacidade de resolver
        problemas, visando contribuir para a tomada de decisões estratégicas
        baseadas em dados.
      </p>
    </div>
  );
}

export default Intro;
