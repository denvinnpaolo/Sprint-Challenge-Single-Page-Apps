import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'

export default function CharacterCard(props) {

  return(
    <Card>
    <Image src={props.character.image}  />
    <Card.Content>
      <Card.Header>{props.character.name}</Card.Header>
      <Card.Meta>{props.character.status}</Card.Meta>
      <Card.Description>
      {props.character.location.name}
      {props.character.origin.name}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        Episodes
      </a>
    </Card.Content>
    </Card>
  );
}
