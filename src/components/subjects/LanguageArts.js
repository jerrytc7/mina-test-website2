import React from "react";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";

function LanguageArts() {
  return (
    <div>
      <Container>
        <Row className="first-row">
          <Col xs={12} lg={true}>
            <Card border="secondary">
              <Card.Header>
                <h1>Language Arts</h1>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  <p className="math-opening-para">
                    Our comprehensive Language Arts program molds student into
                    skilled readers, writers, and thinkers. The curriculum
                    encompasses phonics, reading, grammar, vocabulary, writing,
                    and spelling. Mina’s School of Great Falls focuses on the
                    basics. As such, we place great emphasis on building
                    students’ phonological awareness. Students learn effective
                    strategies to decode unfamiliar words with more ease and
                    confidence. We use direct instruction and student-centered
                    activities to strengthen students’ vocabulary and literacy
                    skills, and encourage language development through
                    participation in authentic language activities.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} lg={true}>
            <img
              className="opening-img"
              src="languagearts-img-1.jpg"
              alt="happy-math-img"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 className="accord-title">
              Click on Each Topic For More Information
            </h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <Accordion defaultActiveKey={["0"]} alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h4>Reading</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Students are first introduced to letter sounds and phonics.
                    Constant repetition using a variety of methods helps
                    students develop a solid foundation. Children watch
                    educational videos which makes learning attractive and fun.
                    A variety of books are readily available and special time is
                    set aside each day for students to enjoy hearing stories
                    read out loud. Not only do we include fiction literature,
                    books belonging to the non-fiction genre are also read to
                    our students. This encourages curiosity and interest in
                    science, geography, and history from childhood.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <h4>Writing</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    The first step to good handwriting is holding the pencil in
                    the correct position. This vital skill is taught from the
                    very beginning. We teach letter formation, accurate hand
                    movements, and proper body posture. Each letter is carefully
                    written multiple times. Continuous review guarantees our
                    students become comfortable in scripting from an early age.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <h4>Grammar</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    The school follows the Voyages in English textbooks, as part
                    of the curriculum. Students are taught the structure and
                    conventions of the Modern English language with an emphasis
                    on the basics. This includes the identification and
                    understanding of nouns, pronouns, verbs, adverbs,
                    adjectives, subjects, predicates, and other branches of
                    grammatical conventions. Continuous review of previously
                    taught concepts ensures that our students become extremely
                    confident in their knowledge. Interactive activities make
                    learning grammar an easy and interesting subject. We also
                    teach students editing and proofreading for capitalization,
                    sentence endings, usage of commas and apostrophes, and
                    hyphens. A thorough understanding of sentence structure
                    leads into sentence diagramming where students are taught
                    the identification of sentence parts and the visual
                    representation of such parts.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <h4>Root Vocabulary</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Aiming to enhance student’s vocabulary range, word root
                    vocabulary instruction is incorporated into the curriculum.
                    We teach units on prefixes, suffixes, and word endings.
                    Learning root words enables students to decipher meanings
                    more easily, which leads to gradual vocabulary expansion. By
                    understanding root words, children find it easier to
                    decipher the meanings of more difficult words. Class
                    discussions around the contextual usage of multifaceted
                    words forms an important part of the curriculum. Teachers
                    provide students with ample opportunities to show their full
                    grasp of complex words.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <h4>Literature</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    We expose students to quality fiction and non-fiction
                    literature. Emphasis on reading classical novels is one of
                    the core foundations of our curriculum. Books are chosen
                    carefully to ensure that the thematic elements in the
                    stories revolve around good moral values. Students are
                    taught how to read. We place importance on reading out loud
                    with expression, stopping at periods, and pausing at commas.
                    Students are encouraged to look up the meaning of difficult
                    words. There is detailed instructional emphasis on
                    inferential deductions and summarization, as well as
                    author’s purpose and main ideas. In-depth discussions during
                    literature circles encourages students to share their
                    opinions and helps them to make connections with the
                    characters and stories. This promotes a better understanding
                    of the text. The culminating activity of novel studies is
                    the production of book reports which showcase the student’s
                    understanding of various story elements. On average, our
                    students compile 3-4 major book reports per academic year.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  <h4>Essay Composition</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    We teach essay writing using a comprehensive approach with
                    an emphasis on good organization. We believe the first step
                    in becoming a good writer is the ability to compose essays
                    with organized structures. Students are taught how to
                    accurately compose sentences, write attention grabbing
                    introductions on their topic, detailed paragraphs in the
                    middle, and conclusions which paraphrase the main ideas in
                    the paper.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  <h4>Handwriting & Typing</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    It is imperative for students to practice and use good
                    handwriting. Not only does this make writing on paper easier
                    and less tiresome, but students also derive benefits from
                    this in mathematics. Our students’ algebra work is more
                    legible and, therefore, reduces the chance of making an
                    error from misreading a number. In this age of technology,
                    we also believe it is critical our students learn the
                    essentials of computer keyboarding. Good posture and paying
                    attention to typing movements may appear trivial but we
                    believe learning to be mindful of such details has long-term
                    benefits.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7">
                <Accordion.Header>
                  <h4>Spelling</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    We teach our students spelling strategies and patterns using
                    phonetics. The children are encouraged to understand and
                    think about how similar words use comparable letter
                    arrangements. With constant review, children become
                    excellent spellers who don’t learn word spellings through
                    memorization, but by visualizing and sounding out letter
                    sounds and recognizing patterns. This enable our students to
                    read beyond the level typical for their age group and to
                    enjoy reading good literature because it is within their
                    grasp.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8">
                <Accordion.Header>
                  <h4>Speaking & Listening</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    We instruct our students in speaking and listening skills to
                    ensure they can talk to groups, be understood, and also
                    evolve into empathetic listeners. This important part of
                    education is stressed during in-depth discussions in
                    literature circles and their involvement in the junior level
                    of the Toastmaster’s Gavel Club held regularly at the
                    school. Our students learn to step out of their comfort
                    zones and become confident when sharing their ideas and
                    thoughts in front of an audience. We urge students to use
                    good body language and powerful vocabulary words to make
                    their points. Students learn how to frame the content of
                    their speech in a cohesive manner and with positive
                    reinforcement. They also practice extemporaneous speaking
                    during the Toastmaster’s Gavel Club meetings when each
                    student is assigned a topic and asked to speak on it without
                    prior knowledge or preparation. These real-world skills are
                    critical for students to master as they move into high
                    school, college, and later the working world.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LanguageArts;
