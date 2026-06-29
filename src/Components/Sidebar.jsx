import { Col } from 'react-bootstrap'

const Sidebar = () => {
  return (
    <Col lg={2} className="sidebar py-2 d-lg-block d-none">
        <img src="https://picsum.photos/150" className="rounded-circle border-2 border-primary border" />
        <h2 className='text-center display-6 fw-bolder'>Rishi</h2>
        <ul className="nav nav-pills flex-column">
  <li className="nav-item">
    <a className="nav-link" href="#"><i className="bi bi-house me-2"></i> Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#"><i className="bi bi-person me-2"></i> About</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#"><i className="bi bi-puzzle me-2"></i> Skills</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#"><i className="bi bi-box me-2"></i> Projects</a>
  </li>
  <li className="nav-item">
    <a className="nav-link"  href="#"><i className="bi bi-envelope me-2"></i> Contact</a>
    </li>
</ul>

    <div className="d-flex justify-content-between align-items-center mt-3">
        <a href="" className='fs-4'><i className="bi bi-github"></i></a>
        <a href="" className='fs-4'><i className="bi bi-google"></i></a>
        <a href="" className='fs-4'>&#xF1F7;</a>
    </div>
    </Col>
  )
}

export default Sidebar