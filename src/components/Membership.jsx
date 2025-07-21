import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";

const Membership = () => {
  return (
    <>
      <section className="membership py-4">
        <div className="container mb-4">
          <div className="row mx-auto text-center">
            <dic className="col-12">
              <h2 className='display-5 fw-bold text-primary'>Join the Pathshala Community</h2>
              <p className='fs-5'>At Pathshala, we’re building a vibrant community where learners get the right support, and mentors get a chance to guide the next generation. Whether you're a student seeking help, or a professional/educator willing to give back — you’re welcome here!</p>
            </dic>
          </div>
        </div>

        <div className="container mb-5">
          <div className="row mx-auto">
            <div className="col-md-6 py-3">
              <div className="member-box border p-3">
                <h3 className='text-center fw-bold text-danger'>For Students</h3>
                <dl>
                  <dt>Are you a school or college student looking for:</dt>
                  <dd>- Academic support and study resources?</dd>
                  <dd>- Career guidance and mentorship?</dd>
                  <dd>- Tips for exams, time management, and motivation?</dd>
                  <dd>- A friendly, helpful learning community?</dd>

                  <dt>Then you're in the right place! Fill out the form below and become a Pathshala Member to unlock all of this for free.</dt>
                </dl>
              </div>
            </div>

            <div className="col-md-6 py-3">
              <div className="member-box border p-3">
                <h3 className='text-center fw-bold text-danger'>For Mentors / Volunteers</h3>
                <dl>
                  <dt>Are you a:</dt>
                  <dd>- Working professional, teacher or subject expertor</dd>
                  <dd>- College student with valuable experience to share?</dd>

                  <dt>Then join us as a Pathshala Mentor or Volunteer and:</dt>
                  <dd>- Guide students in academics or career paths</dd>
                  <dd>- Answer doubts or conduct small sessions</dd>
                  <dd>- Contribute ideas, blog posts, or learning materials</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="container member-form rounded-4 py-4 mb-4">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdPE9ij-ZEg-sG0VbeKIQ1iu--GcZ-Vd65mFLHqQBZEzsViJQ/viewform?embedded=true"
                width="100%"
                height="800"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                title='Membership Form'>
                Loading
              </iframe>
            </div>
          </div>
        </div>

        <div className="container mb-3">
          <div className="row mx-auto">
            <div className="col-12 py-3 text-center">
              <h3 className='fw-bold text-success mb-3'>Let’s Learn and Grow Together</h3>
              <p className='fs-5'>Pathshala is more than a platform — it’s a movement for accessible quality education.</p>
              <p className='fs-5'>Thank you for choosing to be part of this mission — as a learner or a guide.</p>
              <p className='fs-5'>Together, we’re shaping brighter futures.</p>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Membership;
