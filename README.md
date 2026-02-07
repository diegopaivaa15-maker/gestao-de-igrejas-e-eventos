Sistema Igreja & Eventos

Sistema web administrativo desenvolvido para gestão de igrejas e eventos, permitindo controle de membros, escalas de serviço, doações simuladas e avisos internos, com dashboard de métricas e arquitetura moderna baseada em Angular Standalone + Signals.

Projeto construído com foco em boas práticas, componentização, estado reativo e estrutura de portfólio profissional.

A aplicação foi desenvolvida como um sistema completo front-end para administração de rotinas de igreja/eventos, simulando um ambiente real de gestão com múltiplos módulos integrados e dashboard central.

O projeto demonstra:

Arquitetura Angular moderna

Gerenciamento de estado com Signals

Componentes Standalone

Estrutura modular escalável

UI responsiva

Simulação de API (fake data)

Padrão de código pronto para backend real

  -Tecnologias Utilizadas

Angular 17+

TypeScript

Standalone Components

Angular Signals (estado reativo)

Angular Router (rotas lazy load)

Reactive Patterns

Tailwind CSS (layout e responsividade)

Vite (builder Angular moderno)

HTML5 + CSS3

  -Arquitetura Aplicada

O sistema foi estruturado utilizando:

  -Standalone Components

Sem NgModules — arquitetura moderna recomendada pelo Angular.

  -Stores com Signals

Estado global centralizado em services reativos:

membros.store

escalas.store

doacoes.store

avisos.store

Permite compartilhamento de dados entre telas e dashboard.

  -Lazy Load de Rotas

Cada módulo carregado sob demanda:

membros

escalas

doações

avisos

dashboard

Melhora performance e escalabilidade.

  -Componentização de Layout

Layout base reutilizável com:

Header

Sidebar

Footer

RouterOutlet central

-Módulos Implementados
-Módulo de Membros

CRUD completo

Cadastro de nome e contato

Listagem dinâmica

Exclusão de registros

Estado reativo

Demonstra: formulários, lista dinâmica, operações CRUD front-end.

  -Módulo de Escalas

Cadastro de escalas

Associação com membros

Controle por data

Edição e exclusão

Visualização de próximas escalas

Demonstra: relacionamento de dados e controle de agenda.

  -Módulo de Doações (Simulado)

Registro de doações fake

Listagem

Exclusão

Soma automática

Filtro por período

Total calculado com computed signals

Demonstra: cálculos reativos e filtros por data.

  -Módulo de Avisos

CRUD completo

Marcação de aviso importante

Destaque visual

Ordenação por data

Base para exibição no dashboard

Demonstra: prioridade lógica + destaque condicional.

  -Dashboard

Resumo geral do sistema:

Total de membros

Total de doações

Próximas escalas

Avisos recentes

Cards de métricas

Layout responsivo

Demonstra: agregação de dados multi-store.

  -Responsividade

Interface adaptável com Tailwind:

Grid responsivo

Sidebar oculta em mobile

Cards adaptativos

Layout mobile-first

  -Padronização Visual

Criado mini design system com:

Classes reutilizáveis

Cards padrão

Botões padronizados

Hierarquia visual consistente

  -Conceitos Aplicados

Estado reativo moderno

Computed values

Imutabilidade

Lazy loading

Separação de responsabilidades

DRY (Don't Repeat Yourself)

Component driven design
