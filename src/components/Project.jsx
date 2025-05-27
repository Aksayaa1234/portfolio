

const Project=({ title, image, description, category, technologies, github })=>{
    return (
        <div className="project-container col-12 col-md-6 col-lg-4 mb-4">
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark">
            <div className="card rounded shadow">
                <div className="card-img-container position-relative overflow-hidden">
                    <img className="card-img-top position-relative" src={image} alt={title}/>
                    <div className="card-img-overlay title-container d-flex justify-content-center align-items-center">
                            <h3 className="project-title">{title}</h3>
                    </div>
                    <div className="card-img-overlay content-container p-2 position-absolute">
                        <h5 className="content mb-0">{title}</h5>
                        <p className="content">{description}</p>
                    </div>
                </div>
                <div className="card-body p-1 px-3 text-center">
                    <h5 className="text-center mb-1 ">{category}</h5>
                    <ul className="list-inline m-0 d-flex justify-content-evenly">
                        {technologies.map((tech, index) => (
                            <li key={index} className="list-inline-item mb-1">
                                <span className="badge badge-pill">{tech}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            </a>
        </div>
    )
}

export default Project;