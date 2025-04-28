import React from 'react'

const Tour = ({img,title,date,icon,country,days,amount}) => {
  return (
    <article class="tour-card">
      <div class="tour-img-container">
        <img src={img} class="tour-img" alt="" />
              <p class="tour-date">{date}</p>
      </div>
      <div class="tour-info">
        <div class="tour-title">
                  <h4>{title }</h4>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae
          tempore voluptatum maxime reprehenderit eum quod exercitationem fugit,
          qui corporis.
        </p>
        <div class="tour-footer">
          <p>
            <span>
              <i class={icon}></i>
            </span>{" "}
            {country}
          </p>
                  <p>{days }</p>
                  <p>{amount}</p>
        </div>
      </div>
    </article>
  );
}

export default Tour