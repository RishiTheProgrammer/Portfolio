import { Col } from 'react-bootstrap'
import Badge from 'react-bootstrap/Badge';

const SkillCard = ({icon, title, level, text, badgeBg, iconClassName, xs, sm, md, lg, xl, CardClassName}) => {
  return (
    <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl} className={CardClassName}>
        <div className='d-flex justify-content-between gap-3'>
            <div className="d-flex align-items-start justify-content-center">
                <span className={iconClassName}>{icon}</span>
            </div>
            <div>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
        <Badge style={{backgroundColor: {badgeBg}}} className='fs-6'>{level}</Badge>
    </Col>
  )
}

export default SkillCard