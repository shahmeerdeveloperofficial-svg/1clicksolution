import { useState } from 'react'
import { Icon } from './Icons.jsx'
import Reveal from './Reveal.jsx'

const workflowSteps = [
  {
    step: '01',
    title: 'Inquiry & Admissions',
    subtitle: 'First Contact to Enrollment',
    desc: 'Record student inquiries, track status through Active, Won, or Passive stages, and convert accepted applicants with a single click.',
    icon: 'userPlus',
    tag: 'Admissions Office',
    tone: 'purple',
  },
  {
    step: '02',
    title: 'Registration & Sections',
    subtitle: 'Class & Capacity Allocation',
    desc: 'Allocate enrolled students to classrooms, sections, and class teachers while maintaining optimal seat capacity and gender ratios.',
    icon: 'graduationCap',
    tag: 'Academic Admin',
    tone: 'blue',
  },
  {
    step: '03',
    title: 'Daily Attendance & SMS',
    subtitle: 'One-Tap Verification',
    desc: 'Teachers take morning attendance on their mobile app or desktop; automated SMS notices notify parents of absentees instantly.',
    icon: 'calendarCheck',
    tag: 'Classroom & Mobile',
    tone: 'green',
  },
  {
    step: '04',
    title: 'Fee Invoicing & Ledgers',
    subtitle: 'Automated Financial Flow',
    desc: 'Generate monthly fee slips with scholarships, transport dues, and discount structures. Accept payments at counter or through bank reconciliations.',
    icon: 'wallet',
    tag: 'Accounts Dept',
    tone: 'amber',
  },
  {
    step: '05',
    title: 'Exams & Grade Records',
    subtitle: 'Assessment & Marks Entry',
    desc: 'Enter exam marks by subject and section. The system computes class positions, percentages, and performance graphs automatically.',
    icon: 'fileText',
    tag: 'Examination Cell',
    tone: 'pink',
  },
  {
    step: '06',
    title: 'Reports & Auditing',
    subtitle: 'Executive Decision Making',
    desc: 'Export official transcripts, student character certificates, attendance percentages, and annual expense summaries to Excel or PDF.',
    icon: 'barChart',
    tag: 'Principal & Chairman',
    tone: 'teal',
  },
]

export default function WorkflowTimeline() {
  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <section className="section section--workflow" id="workflow">
      <div className="container">
        <Reveal className="section-head text-center">
          <span className="section-kicker">End-to-End Workflow</span>
          <h2>From the First Inquiry to the Final Report</h2>
          <p>
            Every department operates on the same synchronized database, eliminating duplicate paperwork
            and data mismatch across your school.
          </p>
        </Reveal>

        {/* Interactive Step Timeline Pipeline */}
        <Reveal className="workflow-pipeline">
          <div className="pipeline-track" role="tablist" aria-label="School Workflow Pipeline">
            {workflowSteps.map((s, idx) => (
              <button
                key={s.step}
                type="button"
                role="tab"
                aria-selected={activeIdx === idx}
                className={`pipeline-node tone-${s.tone}${activeIdx === idx ? ' is-active' : ''}`}
                onClick={() => setActiveIdx(idx)}
              >
                <span className="node-number">{s.step}</span>
                <span className="node-icon-box">
                  <Icon name={s.icon} size={20} />
                </span>
                <span className="node-title">{s.title}</span>
                {idx < workflowSteps.length - 1 && (
                  <span className="node-connector" aria-hidden="true" />
                )}
              </button>
            ))}
          </div>

          {/* Active Step Highlight Card */}
          <div className="workflow-detail-card">
            <div className="detail-card-head">
              <span className={`detail-step-badge tone-${workflowSteps[activeIdx].tone}`}>
                Step {workflowSteps[activeIdx].step}
              </span>
              <span className="detail-tag">{workflowSteps[activeIdx].tag}</span>
            </div>

            <h3>{workflowSteps[activeIdx].title}</h3>
            <h4 className="detail-subtitle">{workflowSteps[activeIdx].subtitle}</h4>
            <p className="detail-desc">{workflowSteps[activeIdx].desc}</p>

            <div className="detail-controls">
              <button
                type="button"
                className="btn btn--secondary btn--sm"
                disabled={activeIdx === 0}
                onClick={() => setActiveIdx((prev) => Math.max(0, prev - 1))}
              >
                Previous Step
              </button>
              <button
                type="button"
                className="btn btn--primary btn--sm"
                disabled={activeIdx === workflowSteps.length - 1}
                onClick={() => setActiveIdx((prev) => Math.min(workflowSteps.length - 1, prev + 1))}
              >
                Next Step
                <Icon name="arrowRight" size={16} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
