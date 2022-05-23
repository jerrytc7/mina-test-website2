import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./SchoolSchedule.css";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

const calendarInfo = {
  2022: {
    1: {
      6: "O",
      7: "O",
      17: "H",
      19: "O",
      20: "QE & ER",
      21: "TW",
      24: "SD",
    },
    2: {
      1: "O",
      21: "H",
    },
    3: {
      3: "ER",
      4: "SD",
      31: "QE & ER",
    },
    4: {
      1: "TW",
      4: "H",
      5: "H",
      6: "H",
      7: "H",
      8: "H",
      15: "O",
      22: "O",
    },
    5: {
      2: "O",
      30: "H",
    },
    6: {
      10: "YE",
      13: "TW",
      20: "H",
    },
    7: {
      5: "CP",
      6: "CP",
      7: "CP",
      8: "CP",
      11: "CP",
      12: "CP",
      13: "CP",
      14: "CP",
      15: "CP",
      18: "CP",
      19: "CP",
      20: "CP",
      21: "CP",
      22: "CP",
    },
    8: {
      1: "CP",
      2: "CP",
      3: "CP",
      4: "CP",
      5: "CP",
      8: "CP",
      9: "CP",
      10: "CP",
      11: "CP",
      12: "CP",
      15: "CP",
      16: "CP",
      17: "CP",
      18: "CP",
      19: "CP",
      23: "F",
    },
    9: {
      3: "H",
      6: "H",
      7: "O",
      16: "O",
    },
    10: {
      11: "SP",
      29: "QE & ER",
    },
    11: {
      1: "TW",
      2: "TW",
      4: "O",
      11: "ER",
      24: "H",
      25: "H",
      26: "H",
    },
    12: {
      8: "O",
      20: "H",
      21: "H",
      22: "H",
      23: "H",
      24: "H",
      27: "H",
      28: "H",
      29: "H",
      30: "H",
      31: "H",
    },
  },
};

function SchoolSchedule() {
  return (
    <Container>
      <Row>
        <Col>
          <h3>School & Camp Calendar</h3>
        </Col>
      </Row>
      <Row>
        <Col className="calender-container">
          <div>
            <Calendar
              className="calendar"
              tileContent={({ date }) => {
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
          </div>
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
                <div className="legend-desc tile-ER">
                  <strong>ER: </strong>
                  <p>2 Hour Student Early Release</p>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="legend-desc tile-QE">
                  <strong>QE: </strong>
                  <p>End of the Quarter</p>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="legend-desc tile-YE">
                  <strong>YE: </strong>
                  <p>Last Day for Regular Classes</p>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="legend-desc tile-O">
                  <strong>O: </strong>
                  <p>Religous and Cultural Observance(s)</p>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="legend-desc tile-SD">
                  <strong>SD: </strong>
                  <p>Staff Development Day/Student Holiday</p>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="legend-desc tile-SP">
                  <strong>SP: </strong>
                  <p>School Planning Day/Student Holiday</p>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="legend-desc tile-TW">
                  <strong>TW: </strong>
                  <p>Teacher Workday/Student Holiday</p>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="legend-desc tile-H">
                  <strong>H: </strong>
                  <p>Student Holiday</p>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="legend-desc tile-NT">
                  <strong>NT: </strong>
                  <p>New Teacher Training</p>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="legend-desc tile-CP">
                  <strong>CP: </strong>
                  <p>Summer Camp</p>
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

