import React from "react";
import "./Math.css";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";

function Math() {
  return (
    <div>
      <Container>
        <Row className="first-row">
          <Col>
            <Card border="secondary">
              <Card.Header>
                <h1>Mathematics</h1>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  <p className="math-opening-para">
                    At Mina’s School of Great Falls, we value and place a high
                    priority on our student’s math curriculum. We assess new
                    students to determine if any fundamental reviewing must
                    occur, and quickly get to work addressing any weaker areas
                    the student may have. Miss Mina’s hands-on method of
                    teaching allows students of any level to easily visualize
                    topics and gives them a solid understanding, without any
                    memorization. Click any of the subjects below for a more
                    detailed explanation of our teaching methods.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <img
              className="opening-img"
              src="math-img-1.jpg"
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
                  <h4>Addition</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    In the addition lessons, the students use manipulatives such
                    as ten blocks and place value mats. We make sure every
                    student knows each lesson before the child moves on to the
                    next step of addition. We begin by teaching numbers (reading
                    and making numbers). By the end of the addition package,
                    students will have learned to add three-digit numbers to
                    three-digit numbers mentally and to add larger numbers on
                    paper.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <h4>Subtraction</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    In subtraction, we use same manipulatives as in the addition
                    package along with real-world money. Students learn simple
                    subtraction and end up mentally able to subtract numbers in
                    the thousands. They also learn about monetary units and to
                    use their mental math knowledge to handle currency problems.
                    Students also learn how to subtract on paper and to regroup
                    numbers. Finally, they are given a variety of word problems
                    that include addition and subtraction.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <h4>Simple Multiplication/Division</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    For multiplication, students use manipulatives which are
                    called the “spider and caterpillar.” The spider and
                    caterpillar legs are filled with identical groups of beads
                    and then used as a visual aid or hands on multiplication
                    table. Coins and cubes, or counters, provide another way for
                    our students to visually understand multiplication and
                    division.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <h4>Advanced Multiplication</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    The advanced multiplication package teaches students
                    rounding and how to multiply two-digit numbers times a
                    one-digit number mentally. Students complete this topic with
                    the know how to multiply three-digit by two-digit numbers on
                    paper.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <h4>Long Division</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    The long division package starts with the reinforcement of
                    simple division to connect it with the estimation of
                    division. With the estimation skill, many students can
                    easily do long division without any guessing. The long
                    division lesson starts with small long division problems and
                    moves to larger numbers. By the end of the package, students
                    learn about divisibility and practice related word problems.
                    These word problems are made easy through a method called
                    “group, in the group, total.” Using this process, students
                    can perform multiplication, division, times as much, and any
                    other word problems that typically are harder due to the
                    wording and numbers.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  <h4>Fractions</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    During the fraction lessons, students use fraction bars to
                    envision and understand each lesson within the packages.
                    Fractions are divided into five packages: introduction,
                    addition, subtraction, multiplication, and division. Each
                    package prepares the child for the next lesson.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  <h6>Introduction to Fractions</h6>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    In this package, students learn all there is to know about
                    simple and more complex fractions. Topics included in the
                    beginning level incorporates work that prepares students for
                    the next level, and includes greatest common factor (GCF),
                    Least Common Multiple (LCM), equivalent fractions, comparing
                    fractions and, improper and mixed numbers.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7">
                <Accordion.Header>
                  <h6>
                    Addition/Subtraction/Multiplication/Division of Fractions
                  </h6>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Students use the skills gained in the beginning fraction
                    lessons to add, subtract, multiply, and divide simple
                    fractions and mixed numbers. By the end of this topic
                    students are able to work independently to solve word
                    problems and write down the mathematical process.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8">
                <Accordion.Header>
                  <h4>Decimals</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    The decimal package uses a manipulative called the “decimal
                    chart.” Students start by gaining a working knowledge of the
                    meaning of decimals. Then they learn how to do mental math
                    with decimals, including adding, subtracting, and
                    multiplying the numbers. Children add, subtract, and apply
                    these skills to multiplication and division of decimals
                    using a simple method. Students also learn to convert
                    fractions to decimals and vice versa. By the end of this
                    topic, students work on decimal word problems.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="9">
                <Accordion.Header>
                  <h4>Percent</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    In the percent lessons, students also will use the decimal
                    chart to understand the connection between decimals and
                    percent. Fraction bars create a visual connection between
                    fractions and percent. This helps students convert decimals
                    and fractions to percent and vice versa. After students
                    properly understand each concept in the percent package,
                    they move on to complete 7th grade level percent lessons.
                    Seventh grade percent work includes ratio, rate, unit rate,
                    and proportion. With that knowledge, students can apply
                    proportions to solve percent word problems. They work on
                    word problems containing percent questions and a mix of
                    other topics from earlier lessons. The percent package is
                    considered the end of an elementary level knowledge of
                    mathematics. At this point the level of many of the
                    questions is similar to that found on the SAT test!
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="10">
                <Accordion.Header>
                  <h4>Inegers</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    In our integers package, we use a number line, and blue and
                    red tiles that represent debt and earning (positive and
                    negative). Learning through these manipulatives, students
                    grow to understand completely when they should add or
                    subtract, and when an answer is negative or positive.
                    Students also use their addition and subtraction mental math
                    skills to work with integers. With the knowledge gained from
                    the integers and fraction’s packages, students can easily
                    perform all four operations with negative and positive
                    fractions.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="11">
                <Accordion.Header>
                  <h4>Units of Measurement</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    In the measurement unit, there is an emphasis on the metric
                    system. Students also learn to use the “customary system”
                    for every day measurement. Students practice the lesson
                    using manipulatives that visually demonstrate the different
                    types of units and their meaning. At the end of this
                    package, students are taught about elapsed time. As in other
                    lessons, the measurement topic requires a lot of practice.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="12">
                <Accordion.Header>
                  <h4>Geometry</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    The geometry package starts with a simple understanding of
                    shapes. This package uses a combination of practice problems
                    found in the 6th and 7th grade math book. The lessons are
                    taught from those books and manipulatives are used to
                    reinforce each lesson on shapes, lines, angles, etc. Using
                    “nets,” students take a three-dimensional shape and unfold
                    it to create a two-dimensional space figure which they can
                    work with to find the surface area of a solid. The children
                    develop a deep understanding of the relationship between
                    two- and three-dimensional objects. By the end of this
                    package, the student will learn how to find the perimeter,
                    area, and volume of every shape through a concrete
                    understanding of geometry rather than solely memorizing
                    formulas soon forgotten.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="13">
                <Accordion.Header>
                  <h4>Equations</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    In this package, students learn to combine like terms and by
                    the end to solve for the variable in both simple and complex
                    equations using integers and fractions. They also learn to
                    factor numbers in preparation for algebra.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="14">
                <Accordion.Header>
                  <h4>Exponents</h4>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    The exponents package teaches students about positive and
                    negative exponents, solving equations with exponents, and
                    using scientific notation.
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

export default Math;
