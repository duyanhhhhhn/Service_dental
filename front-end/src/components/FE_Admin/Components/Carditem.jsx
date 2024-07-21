import React from 'react'

export default function CardItem({title,content,cardColor,Icon}) {
  return (
    <section className='d-inline-flex  '>

<div class={`card-header ${cardColor} `}  >
 
  <div class="card-header-content">
    
    <h3 class="card-header-title"> <Icon/> {title}</h3>
    <h4 class="card-header-para">
    {content}
      </h4>
  </div>
</div>
    </section>
  )
}
