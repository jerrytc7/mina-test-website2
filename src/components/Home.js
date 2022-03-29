import React from "react";
import { Carousel } from "react-bootstrap";
import "./Home.css";

function Home() {
  return (
    <div>
      <div
        className="hero-image"
        style={{
          backgroundImage: `url("hero-image.gif")`,
          height: "40rem",
          width: "",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h3 className="mina-title">Mina's School of Great Falls</h3>
      </div>
      <div>
        <h3>What We Do</h3>
        <p>
          At Mina's School, we concentrate on the core math and science
          subjects. However, there is also a strong emphasis on the other
          traditional basics: language arts (reading, writing, and grammar), and
          civics (history and geography). We also weave into each school day
          Exercise, Art (drawing and/or painting), and/or Technology (computer
          technology and "shop"). To find out more about each subject area
          offered, click on the subject below:
          <li>
            <a href="/math">Math</a>
          </li>
          <li>
            <a href="/language-arts">Language Arts</a>
          </li>
          <li>
            <a href="/science">Science</a>
          </li>
          <li>
            <a href="/social-studies">Social Studies</a>
          </li>
          <li>
            <a href="/fitness">Fitness</a>
          </li>
          <li>
            <a href="/art">Art</a>
          </li>
          <li>
            <a href="/technology">Technology</a>
          </li>
        </p>
      </div>
      <div>
        <h3>Testimonials</h3>
        <div>
          <Carousel variant="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="greybackground.avif"
                alt="First slide"
                height="250px"
              />
              <Carousel.Caption>
                <h5>Mary B.</h5>
                <p>
                  "What a great place for our kindergarten girl!! This school
                  ... [has] been able to tailor a program where she learns as
                  much as she wants and is not hindered by a teaching protocol
                  for her generalized age group. What amazes us is how she is
                  already doing math and how her writing has improved in just 4
                  wks!! She is so excited to start reading and loves learning!!!
                  Perfect environment for learning in a loving & fun
                  atmosphere!!!!"
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="greybackground.avif"
                alt="Second slide"
                height="250px"
              />
              <Carousel.Caption>
                <h5>Lisa K.</h5>
                <p>
                  "Hi Miss Mina! I just wanted to say thank you for being such an
                  amazing teacher and helping me learn to be smart. You have
                  helped me become who i am today and you have made me
                  intelligent. so i thank you for being such an amazing
                  teacher!😊"
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="greybackground.avif"
                alt="Third slide"
                height="250px"
              />
              <Carousel.Caption>
                <h5>Dr. Mary Backcock</h5>
                <p>
                  "Our kindergartener has learned so much this year! The teachers
                  give a personalized program for each child. Imagine an
                  environment that helps a child learn in a caring, holistic
                  environment. Our child loves going to school ! Since the fall,
                  she has learned addition, reading, writing and she loves doing
                  her "work" at home without being asked. Amazing system and
                  teaching methods!"
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <p>
          "What a great place for our kindergarten girl!! This school ... [has]
          been able to tailor a program where she learns as much as she wants
          and is not hindered by a teaching protocol for her generalized age
          group. What amazes us is how she is already doing math and how her
          writing has improved in just 4 wks!! She is so excited to start
          reading and loves learning!!! Perfect environment for learning in a
          loving & fun atmosphere!!!!" -Mary B.
        </p>
        <p>
          "We feel so fortunate to be a part of Mina's School. Both of our
          children were bored with learning at public school in the AAP program
          at both "base" and "center" schools. We were tutoring students of
          Mina's for one school year, where it seemed the only time our children
          learned new material in any subject was in their math tutoring. School
          became a time to learn how to stand in line, get quiet quickly, and
          move from activity to activity. When Mina opened her school doors, we
          jumped at the chance to participate hoping at the very least to have
          their math tutoring completed during school hours. In fact, Mina has
          encouraged our children to learn in every subject. In the past school
          year, we have been so impressed with the ways our children have grown
          academically and personally. They love going to school and are
          developing a natural love of learning. They respect all of the other
          students at school. We know now that one of our children was certainly
          battling depression while enrolled at public school "waiting" for the
          AAP program to become challenging, and to see how enthusiastic our
          children are now by comparison is wonderful. They have gained
          confidence, and see that school is a time for learning where their
          thoughts and contributions are valued. They value learning because
          their teachers at Mina's Sci-Math School value learning as well, and
          encourage our children. Both of our children are incredibly quick and
          confident in math, know how to think using the scientific method,
          enjoy creative and non-fiction writing, and are passionate readers. I
          also greatly appreciate that every single day of the school year was
          utilized as a time for learning, even during the final weeks of
          school. Our children also could not be more different from one
          another, and we really appreciate Mina taking the time to understand
          what works for each student." -Katie K.
        </p>
        <p>
          "My son attended Mina's School as a fifth grader during the 2014-2015
          school year. He hated writing before, but Mina's School helped him
          develop his writing skills, and now writing has become his favorite
          subject. His math is very strong because Mina helped him to understand
          rather than memorize math's rules. Her visualization techniques made
          learning math rather enjoyable. Mina covers all academic topics such
          as reading, science and social studies. But what I most appreciate is
          that she helped my son to build strong self-confidence, and taught him
          the study skills that will benefit him throughout his life. He was so
          distracted in the beginning of the school year, but after one month I
          can say he became focused and began listening to what he was taught.
          Family members and relatives believe that a revolution happened, and
          he is now a different boy who loves learning. We cannot thank Mina's
          School enough for what it did for our son. And now - NO MORE HOMEWORK
          BATTLE every night!" -Nahid M.
        </p>
        <p>
          Hi Miss Mina! I just wanted to say thank you for being such an amazing
          teacher and helping me learn to be smart. You have helped me become
          who i am today and you have made me intelligent. so i thank you for
          being such an amazing teacher!😊 -Lisa K.
        </p>
        <p>
          Mina's School of Great Falls offers a full-time program for elementary
          school students up to eighth grade. Our 8-year-old daughter attends
          the school full time. Our 11-and-9-year-old sons receive math
          instruction in the tutoring program twice a week. All three of my
          oldest children have attended the three-week summer math camp. I
          highly recommend this unique school. The director of the school, Mina
          Kondner, is more than an excellent teacher; she is a partner in my
          children's education. Mina is the most determined, thoughtful, hard
          working teacher my children have ever had. All of the teachers at this
          school are impressive--not just for their ability to inspire children
          to learn, but for their patience, compassion, and ability to connect
          with young people and their parents. My children are stronger students
          because of Mina's School of Great Falls. My 8-year-old daughter, who
          attends the school full time, benefits the most. She learned long
          division and wrote analytic book reports in first grade. As a second
          grader, she is adding and subtracting fractions, developing a
          sophisticated understanding of the human body in biology, reciting
          Shakespeare, and improving her writing. Northern Virginia is home to
          many schools with excellent reputations, and yet, many parents are
          dissatisfied with their children's education. If you are seeking a
          better education for your children, I highly recommend you call Mina's
          School of Great Falls and ask to observe a class. You will be
          impressed.
        </p>
        <p>
          My son attended Mina's Sci-Math Private School in Great Falls for two
          years. Prior to attending this school his organizational skills,
          grammar, mathematical concepts, reading comprehension, and science
          were all very weak. He has since made dramatic improvements in all of
          these areas. He can now organize his thoughts easily and process
          information in mathematics and other core subjects. Enrolling him in
          this private school has been the best investment that I made for his
          life, and I am so happy that my son is now prepared for future
          academic challenges.
        </p>
        <p>
          This school is truly amazing! My son has attended for the last couple
          of years and has progressed in all respects, but especially in science
          and math. He now performs at a level in math more than two grade
          levels above where he would in public school. I have always believed
          in the philosophy of investing early and often; I am convinced that
          sending our son to Mina's school has been an investment that will
          benefit my son for his entire life. If you live near Great Falls and
          want to make a special investment in your child, you will be hard
          pressed to find anything better.
        </p>
        <p>
          Since enrolling our son in Mina's Sci-Math school, we have been
          witnessing a miracle unfold before our eyes. Like most parents, we
          wished for our son to be inspired and to find value in his school
          work. Large classrooms and the "one size fits all" method of public
          education, was simply not working. As a result, we decided to seek an
          alternative. Immediately, it seemed everyone we queried offered RAVE
          reviews about Miss Mina. Shortly after, we decided to enroll our
          child. Miss Mina’s teaching style along with her warm and nurturing
          spirit resulted in a transformation of our son's attitude toward all
          of his subjects including: reading, writing, math, science, history
          and more. His self-confidence continuous to escalate and he is
          motivated to complete his assignments from a position of inspiration.
          Miss Mina and her staff are terrific! Our only wish is that we had
          started with Miss Mina sooner!!
        </p>
        <p>
          The student to teacher ratio at Mina's Sci-Math Elementary, coupled
          with the teaching methods that are incorporated with the curriculum,
          are two of the many reasons why my nephew has started to love school
          and studying. Because he feels more confident and responsible now, he
          is beginning to make tremendous strides, especially in Mathematics &
          Organized writing. Mina's Sci-Math Elementary has been extremely
          effective and I vehemently recommend it to those who live in Great
          Falls, McLean, Vienna, Reston, and Herndon.
        </p>
        <p>
          I know the director, and the long life teacher Mina for so many years.
          Her passion for teaching and the ways she cares for her students is
          exceptional. She always amazes me when she shares her belief about
          students and their learning process. She deeply believes, "Every child
          can learn. If a student does not learn then the method is not good
          enough,” she says. Her persistence to follow up with students to bring
          them up at the level every child deserves is so valuable for parents.
          This will make a huge difference in the future for the kids who feel
          confidence about their own abilities to learn. I am happy that Mina
          has her own private school and uses her creative methods to teach.
          This is a great opportunity for those who live close by to take
          advantage of Mina's Sci-Math Elementary School, the Great Falls.
        </p>
        <p>
          There is a unique and effective private school in the heart of Great
          Falls called Mina’s Sci-Math Elementary School. If you are looking for
          a school that takes your child exactly where they are academically,
          builds confidence and excellent study skills, and prepares them to be
          the self-motivated students all the way through college and life -
          then look no further! I was fortunate enough to discover this unique
          teaching method when my child was being home schooled and struggling
          with some of her studies. How I wish a school such as this had existed
          when I was looking for the right school for her from her Kindergarten
          years. What she learned here gave her all the tools she needed to
          excel in high school and college. The encouragement, discipline and
          systematic approach to fully understanding all subjects motivated my
          daughter throughout her academic years and now she has been accepted
          to medical school in the fall.
        </p>
        <p>
          Ms. Mina and Mr. Konder have established a wonderful school that
          rivals any private school in our area. I looked at several schools
          before deciding. Having grown up in private schools, I realize the
          importance of small student to teacher ratio and personalized
          instruction. My son began to thrive within one month of attending. All
          instructors are high quality and the nurturing and loving environment
          that is provided can't be overstated! It is exemplary. The families
          are involved and the children are empowered to take accountability for
          their own work. Love Ms. Mina, Mr. Kondor and all the faculty there!
          Sharon Brigner
        </p>
        <p>
          Our kindergartener has learned so much this year! The teachers give a
          personalized program for each child. Imagine an environment that helps
          a child learn in a caring, holistic environment. Our child loves going
          to school ! Since the fall, she has learned addition, reading, writing
          and she loves doing her "work" at home without being asked. Amazing
          system and teaching methods! -Dr. Mary Babcock
        </p>
      </div>
    </div>
  );
}

export default Home;
