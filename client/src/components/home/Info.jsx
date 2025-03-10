import React from 'react'

const Info = () => {
  return (
    <section className="info-wrapper space-y-8 bg-white">
      <h2 className='t-center'>Choose How You Learn with Our Multi-Modal Training Options</h2>
      <div className="row grid-2">
        <div className="col space-y-8">
          <article>
            <h3>Virtual Instructor-Led Training (vILT)</h3>
            <p>Benefit from traditional classroom instruction with the convenience of
              online access, featuring live, interactive sessions with expert instructors to engage and enrich your learning</p>
          </article>

          <article>
            <h3>e-Learning</h3>
            <p>Embrace a self-paced learning journey, offering the flexibility to study whenever and wherever suits you best.</p>
          </article>

          <article>
            <h3>Instructor-Led Training</h3>
            <p>Engage in a dynamic, face-to-face educational environment and hands-on practice facilitated by certified trainers</p>
          </article>

          <article>
            <h3>Blended Learning</h3>
            <p>Experience complete flexibility with Blended Classroom Learning, a unique approach including instructor-led training and on-demand learning.</p>
          </article>
        </div>

        <div className="col">
          <img src='/info.webp' className='hidden md:block w-full max-h-[400px] object-cover rounded-md' alt="" />
        </div>
      </div>
    </section>
  )
}

export default Info