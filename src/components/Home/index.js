import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Header from '../Header'
import './index.css'

const Home = () => {
  const [projectName, setProjectName] = useState('')
  const [projectLink, setProjectLink] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [formDataList, setFormDataList] = useState([])

  useEffect(() => {
    const storedData = localStorage.getItem('formDataList')
    if (storedData) {
      setFormDataList(JSON.parse(storedData))
    }
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    const formData = {projectName, projectLink, description, image}
    setFormDataList(prevDataArray => [...prevDataArray, formData])
    localStorage.setItem(
      'formDataList',
      JSON.stringify([...formDataList, formData]),
    )
    setProjectName('')
    setProjectLink('')
    setDescription('')
    setImage('')
  }

  const handleImageChange = e => {
    const img = e.target.files[0]
    console.log(img)

    const urlCreator = window.URL || window.webkitURL
    const imageUrl = urlCreator.createObjectURL(img)

    console.log(imageUrl)

    setImage(imageUrl)
  }

  return (
    <div className="home">
      <Header />
      <div className="home-container">
        <div className="home-content">
          <p className="developer">UI/UX developer</p>
          <h1 className="home-heading">
            Hello,My name is shiva shankara prasad
          </h1>
          {/* <img
            src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1704477301/image_2_fn5e6k.jpg"
            alt="dresses to be noticed"
            className="home-mobile-img"
          /> */}
          {/* <div className="home-mobile-img">
            <img
              src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1704509705/yellow-bg_zrtw6z.svg"
              alt="Background"
              className="background-image"
            />
            <img
              src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1704509863/pexels-artem-beliaikin-1832323-removebg-preview_jm43fp.svg"
              alt="Overlay"
              className="overlay-image"
            />
          </div> */}
          <p className="home-description">
            Hello my name is shiva shankara prasad. I have Completed my post
            graduation in Master of computer applications in kakatiya
            university. I have learned fullstack development course in NXTWAVE.
            currently I am working as a fullstack developer in Wheresoft
            Technologies.
          </p>
          <div className="d-flex">
            <Link to="/projects" className="nav-link">
              <button type="button" className="shop-now-button">
                Projects
              </button>
            </Link>
            <button type="button" className="linked-button">
              Linkdin
            </button>
          </div>
        </div>

        {/* <img
          src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1704477301/image_2_fn5e6k.jpg"
          alt="dresses to be noticed"
          className="home-desktop-img"
        /> */}

        <div className="image-container">
          <img
            src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1704509705/yellow-bg_zrtw6z.svg"
            alt="Background"
            className="background-image"
          />
          <img
            src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1704509863/pexels-artem-beliaikin-1832323-removebg-preview_jm43fp.svg"
            alt="Overlay"
            className="overlay-image"
          />
        </div>
      </div>

      <div className="project-container">
        <h1 className="text-center">Add Project</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="p-name">Project Name</label>
            <input
              id="p-name"
              type="text"
              className="form-control"
              value={projectName}
              onChange={e => setProjectName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="p-link">Project Link</label>
            <input
              id="p-link"
              type="text"
              className="form-control"
              value={projectLink}
              onChange={e => setProjectLink(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="p-description">Description</label>
            <textarea
              id="p-description"
              type="text"
              className="form-control"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="image">choose Project Image</label>
            <input
              type="file"
              id="image"
              className="file-control"
              onChange={handleImageChange}
            />
          </div>

          <button type="submit" className="add-button">
            Add
          </button>
        </form>
      </div>

      <img
        src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1704479016/Vector_mgbi9o.svg"
        alt="any"
        className="last"
      />
    </div>
  )
}

export default Home
