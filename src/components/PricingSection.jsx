import { useState } from 'react'
import { pricingPlans, pricingComparison } from '../data/site.js'
import { Icon } from './Icons.jsx'
import Reveal from './Reveal.jsx'

function PlanCard({ plan, onSelectPlan }) {
  return (
    <article
      className={`pricing-card${plan.highlighted ? ' pricing-card--featured' : ''}`}
      aria-label={`${plan.name} pricing tier`}
    >
      {plan.highlighted && (
        <div className="pricing-card-banner">
          <Icon name="sparkles" size={14} />
          <span>Recommended Configuration</span>
        </div>
      )}

      <div className="pricing-card-header">
        <div className="pricing-card-title-row">
          <div>
            <span className="pricing-badge">{plan.badge}</span>
            <h3 className="pricing-plan-name">{plan.name}</h3>
          </div>
          {plan.tag && <span className="pricing-tag">{plan.tag}</span>}
        </div>
        <p className="pricing-audience">{plan.audience}</p>
        <p className="pricing-desc">{plan.description}</p>
      </div>

      <div className="pricing-card-price">
        <div className="price-amount-wrap">
          <span className="price-amount">{plan.priceLabel}</span>
        </div>
        <p className="price-subtext">{plan.priceSubtext}</p>
      </div>

      <div className="pricing-card-cta">
        <a
          href="#contact"
          className={`btn ${plan.highlighted ? 'btn--primary' : 'btn--secondary'} btn--lg btn--full`}
          onClick={() => onSelectPlan && onSelectPlan(plan.name)}
        >
          {plan.ctaText}
        </a>
      </div>

      <div className="pricing-card-divider" />

      <div className="pricing-card-features">
        <h4 className="features-head">What's included in {plan.name}:</h4>
        <ul className="pricing-feature-list">
          {plan.features.map((feat) => (
            <li
              key={feat.text}
              className={`pricing-feat-item${!feat.included ? ' is-excluded' : ''}`}
            >
              {feat.included ? (
                <span className="feat-icon feat-icon--check">
                  <Icon name="check" size={15} />
                </span>
              ) : (
                <span className="feat-icon feat-icon--minus">
                  <Icon name="minus" size={13} />
                </span>
              )}
              <span className="feat-text">
                {feat.text}
                {feat.note && <span className="feat-note"> — {feat.note}</span>}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

function PricingComparisonTable() {
  const [open, setOpen] = useState(false)

  return (
    <div className="pricing-comparison-wrap">
      <div className="pricing-comparison-toggle-row">
        <button
          type="button"
          className="btn btn--secondary pricing-comparison-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="pricing-comparison-table"
        >
          <span>{open ? 'Hide Detailed Plan Comparison' : 'Compare Detailed Plan Capabilities'}</span>
          <Icon name={open ? 'chevronUp' : 'chevronDown'} size={18} />
        </button>
      </div>

      {open && (
        <div id="pricing-comparison-table" className="comparison-table-container">
          <div className="comparison-table-scroll">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th scope="col" className="col-feature">Platform Capabilities</th>
                  <th scope="col" className="col-plan">Starter</th>
                  <th scope="col" className="col-plan col-plan--featured">Professional</th>
                  <th scope="col" className="col-plan">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {pricingComparison.map((cat) => (
                  <tr key={cat.category} className="cat-group-row">
                    <td colSpan={4} className="cat-group-cell">
                      <strong>{cat.category}</strong>
                    </td>
                  </tr>
                )).flatMap((catRow, catIndex) => {
                  const cat = pricingComparison[catIndex]
                  const rows = cat.items.map((item) => (
                    <tr key={item.name} className="feature-row">
                      <th scope="row" className="feature-name">{item.name}</th>
                      <td className="feature-val">
                        {renderCell(item.starter, item.starterNote)}
                      </td>
                      <td className="feature-val feature-val--featured">
                        {renderCell(item.professional)}
                      </td>
                      <td className="feature-val">
                        {renderCell(item.enterprise)}
                      </td>
                    </tr>
                  ))
                  return [catRow, ...rows]
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

function renderCell(val, note) {
  if (val === true) {
    return (
      <span className="table-check text-blue" title="Included">
        <Icon name="check" size={17} />
      </span>
    )
  }
  if (val === false) {
    return (
      <span className="table-dash text-muted" title={note || 'Not included'}>
        <Icon name="minus" size={15} />
      </span>
    )
  }
  return <span className="table-text-badge">{val}</span>
}

export default function PricingSection({ onSelectPlan }) {
  return (
    <section className="section section--pricing" id="pricing">
      <div className="pricing-bg" aria-hidden="true">
        <span className="pricing-ambient-a" />
        <span className="pricing-ambient-b" />
      </div>

      <div className="container">
        <Reveal className="section-head">
          <span className="hero-kicker kicker-pricing">
            <Icon name="wallet" size={14} />
            Transparent Licensing
          </span>
          <h2>Simple Plans for Every Institution</h2>
          <p>
            Explore a suitable 1 Click Solution package for your institution's needs and management requirements.
          </p>
        </Reveal>

        {/* Pricing Cards Grid */}
        <Reveal host className="pricing-grid">
          {pricingPlans.map((plan) => (
            <div key={plan.id} className="stg">
              <PlanCard plan={plan} onSelectPlan={onSelectPlan} />
            </div>
          ))}
        </Reveal>

        {/* Interactive Comparison Drawer */}
        <PricingComparisonTable />

        {/* Transparent Institutional Notice */}
        <div className="pricing-notice-box">
          <div className="pricing-notice-icon">
            <Icon name="info" size={20} />
          </div>
          <div className="pricing-notice-content">
            <h4>Institutional Licensing &amp; Custom Deployments</h4>
            <p>
              Plan tiers and entitlements shown above are provisional design configurations. Because every school,
              college, and academy operates at unique scales, official proposals are tailored directly to your enrolled
              student count, campus branches, and specific module requirements.
            </p>
          </div>
          <a
            href="#contact"
            className="btn btn--secondary btn--sm"
            onClick={() => onSelectPlan && onSelectPlan('General Quote')}
          >
            Talk to an Advisor
          </a>
        </div>
      </div>
    </section>
  )
}
