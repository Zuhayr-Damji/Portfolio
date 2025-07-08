import ProcessStep from './ProcessStep';
import style from './Timeline.module.css';

const steps = [
  {
    title: 'We book a call',
    description: "I ask you some questions to understand your business' goals",
    backgroundColour: 'var(--primary-400)',
  },
  {
    title: 'I create a design',
    description: 'Once you approve it, I begin development and bring your vision to life',
    backgroundColour: 'var(--primary-500)',
  },
  {
    title: 'Your website goes live',
    description: 'Your site starts doing what it was built to do: grow your business',
    backgroundColour: 'var(--primary-600)',
  },
];

export default function Timeline() {
  return (
    <div className={style.timeline}>
      <div className={style.steps}>
        {steps.map((step, index) => (
          <ProcessStep
            key={index}
            stepHeading={step.title}
            stepSubHeading={step.description}
            inlineStyle={{ '--c': step.backgroundColour }}
          />
        ))}
      </div>
    </div>
  );
}
