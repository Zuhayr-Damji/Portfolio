import ProcessStep from './ProcessStep';
import style from './Timeline.module.css';

const steps = [
  {
    title: '1. We book a call',
    description: "I ask you some questions to understand your business' goals",
  },
  {
    title: '2. I create a design',
    description: 'Once you approve it, I begin development and bring your vision to life',
  },
  {
    title: '3. Your website goes live',
    description: 'Your site starts doing what it was built to do: grow your business',
  },
];

export default function Timeline() {
  return (
    <div className={style.timeline}>
        {/* <div className={style.line}></div> */}
        <div className={style.steps}>
            {steps.map((step, index) => (
                <ProcessStep key={index} StepNumber={index + 1} StepHeading={step.title} StepSubHeading={step.description} />
            ))}
        </div>
    </div>
  );
}