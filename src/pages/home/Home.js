import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <img
        src="https://s3-us-west-2.amazonaws.com/robogarden-new/Articles/upload/blogs/fb-leverage-of-coding.jpg"
        alt="landing-page"
      />
      <div className="home__container">
        <img
          src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="stuf"
        />
        <div className="home__text">
          <h1>Educators first, developers second</h1>
          <p>
            It’s not good enough to be taught by a programmer who isn’t also a
            skilled educator. Actualize only hires Lead Instructors who are
            experienced educators in addition to being experienced software
            developers. Each Lead Instructor is empathic, funny, engaging, and
            most importantly, loves to teach. That's why many of our graduates
            have told us that their Lead Instructor is hands-down the best part
            of their Actualize experience.
          </p>
        </div>
      </div>
      <div className="home__container">
        <div className="home__text">
          <h1>A real connection between you and your instructor</h1>
          <p>
            Some bootcamps pre-record their lessons or have a remote instructor
            broadcast to multiple cohorts simultaneously. What makes the
            Actualize experience so powerful is that your expert Lead Instructor
            is dedicated exclusively to your small cohort. We’re passionate
            about education, so we don’t cut corners to achieve scale. The Lead
            Instructor’s full-time job is to be there for your cohort alone.
            Actualize is about the very real relationship between an expert Lead
            Instructor, and you, the student.
          </p>
        </div>
        <img
          src="https://images.pexels.com/photos/7374/startup-photos.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="stuf"
        />
      </div>
      <div className="home__container">
        <img
          src="https://www.eu-startups.com/wp-content/uploads/2020/06/woman-coding.jpg"
          alt="stuf"
        />
        <div className="home__text">
          <h1>Structured job support, even after you graduate</h1>
          <p>
            Our unique job-hunting curriculum, which we refer to as Job Hacking,
            begins from the very first day and is integrated throughout the
            bootcamp. We employ the same educational expertise to the Job
            Hacking curriculum as we do with our coding curriculum. Working with
            our Career Advisor, our students start with the basics - assessing
            their previous experience and transferrable skills, building a great
            resume and online presence, and progress to the point where they’re
            connecting with developers and employers in the industry. After
            completing the live program, graduates have access to continued job
            support, which includes group projects for an enhanced portfolio and
            accountability groups to ensure success in their job hunt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
