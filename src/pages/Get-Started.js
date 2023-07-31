import React, {useEffect} from 'react';
import styles from '../styles/get-started.module.css';
import Tasks from '../components/Tasks';

export default function Get_Started() {
    useEffect(()=> {
        document.title = 'Get-Started';
    });
  return (
    <div className={styles.main_container}>
        <div className={styles.container}>

        <div id='checkup'>
                <h2>Go for a Medical Checkup</h2>
                <img src="https://menshealthfoundation.ca/wp-content/uploads/2016/10/Doctor-Checkup.jpeg" />
                <p>As a fitness pioneer we have seen a number of such old-age people who instantly start hitting the gym and undergo strength training without any prior check ups or guidance. Before older adults start a new fitness program or begin hitting the gym, it is essential for them to undergo a medical checkup to ensure their safety and well-being. A medical checkup allows healthcare professionals to assess an individual's overall health status and identify any potential health risks or pre-existing conditions that may require special consideration during exercise. 
                    <br/>
                    So, here we are suggesting some general health tests:
                </p>
                <ul className={styles.tests}>
                    <li>Blood Pressure Check</li>
                    <li>Heart Condition</li>
                    <li>Bone Density scan</li>
                    <li>Vitamin D Test</li>
                    <li>Diabetes Check</li>
                </ul>
        </div>

        <div id='hobbies'>
            <h2>Try new HOBBIES</h2>
                <img src="https://cdn.medicalguardian.com/images/uploads/blog/posts/ea8e3823a05c8df12fa18f5d4be17027.jpg" />
                <p>While many older adults dream about the day they can hang up their 9-to-5 workdays and long commutes, they may not know precisely how to spend each day once work no longer encompasses their time. On average, seniors spend under 10 hours each day sleeping, and that leaves quite a bit of time for leisure activities once their daily chores are completed. Pick anyone from the below: 
                    <br/>
                    <ul className={styles.tests}>
                    <li>Learn a new language</li>
                    <li>Embrace technology</li>
                    <li>Gardening</li>
                    <li>Read a book</li>
                    <li>Learn a new instrument</li>
                    <li>Paint</li>
                    <li>Have a Pet</li>
                </ul>
                <p>Aaaaand so on... this list is evergoing. So, you just need to choose from this and that's it.</p>
                </p>
        </div>

        <div id='schedule'>
        <h2>Build a Schedule and stick to it</h2>
                <img src="https://www.allbusinesstemplates.com/thumbs/f8e631d4-b3c2-4a03-acfb-488771e3b04c_1.png" />
                <p>How do ants make an ant hill so tall?
                    <br/>
                    <br/>
                    They consistently add one grain of sand at a time.
                    <br/>
                    <br/>
                    It's the little bit you do every day that will over time increase your strength and endurance.
                    <br/>
                    <br/>
                    To be consistent requires taking a good look at your day and week.
                    <br/>
                    <br/>
                    What days will I most likely be able to fit in exercise? What time of day would be best?
                    <br/>
                    <br/>
                    The longer you are faithful to the schedule the easier it will be to stick to the exercises for the elderly and seniors program.</p>
        </div>

        <div id='limits'>
        <h2>Know your limits</h2>
                <img src="https://149514549.v2.pressablecdn.com/wp-content/uploads/2020/02/weightlifting-for-seniors-3.jpeg" />
                <p>When creating a workout routine for you, it's essential to consider one's individual capabilities, health conditions, and fitness levels. Older adults may have certain limitations and considerations that need to be taken into account to ensure a safe and effective workout.</p>
                <p>Few points to take note of:</p>
                <ul className={styles.tests}>
                    <li>Moderate Workouts</li>
                    <li>Avoid Overexertion</li>
                    <li>Proper Warm-up</li>
                    <li>Hydration</li>
                    <li>Avoid Heavy Weights</li>
                    <li>Rest and Recovery</li>
                </ul>
        </div>
        <div id='tasks'>
        <Tasks/>
        </div>
        </div>

        <aside className={styles.side}>
            <h1>Quick View</h1>
            <ol>
                <a href="#checkup"><li>Go for a Medical Checkup</li></a>
                <a href="#hobbies"><li>Try new HOBBIES</li></a>
                <a href="#schedule"><li>Build a Schedule and stick to it</li></a>
                <a href="#limits"><li>Know your limits</li></a>
                <a href="#tasks"><li>What will I do?</li></a>
            </ol>

            <hr/>

            <div className={styles.comm}>
                <h1>Join Facebook Community</h1>
                <a href="https://www.facebook.com/groups/1051662328899762" target='_blank'><img src="https://clipart-library.com/new_gallery/377-3776210_facebook-logo-vector-logovectornet-logo-facebook-2019-png.png" alt="fb-logo" /></a>
                <p> Open to connect with the people of your age and explore more.</p>
            </div>

            <hr/>
            
            <div className={styles.video}>
            <h1>Guide</h1>    
            <iframe width="450" height="315" src="https://www.youtube.com/embed/qVrfIpvN1C8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </aside>
        
    </div>
  )
}
