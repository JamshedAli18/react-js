import React from 'react'

const Card = (propsfirst) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img 
          src={propsfirst.image}
          alt="Profile" 
          className="card-image" 
        />
        <div className="bookmark-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
        </div>
      </div>

      <div className="card-content">
        <div className="card-header">
          <h2 className="card-name">{propsfirst.name}</h2>
          <svg className="verified-icon" width="24" height="24" viewBox="0 0 24 24" fill="#1DA1F2">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>

        <p className="card-description">
          {propsfirst.description}
        </p>

        <div className="card-stats">
          <div className="stat-item">
            <div className="stat-value">
              <svg className="star-icon" width="20" height="20" viewBox="0 0 24 24" fill="#FFA500">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              {propsfirst.rating}
            </div>
            <div className="stat-label">Rating</div>
          </div>

          <div className="stat-item">
            <div className="stat-value">{propsfirst.earned}</div>
            <div className="stat-label">Earned</div>
          </div>

          <div className="stat-item">
            <div className="stat-value">{propsfirst.rate}</div>
            <div className="stat-label">Rate</div>
          </div>
        </div>

        <button className="contact-button">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <rect x="3" y="5" width="18" height="14" rx="2"></rect>
            <path d="M3 7l9 6 9-6"></path>
          </svg>
          Get In Touch
        </button>
      </div>
    </div>
  )
}

export default Card
