import React from 'react';
import styles from '../styles/home.module.css'

export default function Tasks() {
  return (
    <div>
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
    </div>
  )
}
