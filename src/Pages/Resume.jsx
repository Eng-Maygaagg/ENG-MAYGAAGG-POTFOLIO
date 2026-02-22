import React from 'react';
import MyProfile from '../assets/MyPicture.jpeg'

function ResumePage() {
    return ( 
        <>
            <section className="Profile_Contact">
                <div className="profile_re">
                    <img width='1100px' src={MyProfile} alt="" />
                </div>
                <div className="Contact_re transition-all ml-6">
                    <div className="summery transition-all">
                        <h4 className='transition-all'>Hello <span className='line transition-all'></span>----</h4>
                        <h1 className='transition-all'>I'm Software Developer</h1>
                        <p className='transition-all'>As a passionate software developer, I specialize in building robust and scalable 
                        web applications using modern technologies. I enjoy solving complex problems, 
                        collaborating with teams, and continuously learning new skills to stay ahead in 
                        the fast-evolving tech landscape. My dedication to clean code and user-centric 
                        design drives me to deliver high-quality solutions that make a positive impact.</p>
                        <hr className='transition-all' />
                    </div>
                    <div className="Info_Contact transition-all">
                        <div className="box transition-all">
                            <h3 className='transition-all'>Name:</h3>
                            <p className='transition-all'>Eng Cabdirahman Ibrahim Cali</p>
                        </div>

                        <div className="box transition-all">
                            <h3 className='transition-all'>Phone:</h3>
                            <p className='transition-all'>+252 63 4795728</p>
                        </div>

                        <div className="box transition-all">
                            <h3 className='transition-all'>Email:</h3>
                            <p className='transition-all'>cabdirahmanibraahin448@gmail.com</p>
                        </div>

                        <div className="box transition-all">
                            <h3 className='transition-all'>Form:</h3>
                            <p className='transition-all'>Hargeisa, Somaliland</p>
                        </div>
                    </div>

                    <div className="btns_re transition-all">
                        <button className='transition-all'>Download CV</button>
                        <button className='transition-all'>Hire Me</button>
                    </div>
                </div>
            </section>

            {/* Education and Experience Section */}
            <section className="Education_Experience">
 
                {/* Education Sec */}
                <div className="Education">
                    <div className="card rounded shadow">
                        <h2 className='font-normal text-xl'>Diploma of ICT </h2>
                        <h4 className='font-light italic text-[16px] mb-0.5'>Tanaad Collage / 2021 - 2022</h4>
                        <p className='font-light text-[14px]'>Completed a comprehensive ICT diploma program focused 
                        on computer systems, networking, and software applications.</p>
                    </div>

                    <div className="card rounded shadow">
                        <h2 className='font-normal text-xl'>Full-Stack Web Development</h2>
                        <h4 className='font-light italic text-[16px] mb-0.5'>Telesom Academy / 2025 - 2026</h4>
                        <p className='font-light text-[14px]'>Developed hands-on skills in both front-end and back-end technologies, 
                            building real-world web applications from concept to deployment.</p>
                    </div>

                    <div className="card rounded shadow">
                        <h2 className='font-normal text-xl'> Computer Scineice</h2>
                        <h4 className='font-light italic text-[16px] mb-0.5'>UOH / 2024 - Precent</h4>
                        <p className='font-light text-[14px]'>Computer Science at the University of Hargeisa, where I am gaining 
                            a strong foundation in programming, algorithms, and software engineering principles.</p>
                    </div>
                </div>

                {/* Line between two sections */}
                <span className='h-line'></span>

                {/* Experience Sec */}
                <div className="Experience">
                     <div className="card rounded shadow">
                        <h2 className='font-normal text-xl'>Frontend Developer</h2>
                        <h4 className='font-light italic text-[16px] mb-0.5'>SuperSub Tech / 2024 - 2026</h4>
                        <p className='font-light text-[14px]'>I'm working <strong>SuperSub Tech</strong> as Frontend developer, 
                        I delever professional and scalpel project to them on time.</p>
                    </div>

                     <div className="card rounded shadow">
                        <h2 className='font-normal text-xl'>Full-Stack Developer</h2>
                        <h4 className='font-light italic text-[16px] mb-0.5'>Somtel / 2026 - Precent</h4>
                        <p className='font-light text-[14px]'>At Somtel, I design and implement end-to-end web solutions, collaborating with 
                            cross-functional teams to deliver scalable and efficient applications that enhance business operations.</p>
                    </div>
                </div>
            </section>
        </>
     );
}

export default ResumePage;