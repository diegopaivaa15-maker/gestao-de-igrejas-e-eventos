
🏛️ Sistema Administrativo para Igrejas e Eventos

Sistema web administrativo desenvolvido para gestão de membros, escalas de serviço, doações simuladas e avisos internos, com dashboard central integrado.

Construído com arquitetura moderna baseada em Angular Standalone + Signals, simulando um ambiente real de gestão multi-módulos.

🎯 Objetivo do Projeto

Este projeto foi desenvolvido como um sistema front-end completo, com foco em:

Arquitetura Angular moderna

Gerenciamento de estado reativo com Signals

Estrutura modular escalável

Componentização avançada

Simulação de ambiente real corporativo

Código preparado para integração futura com backend

Projeto ideal para demonstrar domínio em Angular 17+, arquitetura limpa e organização profissional de código.

🧱 Tecnologias Utilizadas

Framework: Angular 17+

Linguagem: TypeScript

Estado Reativo: Angular Signals

Estilização: Tailwind CSS

Build Tool: Vite

HTML5 + CSS3

Angular Router (Lazy Loading)

🏗️ Arquitetura Aplicada
✅ Standalone Components

Arquitetura moderna sem uso de NgModules, seguindo as recomendações atuais do Angular.

✅ Gerenciamento de Estado com Signals

Stores reativas centralizadas:

membros.store

escalas.store

doacoes.store

avisos.store

Permite:

Compartilhamento global de estado

Atualização automática da UI

Cálculos reativos

Escalabilidade limpa

✅ Lazy Loading de Rotas

Módulos carregados sob demanda:

/membros

/escalas

/doacoes

/avisos

/dashboard

Melhora performance e prepara o sistema para crescimento.

✅ Layout Reutilizável

Estrutura base composta por:

Header

Sidebar

Footer

RouterOutlet central

Seguindo princípio de separação de responsabilidades.

📦 Módulos Implementados
👥 Módulo de Membros

CRUD completo

Cadastro de nome e contato

Listagem dinâmica

Exclusão de registros

Estado reativo com Signals

Demonstra: formulários reativos, operações CRUD e atualização automática da UI.

📅 Módulo de Escalas

Cadastro de escalas

Associação com membros

Edição e exclusão

Visualização de próximas escalas

Demonstra: relacionamento de dados e controle de agenda.

💰 Módulo de Doações (Simulado)

Registro de doações fake

Listagem dinâmica

Exclusão

Soma automática

Filtro por período

Total calculado com Signals computados

Demonstra: cálculos reativos, filtros e agregação de dados.

📢 Módulo de Avisos

CRUD completo

Marcação de prioridade

Ordenação por data

Destaque visual condicional

Demonstra: regras de negócio e lógica condicional.

📊 Dashboard Central

Resumo geral do sistema:

Total de membros

Total de doações

Próximas escalas

Avisos importantes

Cards responsivos

Demonstra: agregação de múltiplas stores e visão estratégica de dados.

📱 Responsividade

Interface construída com Tailwind CSS:

Grid responsivo

Sidebar adaptável

Cards flexíveis

Layout otimizado para mobile

🎨 Padronização Visual

Mini Design System interno com:

Classes utilitárias reutilizáveis

Componentes de card padronizados

Botões estilizados

Hierarquia visual consistente

🧠 Conceitos Aplicados

Estado reativo moderno

Signals computados

Imutabilidade

Lazy loading

Separação de responsabilidades

DRY (Don't Repeat Yourself)

Arquitetura orientada a componentes

Estrutura pronta para backend real


