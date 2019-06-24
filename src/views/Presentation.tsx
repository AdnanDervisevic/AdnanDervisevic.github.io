import React, { useState, useEffect } from 'react';
import { SignUp } from '../components/SignUp';
import { PageHeader, PageContainer, H3, Text } from 'collector-portal-framework/dist/components';
import styled from 'collector-portal-framework';

const Row = styled.div({
    display: 'flex',
    alignItems: 'center',
    paddingTop: 16,
});

const Col = styled.div({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    background: '#f5f5f5',
    borderRadius: 12,
});

export const PresentationView: React.FC = () => {
    const [image, setImage] = useState<undefined | string>(undefined);
    const [profile, setProfile] = useState<undefined | string>(undefined);
    const [name, setName] = useState<undefined | string>(undefined);

    useEffect(() => {
        setImage('https://ca.slack-edge.com/T06MRL484-U4U3V9XE3-257b7d254783-72');
        setProfile('https://www.linkedin.com/in/daniel-br%C3%A4nnstr%C3%B6m-7bb6623/');
        setName('Daniel Brännström');
    }, []);

    return (
        <>
            <PageHeader title="Platsbokning för Kompetenslunch!" />

            <PageContainer>
                <Col style={{ marginBottom: 40 }}>
                    <div style={{ padding: 32 }}>
                        <H3 style={{ marginBottom: 0, marginTop: 0 }}>Att ta en verksamhet från SAFE till SAFE 2 - En genomgång</H3>
                        <Row>
                            <img alt="Talarebild" src={image} height="75px" style={{ marginRight: 24 }} />

                            <Col>
                                <h4 style={{ marginTop: 0, marginBottom: 8 }}>
                                    Veckans talare - {profile ? <a href={profile}>{name}!</a> : <Text>{profile}</Text>}
                                </h4>
                                <Text>
                                    Daniel kommer från Collector Bank för att tala med oss om hur man kan transformera sin affär med hjälp
                                    av tre enkla knep!
                                </Text>
                            </Col>
                        </Row>
                    </div>
                </Col>

                <SignUp />
            </PageContainer>
        </>
    );
};
