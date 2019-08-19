import React from "react";
import { Card, Icon } from "semantic-ui-react";

export default function EpisodeCard(props) {

  return(

    <Card>
    <Card.Content header={props.episode.name} />
    <Card.Content description={`Characters: ${props.episode.characters.length}`} />
    <Card.Content extra>
      <Icon name='user' />
      <a href={props.episode.url}>Characters List</a>
    </Card.Content>
  </Card>

  );
}