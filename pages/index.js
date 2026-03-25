import Head from 'next/head';
import { useEffect, useMemo, useState } from 'react';

const focusAreas = [
  {
    title: 'Reasoning Systems',
    description:
      'We design systems that can interpret complex inputs, maintain structure across long chains of thought, and support reliable multi-step analysis.',
  },
  {
    title: 'Decision Support',
    description:
      'We build interfaces that help teams compare options, trace implications, and make higher-quality decisions in ambiguous environments.',
  },
  {
    title: 'Human Collaboration',
    description:
      'We focus on systems that augment human judgment with transparent, inspectable reasoning rather than replacing it.',
  },
];

const principles = [
  'Reasoning should be legible, not opaque.',
  'Systems should support human judgment in consequential decisions.',
  'Complexity should be organized into usable structure.',
  'Useful AI must be grounded in real-world workflows.',
];

const scenarios = [
  {
    name: 'Research synthesis',
    input: 'Combine findings across many papers and identify key uncertainties.',
    output: 'A structured map of evidence, assumptions, and open questions.',
  },
  {
    name: 'Policy analysis',
    input: 'Compare interventions with tradeoffs across stakeholders and time horizons.',
    output: 'An inspectable reasoning trace with scenarios, risks, and implications.',
  },
  {
    name: 'Strategic decisions',
    input: 'Evaluate options under uncertainty with incomplete and changing information.',
    output: 'Decision support that surfaces assumptions, alternatives, and downstream effects.',
  },
];

