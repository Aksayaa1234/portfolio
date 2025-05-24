

const Project=({ title, image, description, category, technologies })=>{
    return (
        <div className="project-container col-12 col-md-6 col-lg-4 mb-2">
            <div className="card rounded shadow">
                <div className="card-img-container position-relative overflow-hidden">
                    <img className="card-img-top position-relative" src={image} alt={title}/>
                    <div className="card-img-overlay title-container d-flex justify-content-center align-items-center">
                            <h3 className="project-title">{title}</h3>
                    </div>
                    <div className="card-img-overlay content-container p-2 position-absolute">
                        <h6 className="content mb-0">{title}</h6>
                        <p className="content">{description}</p>
                    </div>
                </div>
                <div className="card-body p-1 px-3 text-center">
                    <h4 className="text-center mb-2 fw-small">{category}</h4>
                    <ul className="list-inline mb-1 d-flex justify-content-evenly">
                        {technologies.map((tech, index) => (
                            <li key={index} className="list-inline-item">
                                <span className="badge badge-pill m-1">{tech}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Project;