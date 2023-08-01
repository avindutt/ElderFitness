import React, { useEffect, useState } from 'react';
import styles from '../styles/home.module.css'
import Tasks from '../components/Tasks';

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
        <Tasks/>
        <hr/>
      </article>
    </div>
  )
}

export default Home