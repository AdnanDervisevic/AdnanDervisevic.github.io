import React, { useState, useEffect } from 'react';
import { Button, H3, Input, ButtonGroup, Text, ListItem, Checkbox } from 'collector-portal-framework/dist/components';
import styled from 'collector-portal-framework';

const Column = styled.div({
    display: 'flex',
    flexDirection: 'column',
});

const Row = styled.div({
    display: 'flex',
    flexDirection: 'column',
});

const ListDiv = styled.div({
    '> li > div': {
        padding: 8,
    },
});

export const SignUp: React.FC = () => {
    const [food, setFood] = useState('Vanlig');
    const [isFull, setIsFull] = useState(false);
    const [participants, setParticipants] = useState<undefined | { name: string; food: string }[]>(undefined);
    const [maxParticipants, setMaxParticipants] = useState(30);
    const [sendEmail, setSendEmail] = useState(true);

    useEffect(() => {
        setParticipants([
            { name: 'Erik Kristiansson', food: 'Vanlig' },
            { name: 'Berik Kristiansson', food: 'Vanlig' },
            { name: 'Adnan Kristiansson', food: 'Vanlig' },
            { name: 'Patrik Kristiansson', food: 'Vegansk' },
        ]);
    }, []);

    return (
        <Row>
            <Column>
                <H3>Anmälan till kompetenslunch!</H3>

                <div style={{ maxWidth: 400, marginBottom: 80 }}>
                    <Text>Du är inloggad med AD koppling så du kan helt enkelt anmäla dig genom att klicka på knappen under.</Text>
                    <strong>Kostpreferenser</strong>
                    <Input style={{ maxWidth: 320 }} value={food} onChange={event => setFood(event.currentTarget.value)} />
                    <ButtonGroup>
                        {isFull && (
                            <Text style={{ fontStyle: 'italic' }}>
                                Tyvärr är det fullbokat men du kan sätta dig på väntlistan så får du mail om du kommer in senare.
                            </Text>
                        )}
                        {!isFull && (
                            <Checkbox
                                label="Skicka mail med kalenderinbjudan"
                                checked={sendEmail}
                                onChange={() => setSendEmail(prev => !prev)}
                            />
                        )}
                        <Button>{!isFull ? `Anmäl mig med ${food} mat` : `Sätt mig på väntlistan med ${food} mat`}</Button>
                    </ButtonGroup>
                </div>
            </Column>

            <Column>
                <H3>
                    Deltagare: {participants && participants.length} av {maxParticipants}
                </H3>
                Den här borde nog ligga på en egen sida om vi gör det här på riktigt
                <div style={{ maxWidth: 320 }}>
                    {participants &&
                        participants.map(participant => (
                            <ListDiv>
                                <ListItem item={{ title: participant.name, details: `${participant.food} mat` }} />
                            </ListDiv>
                        ))}
                </div>
            </Column>

            <ButtonGroup style={{ marginTop: 8 }}>
                <Button
                    onClick={() => {
                        setIsFull(true);
                        setParticipants(new Array(30).fill({ name: 'Adnan', food: 'Vanlig' }, 0, 30));
                    }}
                >
                    Toggla till hur det ser ut när det är fullt
                </Button>
            </ButtonGroup>
        </Row>
    );
};