export default function Home() {
  const [activeScenario, setActiveScenario] = useState(0);
  const active = useMemo(() => scenarios[activeScenario], [activeScenario]);

  useEffect(() => {
    const onMouseMove = (event) => {
      const panels = document.querySelectorAll('[data-tilt]');
      panels.forEach((panel) => {
        const rect = panel.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const rotateY = ((x / rect.width) - 0.5) * 10;
        const rotateX = (((y / rect.height) - 0.5) * -1) * 10;
        panel.style.transform = `perspective(1200px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
      });
    };

    const onLeave = () => {
      const panels = document.querySelectorAll('[data-tilt]');
      panels.forEach((panel) => {
        panel.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseout', onLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseout', onLeave);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Advanced Reasoning Lab</title>
        <meta
          name="description"
          content="ARLab researches and builds AI systems with advanced reasoning capabilities that help people understand complexity and make more informed decisions."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="site-shell">
        <div className="ambient ambient-one" />
        <div className="ambient ambient-two" />

        <header className="topbar">
          <a className="brand" href="#home" aria-label="Advanced Reasoning Lab home">
            <span className="brand-mark">AR</span>
            <span className="brand-text">Advanced Reasoning Lab</span>
          </a>
          <nav className="main-nav" aria-label="Primary navigation">
            <a href="#home">Mission</a>
            <a href="#focus">Focus Areas</a>
            <a href="#vision">Vision</a>
            <a href="#principles">Principles</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <main>
          <section className="hero" id="home">
            <div className="hero-copy">
              <p className="eyebrow">ARLab</p>
              <h1>Building AI systems with advanced reasoning capabilities for real-world use.</h1>
              <p className="hero-text">
                ARLab researches and develops AI systems with advanced reasoning capabilities that help people understand
                complexity, organize information, and make more informed decisions.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contact">Discuss your work</a>
                <a className="button button-secondary" href="#focus">Explore our focus</a>
              </div>
              <div className="hero-metrics">
                <div className="metric">
                  <span className="metric-value">Mission</span>
                  <span className="metric-label">Develop advanced reasoning systems for complex problems.</span>
                </div>
                <div className="metric">
                  <span className="metric-value">Vision</span>
                  <span className="metric-label">Advance reasoning capabilities in systems people can rely on.</span>
                </div>
                <div className="metric">
                  <span className="metric-value">Impact</span>
                  <span className="metric-label">Improve how people understand complexity and make decisions.</span>
                </div>
              </div>
            </div>

            <div className="hero-card interactive-panel" data-tilt>
              <div className="reasoning-map" aria-hidden="true">
                <div className="map-core">
                  <span>Reasoning engine</span>
                </div>
                <span className="map-node map-node-top">Complex inputs</span>
                <span className="map-node map-node-right">Structured knowledge</span>
                <span className="map-node map-node-bottom">Decision support</span>
                <span className="map-node map-node-left">Human oversight</span>
              </div>
              <div className="system-flow">
                <div className="flow-step">
                  <p>Extract</p>
                  <strong>Extract signal from complex, unstructured information.</strong>
                </div>
                <div className="flow-step">
                  <p>Structure</p>
                  <strong>Organize information into forms that support analysis and reasoning.</strong>
                </div>
                <div className="flow-step">
                  <p>Reason</p>
                  <strong>Evaluate options, trace implications, and work through multi-step problems.</strong>
                </div>
                <div className="flow-step">
                  <p>Collaborate</p>
                  <strong>Support human judgment rather than remove it from the decision process.</strong>
                </div>
              </div>
              <div className="card-footer">
                <span>Designed to support informed decisions in complex environments.</span>
              </div>
            </div>
          </section>

          <section className="clients">
            <p className="section-label">Built for complex domains</p>
            <div className="client-grid">
              <span className="domain-pill">Scientific Research</span>
              <span className="domain-pill">Public Institutions</span>
              <span className="domain-pill">Enterprise Strategy</span>
              <span className="domain-pill">Policy & Governance</span>
            </div>
          </section>

          <section className="focus-section" id="focus">
            <div className="section-heading">
              <p className="section-label">Focus areas</p>
              <h2>Focused on reasoning where complexity matters.</h2>
              <p>
                Our work is centered on a small set of high-value workflows where better reasoning, clearer structure,
                and stronger human collaboration can materially improve outcomes.
              </p>
            </div>
            <div className="focus-grid">
              {focusAreas.map((item) => (
                <article className="focus-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="vision-section" id="vision">
            <div className="section-heading narrow">
              <p className="section-label">Interactive vision</p>
              <h2>How advanced reasoning can support real workflows.</h2>
              <p>Select a use case to see the kind of input-output transformation ARLab is built around.</p>
            </div>

            <div className="scenario-layout">
              <div className="scenario-list">
                {scenarios.map((scenario, index) => (
                  <button
                    key={scenario.name}
                    className={`scenario-button ${activeScenario === index ? 'active' : ''}`}
                    onClick={() => setActiveScenario(index)}
                    type="button"
                  >
                    <span>{scenario.name}</span>
                  </button>
                ))}
              </div>

              <div className="scenario-panel">
                <div className="scenario-block">
                  <p className="scenario-label">Input</p>
                  <h3>{active.name}</h3>
                  <p>{active.input}</p>
                </div>
                <div className="scenario-arrow">→</div>
                <div className="scenario-block output">
                  <p className="scenario-label">Reasoned output</p>
                  <h3>Structured support</h3>
                  <p>{active.output}</p>
                </div>
              </div>
            </div>
          </section>

          <section className="principles-section" id="principles">
            <div className="section-heading narrow">
              <p className="section-label">Principles</p>
              <h2>What guides our work.</h2>
            </div>
            <div className="principles-list">
              {principles.map((principle) => (
                <div className="principle-item" key={principle}>
                  <span className="principle-dot" />
                  <p>{principle}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="contact-section" id="contact">
            <div className="contact-card">
              <div>
                <p className="section-label">Contact</p>
                <h2>Start a conversation with ARLab.</h2>
                <p>
                  If you are exploring reasoning systems, decision support workflows, or high-complexity information
                  environments, we would love to hear about your work.
                </p>
              </div>
              <div className="contact-actions">
                <a className="button button-primary" href="mailto:hello@advancedreasoninglab.com">hello@advancedreasoninglab.com</a>
                <a className="button button-secondary" href="#home">Back to top</a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
