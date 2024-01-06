import {useEffect, useState} from 'react'
import Header from '../Header'
import './index.css'

const Products = () => {
  const [formDataList, setFormDataList] = useState([])

  useEffect(() => {
    // Retrieve data from localStorage
    const storedData = localStorage.getItem('formDataList')
    if (storedData) {
      setFormDataList(JSON.parse(storedData))
    }
    // localStorage.removeItem('formDataList')
  }, [])

  return (
    <div className="projects">
      <Header />

      <h2 className="p-heading">Projects</h2>
      <hr className="hr" />
      <ul>
        {formDataList.map(formData => (
          <li key={formData.id} className="card-image">
            <div className="project-card">
              <div className="data">
                <h1 className="projectName">{formData.projectName}</h1>
                <p className="descriptionn">{formData.description}</p>

                <a
                  href={formData.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-link"
                >
                  View Project
                </a>
              </div>
              <div className="side-image">
                {formData.image && (
                  <img src={formData.image} alt="any" className="side-image" />
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="footer">
        <div className="logos">
          <img
            src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1704511368/ph_instagram-logo-fill_xpb6cw.svg"
            alt="1"
          />
          <img
            src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1704511466/bi_linkedin_mvzdyb.svg"
            alt="1"
          />
          <img
            src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1704511549/bi_envelope-fill_j8ygn8.svg"
            alt="1"
          />
        </div>

        <div>
          <img
            src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1704511765/Madelyn_Torff_2021_i2guri.svg"
            alt="1"
          />
        </div>
      </div>

      <img
        src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1704479016/Vector_mgbi9o.svg"
        alt="any"
        className="last"
      />
    </div>
  )
}

export default Products
