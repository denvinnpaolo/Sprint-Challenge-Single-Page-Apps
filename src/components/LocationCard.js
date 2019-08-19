import React from "react";
import { Card, Icon } from "semantic-ui-react";

export default function LocationCard({ name, type, dimension, residents }) {
  return(

    <Card>
    <Card.Content header={name} />
    <Card.Content description={`${type}- ${dimension}`} />
    <Card.Content extra>
      <Icon name='user' />
      Character count: {residents.length}
    </Card.Content>
  </Card>

  )
}
