import s from './TimelineCard.module.css'
import { Job } from 'data/jobs'

interface Props{
    job: Job
}

const TimelineCard: React.FC<Props> = ({job}) => {
    return (
        <div className={`${s.container} ${job.cssClass == 'right' ? s.right : s.left}`}>
        <div className={s.content}>
          <h2>{`${job.name} - ${job.year}`}</h2>
          <h3>{job.title}</h3>
          <p>
            {job.description}
          </p>
        </div>
      </div>
    )
}

export default TimelineCard;