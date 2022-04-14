import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./SchoolSchedule.css";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

const calendarInfo = {
  2022: {
    4: {
      1: "TW",
      4: "H",
      5: "H",
      6: "H",
      7: "H",
      8: "H",
    },
    5: {
      2: "O",
    },
  },
};

function SchoolSchedule() {
  return (
    <Container>
      <Row>
        <Col>
          <Calendar
          className="calendar"
            tileContent={({ date }) => {
              console.log(date.getMonth());
              let contents = "";
              if (
                calendarInfo[date.getFullYear()] &&
                calendarInfo[date.getFullYear()][date.getMonth() + 1] &&
                calendarInfo[date.getFullYear()][date.getMonth() + 1][
                  date.getDate()
                ]
              ) {
                contents =
                  calendarInfo[date.getFullYear()][date.getMonth() + 1][
                    date.getDate()
                  ];
              }
              return <div>{contents}</div>;
            }}
            tileClassName={({ date }) => {
              console.log(date.getMonth());
              let contents = "";
              if (
                calendarInfo[date.getFullYear()] &&
                calendarInfo[date.getFullYear()][date.getMonth() + 1] &&
                calendarInfo[date.getFullYear()][date.getMonth() + 1][
                  date.getDate()
                ]
              ) {
                contents =
                  calendarInfo[date.getFullYear()][date.getMonth() + 1][
                    date.getDate()
                  ];
              }
              return "tile-" + contents;
            }}
          />
        </Col>
        <Col>
          <Card style={{ width: "22rem" }}>
            <Card.Header>Legend</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <div className="legend-desc tile-F">
                  <strong>F: </strong>
                  <p>First Day of School</p>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="legend-desc">
                  <strong>ER: </strong>
                  <p>2 Hour Student Early Release</p>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="legend-desc">
                  <strong>QE: </strong>
                  <p>End of the Quarter</p>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="legend-desc">
                  <strong>YE: </strong>
                  <p>Last Day for Regular Classes</p>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="legend-desc">
                  <strong>O: </strong>
                  <p>Religous and Cultural Observance(s)</p>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="legend-desc">
                  <strong>SD: </strong>
                  <p>Staff Development Day/Student Holiday</p>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="legend-desc">
                  <strong>SP: </strong>
                  <p>School Planning Day/Student Holiday</p>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="legend-desc">
                  <strong>TW: </strong>
                  <p>Teacher Workday/Student Holiday</p>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="legend-desc">
                  <strong>H: </strong>
                  <p>Student Holiday</p>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="legend-desc">
                  <strong>NT: </strong>
                  <p>New Teacher Training</p>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SchoolSchedule;
