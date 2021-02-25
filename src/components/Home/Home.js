import React, { useState, useEffect } from "react";
import { Segment, Grid, Divider, Header, Icon } from "semantic-ui-react";

const Home = () => {
  const [data, setData] = useState(0);

  useEffect(() => {}, []);

  return (
    <div className="app">
      <Segment placeholder>
        <Grid columns={2} stackable textAlign="center">
          <Divider vertical>lub</Divider>

          <Grid.Row verticalAlign="middle">
            <Grid.Column>
              <Header size="huge" as="a" href="https://www.lukaszbacik.pl/" target="_blank">
                <Icon name="external square" color="teal" size="massive" />
                <p>Odwiedź mojego bloga</p>
              </Header>
            </Grid.Column>

            <Grid.Column>
              <Header size="huge" as="a" href="https://m.me/baciklukasz" target="_blank">
                <Icon name="facebook" color="blue" size="massive" />
                <p>Napisz do mnie</p>
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
};

export default Home;
