import React from 'react';
import styles from '../styles/home.module.css'

function Home() {
  return (
    <div>
      <section className={styles.imageContainer}>
       <p>Healthify the Elders</p>
       <p>Do you feel your energy has faded away?</p>
       <p>Then You're In The Right Place.</p>
       <p>"WE ARE HERE TO HELP YOU"</p>
      </section>

      <br/>

      <section className={styles.goals}>
        <div className={styles.items}>
            <img src='https://www.femalefirst.co.uk/image-library/partners/rivals/square/1000/o/older-woman-running-31f-15265-f-912-4108-ac-0d-26df-70f-937d-2-4b1752-sc.jpg'></img>
            <button>Power</button>
        </div>
        <div className={styles.items}>
            <img src='https://patch.com/img/cdn/users/3547303/2013/05/raw/e7409ffb62d1987399a3f00d0e921362.png'></img>
            <button>Endurance</button>
        </div>
        <div className={styles.items}>
            <img src='https://i5.walmartimages.com/asr/10bdba6b-f897-43b9-af16-c5b8a405180d.dcdb8e430386447c1a2ea71875bd4dd1.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff'></img>
            <button>Training</button>
        </div>
      </section>
      
      <br/>
      <br/>

      <section className={styles.goals}>
        <div className={styles.items}>
            <img src='https://i.pinimg.com/originals/56/d7/2c/56d72c0b06dd866cbb1b31a8d0d3b302.jpg'></img>
            <button>Diet</button>
        </div>
        <div className={styles.items}>
            <img src='https://www.walgreens.com/images/adaptive/pharmacy/869890_M_Hero_768x666.jpg'></img>
            <button>Medicare</button>
        </div>
        <div className={styles.items}>
            <img src='https://ayusrilanka.lk/wp-content/uploads/2019/02/Whole-body-check-gents-premiere.jpg'></img>
            <button>Checkup</button>
        </div>
      </section>

      <article>
        <div className={styles.detail}>
            <h1>All you need is a START!</h1>
            <p>At ElderFitness, we understand the unique needs and preferences of older adults, and we are dedicated to creating an online space that fosters engagement, connection, and convenience for our esteemed senior users. Our mission is to empower older age individuals to navigate the digital world with ease and confidence.</p>
        </div>

        <div className={styles.detail}>
            <h1>And where should I START from?</h1>
            <img src="https://imgmgr.banggood.com/images/oaupload/banggood/images/CB/53/3a22c482-d2bb-410c-818c-5d27437c614e.jpg"/>
            <p>Before starting any fitness program, it's crucial for older individuals to consult with their healthcare provider, especially if they have any pre-existing health conditions or concerns. A medical check-up can help identify any potential risks or limitations.</p>
            <p>Assess Current Fitness Level: Begin by assessing the current fitness level. Understanding strengths and areas for improvement will help tailor the fitness journey to individual needs.</p>
            <p>Establish clear and achievable fitness goals. These goals may vary from improving flexibility and strength to enhancing cardiovascular endurance.</p>
            <p> Older individuals should begin with low-impact activities such as walking, swimming, or cycling. These exercises are gentle on the joints and provide a solid foundation for building fitness.</p>
            <p> Progress gradually to avoid overexertion and minimize the risk of injury. As fitness improves, slowly increase the intensity, duration, and complexity of exercises.</p>
            <p>A well-rounded fitness program should include cardiovascular exercises (e.g., walking, dancing), strength training (e.g., resistance exercises, bodyweight exercises), and flexibility exercises (e.g., yoga, stretching).</p>
            <p>Engage in Group Classes: Group fitness classes designed for older adults can provide guidance, motivation, and social interaction, making the fitness journey more enjoyable and sustainable.</p>
            <p>Taking these steps at their own pace, with patience and support, will empower you to navigate to your goals confidently.</p>
            <p>Guess..!! You would've got the picture up till now.</p>
            <h2>So, get yourself going now...</h2>
        </div>
        <div className={styles.detail}>
            <h1>What I will do?</h1>
            <p>At first, you must be aware of a few things that you are not supposed to do.</p>
            <p>We have professionals having great experience over the time in health and lifestyle. Most of old age people often end up going to gym blindly without any prior plans or guidance and instantly start lifting heavy weight and strength training. This abrupt activity of body could result in adverse side effects which often include back problem, cramps, muscle tear etc. So one should be cautious beforehand.</p>
            <p>Here are some great ideas that you should start working on.</p>

            <div className={styles.tasks}>

                <div className={styles.task_wrapper}>
                    <img src="https://thumbs.dreamstime.com/b/portrait-senior-woman-exercise-sports-home-180760926.jpg"/>
                    <div>
                    <span>Joints</span>
                    <h1>Flexibility</h1>
                    <p>Daily activities like standing up from a chair and getting in and out of bed become increasingly difficult. These limitations are often caused by a decline in muscle strength and flexibility. Flexibility is the ability of the muscles and tendons to lengthen and stretch in response to movement.</p>
                    </div>
                </div>

                <div className={styles.task_wrapper}>
                    <img src="https://justfitnesshub.com/wp-content/uploads/2017/09/Weight-Training-For-Men-Over-60.jpg"/>
                    <div>
                    <span>Muscle</span>
                    <h1>Strength</h1>
                    <p>Muscle training for older adults, also known as strength training or resistance training, is an essential component of maintaining overall health, mobility, and independence as people age. It involves performing exercises that target various muscle groups to improve strength, balance, and flexibility.</p>
                    </div>
                </div>

                <div className={styles.task_wrapper}>
                    <img src="https://www.eternity-yoga.com/images/seniors_yoga.jpg"/>
                    <div>
                    <span>Stress</span>
                    <h1>Yoga</h1>
                    <p>Yoga is an excellent form of exercise for older adults, offering numerous physical and mental benefits. It is a gentle and low-impact practice that can be adapted to suit individual needs and abilities. Yoga involves various stretching exercises that help improve flexibility and joint mobility, reducing the risk of stiffness.</p>
                    </div>
                </div>

                <div className={styles.task_wrapper}>
                    <img src="https://i.pinimg.com/originals/36/05/04/3605046376e35184ae96cb87b0297312.jpg"/>
                    <div>
                    <span>Heart & Lungs</span>
                    <h1>Endurance</h1>
                    <p>Endurance, also known as cardiovascular or aerobic endurance, is the ability of the body to sustain physical activity for an extended period without fatigue. Endurance is crucial for overall health and well-being, especially in old age. Regular endurance exercises can improve cardiovascular health & boost energy levels.</p>
                    </div>
                </div>
            </div>
        </div>
        <hr/>
      </article>
    </div>
  )
}

export default Home